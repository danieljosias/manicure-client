import { Flex, Card, Text, IconButton, FormControl, Input, Box} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const ClientsCard = () => {
    return(
        <Card bg='white' w='300px' h='150px' borderRadius='0px 10px 0px 10px' p='10' gap='10'>
            <>
                <Text color='RGBA(0, 0, 0, 0.92)' as='bold'>Nome: xxxxx</Text>
                <Text color='RGBA(0, 0, 0, 0.92)' as='bold'> Endereço: xxxxx</Text>
                <Text color='RGBA(0, 0, 0, 0.92)' as='bold'>Celular: xxxxx</Text>
                <Text color='RGBA(0, 0, 0, 0.92)' as='bold'>Observações: xxxxx</Text>

                <FormControl>
                    <Box bg='#D9D9D9'>
                        <Input type='file' placeholder='Foto'/>

                    </Box>
                </FormControl>
                <IconButton aria-label='editar' icon={<DeleteIcon />} color='blue' border='none' bg='transparent'/>
                <IconButton aria-label='deletar' icon={<EditIcon />}color='red' border='none' bg='transparent'/>
            </>
        </Card>
    )   
}