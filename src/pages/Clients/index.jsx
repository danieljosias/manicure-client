import { Header } from '../../components/Header'
import { useState } from 'react'
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
} from '@chakra-ui/react'
import { IoMdPeople } from "react-icons/io";

export const Clients = () => {
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

  return(
    <>
      <Header/>
      <VStack>
        <HStack spacing={10} h='30px' textAlign='center'>
          <Box h='0px'>
            <Heading as='h3'>Criação de Clientes</Heading>
          </Box>
          <Box h='0px'>
            <Icon as={IoMdPeople} fontSize='20px'/>
          </Box>
        </HStack>

        <FormControl isInvalid={{isNameError, isAddressError, isCelphoneError}} display='flex' gap='10px' flexDirection='column' justifyContent='center' bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='450px' w='350px'>
          {name === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Nome</FormErrorMessage>}
          <Input h='30px' type='text' value={name} onChange={handleNameChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o nome do cliente'/>
          
          {address === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Endereço é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Endereço</FormErrorMessage>}
          <Input h='30px' type='text' value={address} onChange={handleAddressChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o endereço do cliente'/>

          {cellphone === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Celular é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Celular</FormErrorMessage>}
          <Input h='30px' type='text' value={cellphone} onChange={handleCellphoneChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o celular do cliente'/>
          
          <FormLabel fontWeight='bold' h='25px'>Observações</FormLabel>
          <Input h='30px' type='text' value={observation} onChange={handleObservationChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite algo sobre o cliente'/>

          <Button h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{background: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
        </FormControl>
      </VStack>
    </>
  )
}
