import { Card, Text, IconButton, FormControl, Input, Box, Flex, FormLabel, VStack, Heading, HStack} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { ModalEditSchedule } from '../ModalEditSchedule'
import { ModalDeleteSchedule } from '../ModalDeleteSchedule'

export const SchedulesCard = ({isOpen}) => {
    return(
        <Flex bg='white' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px' h='300px'>
            <Box>
                <Text as='h3' h='40'>Nome: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Celular: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Data: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Hora: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Serviço: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Preço: xxxxxxxxxxxxxxxxxxxxx</Text>
            </Box>
            
            <Box>
                <HStack h='0'>
                    {!isOpen ? <ModalDeleteSchedule/> : ''}
                    {!isOpen ? <ModalEditSchedule/> : ''}
                </HStack>
            </Box>
        </Flex>
    )   
}