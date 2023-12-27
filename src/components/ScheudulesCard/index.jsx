import { Text, Box, Flex, Heading, HStack} from '@chakra-ui/react'
import { ModalEditSchedule } from '../ModalEditSchedule'
import { ModalDeleteSchedule } from '../ModalDeleteSchedule'
import { useContext, useEffect } from 'react'
import { ApiContext } from '../../providers/api'

export const SchedulesCard = ({isOpen}) => {
    const { schedules, setSchedules } = useContext(ApiContext)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/schedules/")
        .then((response) => response.json())
        .then((response) => setSchedules(response))
        .catch((err) => console.log(err))
    },[])

    return(
        <>
            {schedules?.map((schedule, i)=>{
                return <Flex flexDirection='column'  key={i} bg='white' gap='20' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px'>
                <Box>
                    <Heading as='h3' mb='10'><Text>Nome: {schedule.name}</Text></Heading>
                    <Heading as='h3' mb='10'><Text>Celular: {schedule.cellphone}</Text></Heading>
                    <Heading as='h3' mb='10'><Text>Data: {schedule.date}</Text></Heading>
                    <Heading as='h3' mb='10'><Text>Hora: {schedule.hour}</Text></Heading>
                    <Heading as='h3' mb='10'><Text>Serviço: {schedule.service}</Text></Heading>
                    <Heading as='h3' mb='10'><Text>Preço: {schedule.price}</Text></Heading>
                </Box>
                
                <Box>
                    <HStack h='0'>
                        {!isOpen ? <ModalEditSchedule schedule_id={schedule.id}/> : ''}
                        {!isOpen ? <ModalDeleteSchedule schedule_id={schedule.id}/> : ''}
                    </HStack>
                </Box>
            </Flex>
            })}
        
        </>
    )   
}