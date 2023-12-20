import { Card, Text, IconButton, FormControl, Input, Box, Flex, FormLabel, VStack, Heading, HStack} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { ModalEditFinance } from '../ModalEditFinance'
import { ModalDeleteFinances } from '../ModalDeleteFinaces'

export const FiancesCard = ({isOpen}) => {
    return(
        <Flex bg='white' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px' h='200px'>
            <Box>
                <Text as='h3' h='40'>Descrição: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Tipo: xxxxxxxxxxxxxxxxxxxxx</Text>
                <Text as='h3' h='40'>Valor: xxxxxxxxxxxxxxxxxxxxx</Text>
            </Box>
            
            <Box>
                <HStack h='0'>
                    {!isOpen ? <ModalEditFinance/> : ''}
                    {!isOpen ? <ModalDeleteFinances/> : ''}
                </HStack>
            </Box>
        </Flex>
    )   
}