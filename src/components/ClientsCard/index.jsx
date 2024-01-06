import { Text, Box, Flex,  Heading, HStack, } from '@chakra-ui/react'
import { ModalEditClient } from '../../components/ModalEditClient';
import { ModalDeleteClient } from '../ModalDeleteClient';
import { useContext } from 'react';
import { ApiContext } from '../../providers/api';
import { useSelector } from 'react-redux';

export const ClientsCard = ({isOpen }) => {
    const clients = useSelector((state) => state.clients)

    return(
        <>
            {clients?.map((client, i)=>{
              return <Flex flexDirection='column' mb='10px' gap='20'justifyContent='space-between' key={i} bg='white'  p='25'  borderRadius='0px 10px 0px 10px'>
                    <Box>
                        <Heading as='h3' mb='10'><Text wordBreak='break-all'>Nome: {client.name}</Text></Heading>
                        <Heading as='h3' mb='10'><Text wordBreak='break-all'>Endereço: {client.address}</Text></Heading>
                        <Heading as='h3' mb='10'><Text wordBreak='break-all'>Celular: {client.cellphone}</Text></Heading>
                        <Heading as='h3' mb='10'><Text wordBreak='break-all'>Observações: {client.observation}</Text></Heading>
                    </Box>
                    
                    <Box>
                        <HStack h='0'>
                            {!isOpen ? <ModalEditClient  client_id={client.id}/> : ''}
                            {!isOpen ? <ModalDeleteClient client_id={client.id}/> : ''}
                        </HStack>
                    </Box>
                </Flex>
            })}
        </>
    )   
}