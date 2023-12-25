import { Header } from '../../components/Header'
import { useContext, useEffect, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Heading,
  Icon,
  Box,
  HStack,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { IoMdPeople } from "react-icons/io"
import { ClientsCard } from '../../components/ClientsCard'
import { toast } from 'react-toastify'
import { ApiContext } from '../../providers/api'

export const Clients = () => {
  const { createsClients, clients, setClients, listClients } = useContext(ApiContext)

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [observation, setObservation] = useState('')
  
  const handleNameChange = (e) => setName(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)
  const handleCellphoneChange = (e) => setCellphone(e.target.value)
  const handleObservationChange = (e) => setObservation(e.target.value)
  
  const isNameError = name === ''
  const isAddressError = address === ''
  const isCelphoneError = cellphone === ''

  const user_id = '2558707c-c038-431b-a071-270109cd557b'

  const data = {
    name: name,
    address: address,
    cellphone: cellphone,
    observation: observation,
    user_id: user_id,
  }
 
  const handleCreatesClients = async () => {
    const res = await createsClients(data)
    
    if(res.name !== 'AxiosError'){
      toast.success("Cliente criado!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
      
      const response = await listClients()
      setClients(response.data)

      setName('')
      setAddress('')
      setCellphone('')
      setObservation('')

    }else{
      toast.error("Campo vazio!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    } 
  }
  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Flex flexDirection='column' gap='20px' p='20px'>
        <Box>
          <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
            <Box h='0px'>
              <Heading as='h3' h='0px'>Criação de Clientes</Heading>
            </Box>
            <Box h='0px'>
              <Icon as={IoMdPeople} fontSize='20px'/>
            </Box>
          </HStack>
        </Box>

        <Box>
          <FormControl isInvalid={{isNameError, isAddressError, isCelphoneError}} display='flex' gap='10px' flexDirection='column' justifyContent='center' bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='450px'>
            {name === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Nome</FormErrorMessage>}
            <Input h='30px' type='text' value={name} onChange={handleNameChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o nome do cliente'/>
            
            {address === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Endereço é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Endereço</FormErrorMessage>}
            <Input h='30px' type='text' value={address} onChange={handleAddressChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o endereço do cliente'/>

            {cellphone === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Celular é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Celular</FormErrorMessage>}
            <Input h='30px' type='text' value={cellphone} onChange={handleCellphoneChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o celular do cliente'/>
            
            <FormLabel fontWeight='bold' h='25px'>Observações</FormLabel>
            <Input h='30px' type='text' value={observation} onChange={handleObservationChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite algo sobre o cliente'/>
            
            {!isOpen ?  <Button onClick={handleCreatesClients} h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{background: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
            :
            <Button  display='none' h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{background: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
            }
          </FormControl>
        </Box>
        
        <Flex flexDirection='column' gap='20px'>
          <Box>
            <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
              <Box h='0px'>
                <Heading as='h3'>Listagem de Clientes</Heading>
              </Box>
              <Box h='0px'>
                <Icon as={IoMdPeople} fontSize='20px'/>
              </Box>
            </HStack>
          </Box>
          
          <Flex overflowY='scroll' bg='#F3CBCB' flexDirection='column' p='25' gap='20px' borderRadius='0px 10px 0px 10px' >
            <ClientsCard isOpen={isOpen} />

            <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
              <Heading as='h3'>Total: {clients.length}</Heading>
            </Box>
          </Flex>    
        </Flex>
      </Flex>
    </>
  )
}
