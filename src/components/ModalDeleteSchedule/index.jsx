import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  IconButton,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

export const ModalDeleteSchedule = ({schedule_id}) => {
  const { deleteSchedules, listSchedules, setSchedules, schedules } = useContext(ApiContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const idForDelete = schedule_id
   
  const DeleteClients = async () => {
    toast.success("Agendamento deletado!", {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark',
    })

    const scheduleDelete = schedules.filter((schedule) => schedule.id !== idForDelete)

    setSchedules(scheduleDelete)
    
    onClose()
    
  }
  
  return (
    <>
      <IconButton onClick={onOpen} aria-label='deletar' icon={<DeleteIcon />} color='red' border='none' bg='transparent' h='0' fontSize='20px'/>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='#F3CBCB' />
        <ModalContent display='flex' justifyContent='center' alignItems='center' h='100vh'>
          <Flex justifyContent='center' textAlign='center' p='10'> 
            <Heading as='h2' fontWeight='bold'>Tem certeza?</Heading>
          </Flex>
        
          <Flex p='10' gap='10' w='100%'>
            <Button onClick={DeleteClients} h='40px' type='submit' bg='black' color='white' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'white', 'color':'black'}} transition='ease 1s'>
              Sim
            </Button>
            <Button onClick={onClose} h='40px' type='submit' bg='black' color='white' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'white', 'color':'black'}} transition='ease 1s'>
              Não
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}