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
} from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Signin = () =>{
  const { login } = useContext(ApiContext)
  
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => setName(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  
  const isNameError = name === ''
  const isEmailError = password === ''
  
  const data = {
    username: name,
    password: password
  }

  const handleSignin = async () => {
    const res = await login(data)
    
    if(res.name === 'AxiosError'){
      toast.error("Nome ou senha inválidos!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }else{
      toast.success("Seja bem-vinda!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
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
