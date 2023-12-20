import { Card, Text, IconButton, FormControl, Input, Box, Flex, FormLabel, VStack, Heading, HStack, } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { ModalEditClient } from '../../components/ModalEditClient';

export const ClientsCard = ({isOpen}) => {
    return(
        <Flex bg='white' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px' h='200px'>
            <Box>
                <Text as='h3' h='40'>Nome: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Endereço: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Celular: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Observações: xxxxxxxxxxxxxxxxxxxxx</Text>
            </Box>
            
            <Box>
                <HStack h='0'>
                    {!isOpen ? <ModalEditClient /> : ''}
                    {!isOpen ? <IconButton aria-label='deletar' icon={<DeleteIcon />} color='red' border='none' bg='transparent' h='0' fontSize='20px'/> : ''}
                </HStack>
            </Box>

        </Flex>
    )   
}