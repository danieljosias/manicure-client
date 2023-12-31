import { Header } from '../../components/Header'
import { useContext, useState } from 'react'
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
  Flex,
} from '@chakra-ui/react'
import { IoMdPeople } from 'react-icons/io'
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
  
  const data = {
    name: name.substring(0,1).toUpperCase().concat(name.substring(1)),
    address: address.substring(0,1).toUpperCase().concat(address.substring(1)),
    cellphone: cellphone.substring(0,1).toUpperCase().concat(cellphone.substring(1)),
    observation: observation.substring(0,1).toUpperCase().concat(observation.substring(1)),
    id: Math.floor(Date.now() * Math.random()).toString(36),
  }

  const handleCreatesClients = async () => {
    if( data.observation === ''){
      for (const key in data) {
        if(key === 'observation'){
          data['observation'] = 'Sem observação'
        }
      }
      
      if(data.name !== '' && data.address !== '' && data.cellphone !== '' ){
        toast.success("Cliente criado!", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark',
        })

        const newItem = data
        const newItems = [...clients, newItem]
        setClients(newItems)
  
        setName('')
        setAddress('')
        setCellphone('')
        setObservation('')
      }else{
        toast.error("Campo em branco!", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark',
        })
      }
    }
    else if(data.name !== '' && data.address !== '' && data.cellphone !== '' && data.observation !== ''){
      toast.success("Cliente criado!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })

      const newItem = data
      const newItems = [...clients, newItem]
      setClients(newItems)

      setName('')
      setAddress('')
      setCellphone('')
      setObservation('')
    }else{
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }

    useEffect(() => {
      const handleBeforeUnload = (e) => {
        const message = 'Você tem alterações não salvas. Tem certeza que deseja sair?'
        e.returnValue = message
        return message
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload)
    }, [])
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
            
            {!isOpen ? <Button onClick={handleCreatesClients} h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{backgroundColor: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
            :
            <Button display='none' h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{backgroundColor: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
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
          
          <Flex bg='#F3CBCB' maxH='500px'  flexDirection='column' p='25' gap='20px' borderRadius='0px 10px 0px 10px'>
           {clients?.length === 0?
            <Flex justifyContent='center' alignItems='center' bg='#D9D9D9' mb='10px' p='10' h='200px'>
             <Heading as='h3'>Não há clientes</Heading>
            </Flex> 
            :
            <Box overflowY='scroll' bg='#D9D9D9' mb='10px' p='10'>
              <ClientsCard isOpen={isOpen} />
          </Box>
          }

            <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
              <Heading as='h3'>Total: {clients.length}</Heading>
            </Box>
          </Flex>    
        </Flex>
      </Flex>
    </>
  )
}
