import { Text, Box, Flex,  Heading, HStack, } from '@chakra-ui/react'
import { ModalEditClient } from '../../components/ModalEditClient';
import { ModalDeleteClient } from '../ModalDeleteClient';
import { useContext, useEffect } from 'react';
import { ApiContext } from '../../providers/api';

export const ClientsCard = ({isOpen, name, client}) => {
    const { clients, setClients} = useContext(ApiContext)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/clients/")
        .then((response) => response.json())
        .then((response) => setClients(response))
        .catch((err) => console.log(err))
    },[])

    return(
        <>
            {clients?.map((client, i)=>{
              return <Flex flexDirection='column' mb='10px' gap='20'justifyContent='space-between' key={i} bg='white'  p='25' borderRadius='0px 10px 0px 10px'>
                    <Box>
                        <Heading as='h3' mb='10'><Text>Nome: {client.name}</Text></Heading>
                        <Heading as='h3' mb='10'><Text>Endereço: {client.address}</Text></Heading>
                        <Heading as='h3' mb='10'><Text>Celular: {client.cellphone}</Text></Heading>
                        <Heading as='h3' mb='10'><Text>Observações: {client.observation}</Text></Heading>
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