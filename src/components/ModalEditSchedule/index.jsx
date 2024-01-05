import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  IconButton,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useContext, useRef, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

export const ModalEditSchedule = ({schedule_id}) => {
  const { updateSchedules, listSchedules, setSchedules, schedules } = useContext(ApiContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

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

  
  const data = {
    name: name.substring(0,1).toUpperCase().concat(name.substring(1)),
    cellphone: cellphone.substring(0,1).toUpperCase().concat(cellphone.substring(1)),
    date: date.substring(0,1).toUpperCase().concat(date.substring(1)),
    hour: hour.substring(0,1).toUpperCase().concat(hour.substring(1)),
    service: service.substring(0,1).toUpperCase().concat(service.substring(1)),
    price: price.substring(0,1).toUpperCase().concat(price.substring(1)),
  }

  for (const key in data){
    `${key}: ${data[key]}`
    if(!data[key]){
      delete data[key]
    }
  }
  

  const handleUpdatesSchedules = async () => {
    if(Object.keys(data).length === 0){
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    }else{
      toast.success("Cliente atualizado!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })

      const idForUpdate = schedule_id
      const newName = data.name
      const newCellphone = data.cellphone
      const newDate = data.date
      const newHour = data.hour
      const newService = data.service
      const newPrice = data.price
       
      const schedulesUpdates = schedules.map((schedule) =>
        schedule.id === idForUpdate ? { name: newName === undefined? schedule.name : newName, cellphone: newCellphone === undefined? schedule.cellphone : newCellphone, date: newDate === undefined? schedule.date : newDate, hour: newHour === undefined? schedule.hour : newHour, service: newService === undefined? schedule.service : newService, price: newPrice === undefined? schedule.price : newPrice } : schedule
      );

      setSchedules(schedulesUpdates)

      setName('')
      setCellphone('')
      setDate('')
      setHour('') 
      setService('')
      setPrice('')
      
      onClose()
    }
  }
  
  return (
    <>
      <IconButton icon={<EditIcon/>} onClick={onOpen} color='blue' border='none' bg='transparent' h='0' fontSize='20px'></IconButton>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='#F3CBCB' />
        <ModalContent p='20px'>
          <Flex justifyContent='space-between'p='10'> 
            <Heading as='h3'>Editar Agendamento</Heading>
            <ModalCloseButton border='none' bg='transparent' />
          </Flex>
          
          <FormControl p='10'>
            <FormLabel color='black' fontWeight='bold'>Nome</FormLabel>
            <Input h='30px' ref={initialRef} value={name} onChange={handleNameChange} placeholder='Digite o nome' border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Celular</FormLabel>
            <Input h='30px' placeholder='Digite o celular' value={cellphone} onChange={handleCellphoneChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'  w='100%' mb='20'/>
            
            <FormLabel fontWeight='bold'>Data</FormLabel>
            <Input h='30px' placeholder='Digite a data' type='text' value={date} onChange={handleDateChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'  w='100%' mb='20'/>
  
            <FormLabel fontWeight='bold'>Hora</FormLabel>
            <Input h='30px' placeholder='Digite a hora' type='text' value={hour} onChange={handleHourChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' w='100%' mb='20'/>

            <FormLabel fontWeight='bold'>Serviço</FormLabel>
            <Input h='30px' placeholder='Digite o serviço' type='text' value={service} onChange={handleServiceChange} border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large' w='100%' mb='20'/>

            <FormLabel fontWeight='bold'>Preço</FormLabel>
            <Input h='30px' placeholder='Digite o preço' value={price} onChange={handlePriceChange}border='none' bg='#000000' color='#FFFFFF' borderRadius='6px' fontWeight='bold' fontSize='large'  w='100%' mb='20'/>
          </FormControl>

          <ModalFooter p='10'>
            <Button onClick={handleUpdatesSchedules} h='40px' type='submit' bg='#FFFFFF' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'black', 'color':'white'}} transition='ease 1s'>
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}