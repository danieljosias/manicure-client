import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  HStack,
  Flex,
} from '@chakra-ui/react'

export const Signin = () =>{
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => setName(e.target.value)

  const handlePasswordChange = (e) => setPassword(e.target.value)
  
  const isNameError = name === ''
  const isEmailError = password === ''
  
  return(
    <Flex flexDirection='column' alignItems='center' >
      <Heading as='h1'>Entrar</Heading>
      <FormControl display='flex' flexDirection='column' justifyContent='center' gap='15' isInvalid={{isNameError, isEmailError}} bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='200px' w='300px'>
        {name === '' ? <FormErrorMessage fontWeight='bold'>Nome é obrigatório.</FormErrorMessage> : <FormLabel fontWeight='bold'>Nome</FormLabel>}
        <Input type='text' value={name} onChange={handleNameChange} border='none' p='4' bg='#000000' color='#FFFFFF' borderRadius='6px' w='100%' fontWeight='bold' fontSize='large'/>
        
        {password === '' ? <FormErrorMessage fontWeight='bold'>Senha é obrigatória.</FormErrorMessage> : <FormLabel fontWeight='bold'>Senha</FormLabel>}
        <Input type='password' value={password} onChange={handlePasswordChange} border='none' p='4' bg='#000000' color='#FFFFFF' borderRadius='6px' w='100%' fontWeight='bold' fontSize='large'/>
        
        <Button type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' p='6' fontWeight='bold' mt='5' cursor='pointer' fontSize='large' _hover={'black'}>Entrar</Button>
      </FormControl>
    </Flex>
  )
}
