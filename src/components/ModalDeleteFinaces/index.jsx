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

export const ModalDeleteFinances = ({finance_id}) => {
  const { deleteFinances, setFinances, listFinances, finances } = useContext(ApiContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const idForDelete = finance_id

  const DeleteFinances = async () => {
    toast.success("Finança deletada!", {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: 'dark',
    })
    const financesDelete = finances.filter((finance) => finance.id !== idForDelete)

    setFinances(financesDelete)

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
            <Button onClick={DeleteFinances } h='40px' type='submit' bg='black' color='white' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'white', 'color':'black'}} transition='ease 1s'>
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