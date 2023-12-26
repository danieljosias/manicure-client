import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
  IconButton,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useContext, useRef, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

export const ModalEditFinance = ({finance_id}) => {
  const { updateFinances, listFinances, setFinances }  = useContext(ApiContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')

  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTypeChange = (e) => setType(e.target.value)
  const handleValueChange = (e) => setValue(e.target.value)

  const user_id = '2558707c-c038-431b-a071-270109cd557b'
  
  const data = {
    description: description,
    type: type,
    value: value,
    user_id: user_id,
  }
  
  for (const key in data){
    `${key}: ${data[key]}`
    if(!data[key]){
      delete data[key]
    }
  }

  const handleUpdatesFinances = async () => {
    const res = await updateFinances(data, finance_id)

    if(res.name !== 'AxiosError'){
      toast.success("Finança atualizada!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })

      const response = await listFinances()
      setFinances(response.data)

      onClose()
    }else{
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }
  }

  return (
    <>
      <IconButton icon={<EditIcon/>} onClick={onOpen} color='blue' border='none' bg='transparent' h='0' fontSize='20px'>Open Modal</IconButton>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='#F3CBCB' />
        <ModalContent p='20px'>
          <Flex justifyContent='space-between'p='10'> 
            <Heading as='h3'>Editar Finanças</Heading>
            <ModalCloseButton border='none' bg='transparent' />
          </Flex>
          
          <FormControl p='10'>
            <FormLabel color='black' fontWeight='bold'>Descrição</FormLabel>
            <Input ref={initialRef} value={description} onChange={handleDescriptionChange} placeholder='Digite a descrição' border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Tipo</FormLabel>
            <Input placeholder='Ex: Entrada ou Saída' value={type} onChange={handleTypeChange}  border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Valor</FormLabel>
            <Input placeholder='Ex: 1000' value={value} onChange={handleValueChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
          </FormControl>
        
          <ModalFooter p='10'>
            <Button onClick={handleUpdatesFinances} h='40px' type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'black', 'color':'white'}} transition='ease 1s'>
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}