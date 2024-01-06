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

import { useRef, useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'
import { clientUpdated } from '../../slices/clients/clients'
import { useDispatch, useSelector } from 'react-redux'

export const ModalEditClient = ({client_id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [observation, setObservation] = useState('')

  const handleNameChange = (e) => setName(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)
  const handleCellphoneChange = (e) => setCellphone(e.target.value)
  const handleObservationChange = (e) => setObservation(e.target.value)
  
  const dispatch = useDispatch();
  
  const clients = useSelector((state) =>
    state.clients.find((client) => client.id === client_id)
  )
  
  /* const data = {
    name: name.substring(0,1).toUpperCase().concat(name.substring(1)),
    address: address.substring(0,1).toUpperCase().concat(address.substring(1)),
    cellphone: cellphone.substring(0,1).toUpperCase().concat(cellphone.substring(1)),
    observation: observation.substring(0,1).toUpperCase().concat(observation.substring(1)),
  } */
  
  /* for (const key in data){
    `${key}: ${data[key]}`
    if(!data[key]){
      delete data[key]
    }
  } */

  const handleUpdateClients = async () => {
    if(name === '' && address === '' && cellphone === '' && observation === ''){
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }else{
      toast.success("Cliente atualizado!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      }),
  
      dispatch(
        clientUpdated({
        name,
        address,
        cellphone,
        observation,
        id: client_id,
        })
      )

      setName('')
      setAddress('')
      setCellphone('')
      setObservation('')

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
        <ModalContent p='20px' >
          <Flex justifyContent='space-between'p='10'> 
            <Heading as='h3'>Editar Cliente</Heading>
            <ModalCloseButton border='none' bg='transparent' />
          </Flex>
          
          <FormControl p='10'>
            <FormLabel color='black' fontWeight='bold'>Nome</FormLabel>
            <Input ref={initialRef} value={name} onChange={handleNameChange} placeholder='Digite o nome' border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Endereço</FormLabel>
            <Input placeholder='Digite o endereço' value={address} onChange={handleAddressChange}  border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Celular</FormLabel>
            <Input placeholder='Digite o celular' value={cellphone} onChange={handleCellphoneChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Observações</FormLabel>
            <Input placeholder='Digite a observação' value={observation} onChange={handleObservationChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' h='40px' w='100%' mb='20'/>
          </FormControl>
        
          <ModalFooter p='10'>
            <Button onClick={handleUpdateClients} h='40px' type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'black', 'color':'white'}} transition='ease 1s'>
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}