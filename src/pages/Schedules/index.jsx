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
  VStack,
  Flex,
} from '@chakra-ui/react'
import { MdContacts } from "react-icons/md";
import { SchedulesCard } from '../../components/ScheudulesCard';
import { ApiContext } from '../../providers/api';
import { toast } from 'react-toastify';

export const Schedules = () => {
  const { createSchedules, schedules, listSchedules, setSchedules } = useContext(ApiContext)

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [service, setService] = useState('')
  const [price, setPrice] = useState('')

  const handleNameChange = (e) => setName(e.target.value)
  const handleCellphoneChange = (e) => setCellphone(e.target.value)
  const handleDateChange = (e) => setDate(e.target.value)
  const handleHourChange = (e) => setHour(e.target.value)
  const handleServiceChange = (e) => setService(e.target.value)
  const handlePriceChange = (e) => setPrice(e.target.value)
  
  const isNameError = name === ''
  const isCelphoneError = cellphone === ''
  const isDateError = date === ''
  const isHourError = hour === ''
  const isServiceError = service === ''
  const isPriceError = price === ''

  const user_id = '2558707c-c038-431b-a071-270109cd557b'

  const data = {
    name: name.substring(0,1).toUpperCase().concat(name.substring(1)),
    cellphone: cellphone.substring(0,1).toUpperCase().concat(cellphone.substring(1)),
    date: date.substring(0,1).toUpperCase().concat(date.substring(1)),
    hour: hour.substring(0,1).toUpperCase().concat(hour.substring(1)),
    service: service.substring(0,1).toUpperCase().concat(service.substring(1)),
    price: price.substring(0,1).toUpperCase().concat(price.substring(1)),
    user_id: user_id,
  }

  const handleCreatesSchedules = async () => {
    const res = await createSchedules(data)

    if(res.name !== 'AxiosError'){
      toast.success("Agendamamento criado!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })

      const response = await listSchedules()
      setSchedules(response.data)

      setName('')
      setCellphone('')
      setDate('')
      setHour('') 
      setService('')
      setPrice('')
      
    }else{
      toast.error("Campo vazio!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    } 
  }

  const sun = schedules.reduce((acc, schedule) => {
    return Number(acc) + Number(schedule.price)
  }, 0)

  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Flex flexDirection='column' gap='20px' p='20px'>
        <Box>
          <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
            <Box h='0px'>
              <Heading as='h3' h='0px'>Criação de Agendamento</Heading>
            </Box>
            <Box h='0px'>
              <Icon as={MdContacts} fontSize='20px'/>
            </Box>
          </HStack>
        </Box>

        <Box>
          <FormControl isInvalid={{isNameError, isCelphoneError, isDateError, isHourError, isServiceError, isPriceError}} display='flex' gap='10px' flexDirection='column' justifyContent='center' bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='600px'>
            {name === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Nome é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Nome</FormErrorMessage>}
            <Input h='30px' type='text' value={name} onChange={handleNameChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o nome do cliente'/>
            
            {cellphone === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Celular é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Celular</FormErrorMessage>}
            <Input h='30px' type='text' value={cellphone} onChange={handleCellphoneChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o celular do cliente'/>
            
            {date === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Data é obrigatória.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Data</FormErrorMessage>}
            <Input h='30px' type='text' value={date} onChange={handleDateChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o data do agendamento'/>
            
            {hour === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Hora é obrigatória.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Hora</FormErrorMessage>}
            <Input h='30px' type='text' value={hour} onChange={handleHourChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite a hora do agendamento'/>

            {service === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Serviço é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Serviço</FormErrorMessage>}
            <Input h='30px' type='text' value={service} onChange={handleServiceChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o serviço prestado'/>

            {price === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Preço é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Preço</FormErrorMessage>}
            <Input h='30px' type='text' value={price} onChange={handlePriceChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Digite o preço do serviço'/>
            
            {!isOpen ?  <Button onClick={handleCreatesSchedules} h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{background: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
            :
            <Button display='none' h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{background: 'white', color: 'black', transition: 'ease 1s'}}>Criar</Button>
            }
          </FormControl>
        </Box>
        
        <Flex flexDirection='column' gap='20px'>
          <Box>
            <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
              <Box h='0px'>
                <Heading as='h3'>Listagem de Agendamentos</Heading>
              </Box>
              <Box h='0px'>
                <Icon as={MdContacts} fontSize='20px'/>
              </Box>
            </HStack>
          </Box>

            
          <Flex bg='#F3CBCB' flexDirection='column' p='25' gap='20px' borderRadius='0px 10px 0px 10px' >
            <SchedulesCard isOpen={isOpen}/>

            <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
              <Heading as='h3'>Total: R$ {sun}</Heading>
            </Box>
          </Flex>    
        </Flex>
      </Flex>
    </>
  )
}
