import { useContext, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Flex,
  Box,
  useToast,
} from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'
import { useNavigate } from 'react-router-dom'

export const Signin = () =>{
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { createAdmin } = useContext(ApiContext)
  const navigate = useNavigate()

  const handleNameChange = (e) => setName(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  
  const isNameError = name === ''
  const isEmailError = password === ''

  const toast = useToast()
  
  const data = {
    "user":{
      username: name,
      password: password,
    }
  }

  const handleSignin = async () => {
    const res = await createAdmin(data)
    console.log(res)
    if(res.name === 'AxiosError'){
      toast({description: 'Nome ou senha inválidos!', status: 'error', duration: 4000})
    }else{
      toast({title: 'Seja bem-vindo(a)!', status: 'success', duration: 4000})
      navigate('/clients/')
    }
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
