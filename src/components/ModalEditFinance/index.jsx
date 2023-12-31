import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  IconButton,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

export const ModalEditFinance = ({finance_id}) => {
  const { updateFinances, listFinances, setFinances, finances }  = useContext(ApiContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')

  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTypeChange = (e) => setType(e.target.value)
  const handleValueChange = (e) => setValue(e.target.value)
  
  const data = {
    description: description.substring(0,1).toUpperCase().concat(description.substring(1)),
    type: type.substring(0,1).toUpperCase().concat(type.substring(1)),
    value: value.substring(0,1).toUpperCase().concat(value.substring(1)),
  }

  for (const key in data){
    `${key}: ${data[key]}`
    if(!data[key]){
      delete data[key]
    }
  }

  const handleUpdatesFinances = async () => {
    if(Object.keys(data).length === 0){
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }else{
      toast.success("Finança atualizada!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })

      const idForUpdate = finance_id
      const newDescription = data.description
      const newType = data.type
      const newValue = data.value
       
      const financesUpdates = finances.map((finance) =>
        finance.id === idForUpdate ? { description: newDescription === undefined? finance.description : newDescription, type: newType === undefined? finance.type : newType, value: newValue === undefined? finance.value : newValue} : finance
      );

      setFinances(financesUpdates)

      setDescription('')
      setType('')
      setValue('')

      onClose()
    }
  }

  

  return (
    <>
      <IconButton icon={<EditIcon/>} onClick={onOpen} color='blue' border='none' bg='transparent' h='0' fontSize='20px'></IconButton>
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
            <Input ref={initialRef} value={description} onChange={handleDescriptionChange} placeholder='Ex: Salário' border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
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