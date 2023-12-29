import { useContext, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Flex,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiFillEye } from "react-icons/ai"
import { PiEyeClosedBold } from "react-icons/pi";
export const Signin = () =>{
  const { login, setIsAuthenticated } = useContext(ApiContext)
  
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(true)

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
      setIsAuthenticated(true);
      navigate('/clients')
    }
  }

  const showPassword = () => {
    setShow(false)
  }
  
  const hiddenPassword = () => {
    setShow(true)
  }

  return(
    <Flex flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' h='100vh' gap='5'>
      <Heading as='h1'>Entrar</Heading>
     
      <FormControl display='flex' flexDirection='column' justifyContent='center'isInvalid={{isNameError, isEmailError}} bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='300px' w='300px' gap='20px'>
        
        {name === '' ? <FormErrorMessage h='0px' fontWeight='bold'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage h='0px' fontWeight='bold' >Nome</FormErrorMessage>}
        <Input h='40px' type='text' id='name' value={name} onChange={handleNameChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
        
        {password === '' ? <FormErrorMessage h='0px' fontWeight='bold'>Senha é obrigatória.</FormErrorMessage> : <FormErrorMessage h='0px' fontWeight='bold' >Senha</FormErrorMessage>}
        {show === true? 
        <Input h='40px' type='password' id='password' value={password} onChange={handlePasswordChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
        :
        <Input h='40px' type='text' id='password' value={password} onChange={handlePasswordChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'/>
        }
        {show === true? 
        <IconButton h='0' w='10'  position='relative' top='-40' color='white' left='100' aria-label='show password' icon={<AiFillEye />} border='none' bg='transparent' onClick={showPassword}/>
        :
        <IconButton h='0' w='10'  position='relative' top='-40' color='white' left='100' aria-label='hidden password' icon={<PiEyeClosedBold />} border='none' bg='transparent' onClick={hiddenPassword}/>
        }
        <Button onClick={handleSignin} h='40px' type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold' cursor='pointer' fontSize='large' _hover={{'background':'black', 'color':'white'}} transition='ease 1s'>Entrar</Button>
      </FormControl>
  </Flex>
  )
}
