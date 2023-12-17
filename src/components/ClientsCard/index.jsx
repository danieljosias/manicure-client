import { Card, Text, IconButton, FormControl, Input, Box, Flex, FormLabel, VStack, Heading} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const ClientsCard = () => {
    return(
        <Flex justifyContent='space-around' bg='white' p='25' borderRadius='0px 10px 0px 10px' >
            <Flex flexDirection='column' h='0' gap='10' p='10'>
                <Heading as='h3'>Nome: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3'>Endereço: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3'>Celular: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3'>Observações: xxxxxxxxxxxxxxxxxxxxx</Heading>
            </Flex>
            <FormControl display='none' justifyContent='center' textAlign='center' alignItems='center' bg='#D9D9D9' w='100px' h='100px' borderRadius='0px 10px 0px 10px'>
                <Input for='file' type='file'/>
                <FormLabel id='file' fontWeight='bold' h='0'>Foto</FormLabel>
            </FormControl>
            {/* <Flex h='0'>
                <IconButton aria-label='editar' icon={<DeleteIcon />} color='blue' border='none' bg='transparent'/>
                <IconButton aria-label='deletar' icon={<EditIcon />}color='red' border='none' bg='transparent'/>
            </Flex> */}
        </Flex>
    )   
}