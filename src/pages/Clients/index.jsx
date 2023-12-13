import { Header } from '../../components/Header'
import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Flex,
  Box,
  Icon,
} from '@chakra-ui/react'

export const Clients = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => setName(e.target.value)

  const handlePasswordChange = (e) => setPassword(e.target.value)
  
  const isNameError = name === ''
  const isEmailError = password === ''

  return(
    <>
      <Header/>
      <Flex alignItems='center' justifyContent='center' textAlign='center'>
        <FormControl display='flex' flexDirection='column' justifyContent='center'isInvalid={{isNameError, isEmailError}} bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='350px' w='300px'>
          <Heading as='h3' >Criação de Clientes</Heading>
          <Icon as={MdSettings} />
          
          {name === '' ? <FormErrorMessage fontWeight='bold'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' >Nome</FormErrorMessage>}
          <Input type='text' value={name} onChange={handleNameChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
          
          {password === '' ? <FormErrorMessage fontWeight='bold'>Senha é obrigatória.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' >Senha</FormErrorMessage>}
          <Input type='password' value={password} onChange={handlePasswordChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
          
          <Button type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={'black'}>Entrar</Button>
        </FormControl>
      </Flex>
    </>
  )
}
