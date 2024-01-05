import { Text, Box, Flex, Heading, HStack} from '@chakra-ui/react'
import { ModalEditSchedule } from '../ModalEditSchedule'
import { ModalDeleteSchedule } from '../ModalDeleteSchedule'
import { useContext, useEffect } from 'react'
import { ApiContext } from '../../providers/api'

export const SchedulesCard = ({isOpen}) => {
    const { schedules } = useContext(ApiContext)


    return(
        <>
            {schedules?.map((schedule, i)=>{
                return <Flex flexDirection='column'  mb='10px'  key={i} bg='white' gap='20' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px'>
                <Box>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Nome: {schedule.name}</Text></Heading>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Celular: {schedule.cellphone}</Text></Heading>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Data: {schedule.date}</Text></Heading>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Hora: {schedule.hour}</Text></Heading>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Serviço: {schedule.service}</Text></Heading>
                    <Heading as='h3' mb='10'><Text wordBreak='break-all'>Preço: R$ {schedule.price}</Text></Heading>
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