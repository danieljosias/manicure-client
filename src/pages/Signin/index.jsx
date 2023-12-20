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
} from '@chakra-ui/react'

export const Signin = () =>{
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => setName(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  
  const isNameError = name === ''
  const isEmailError = password === ''
  
  const handleSignin = () => {
    
  }

  return(
    <Flex flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' h='100vh' gap='5'>
      <Heading as='h1' >Entrar</Heading>
     
      <FormControl display='flex' flexDirection='column' justifyContent='center'isInvalid={{isNameError, isEmailError}} bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='300px' w='300px' gap='20px'>
        
        {name === '' ? <FormErrorMessage h='0px' fontWeight='bold'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage h='0px' fontWeight='bold' >Nome</FormErrorMessage>}
        <Input h='40px' type='text' value={name} onChange={handleNameChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
        
        {password === '' ? <FormErrorMessage h='0px' fontWeight='bold'>Senha é obrigatória.</FormErrorMessage> : <FormErrorMessage h='0px' fontWeight='bold' >Senha</FormErrorMessage>}
        <Input h='40px' type='password' value={password} onChange={handlePasswordChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
        
        <Button onClick={handleSignin} h='40px' type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{'background':'black', 'color':'white'}} transition='ease 1s'>Entrar</Button>
      </FormControl>
  </Flex>
  )
}
