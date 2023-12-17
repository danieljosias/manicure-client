import { Card, Text, IconButton, FormControl, Input, Box, Flex, FormLabel, VStack, Heading, HStack} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const ClientsCard = () => {
    return(
        <Flex bg='white' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px' h='200px'>
            <Box>
                <Heading as='h3' h='40'>Nome: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3' h='40'>Endereço: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3' h='40'>Celular: xxxxxxxxxxxxxxxxxxxxx</Heading>
                <Heading as='h3' h='40'>Observações: xxxxxxxxxxxxxxxxxxxxx</Heading>
            </Box>
            
            <Box>
                <HStack h='0'>
                    <IconButton aria-label='editar' icon={<DeleteIcon />} color='blue' border='none' bg='transparent' h='0' fontSize='20px'/>
                    <IconButton aria-label='deletar' icon={<EditIcon />}color='red' border='none' bg='transparent' h='0' fontSize='20px'/>
                </HStack>
            </Box>
            {/* <FormControl display='none' justifyContent='center' textAlign='center' alignItems='center' bg='#D9D9D9' w='100px' h='100px' borderRadius='0px 10px 0px 10px'>
                <Input for='file' type='file'/>
                <FormLabel id='file' fontWeight='bold' h='0'>Foto</FormLabel>
            </FormControl> */}
        </Flex>
    )   
}