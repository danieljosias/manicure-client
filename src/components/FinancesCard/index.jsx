import { Text, Box, Flex, Heading, HStack} from '@chakra-ui/react'
import { ModalDeleteFinances } from '../ModalDeleteFinaces'
import { ModalEditFinance } from '../ModalEditFinance'
import { useContext, useEffect } from 'react'
import { ApiContext } from '../../providers/api'

export const FiancesCard = ({isOpen}) => {
    const { finances } = useContext(ApiContext)

    return(
        <>
        {finances.map((finance,i)=>{
            return <Flex key={i} mb='10px' bg='white' justifyContent='space-between' p='25' borderRadius='0px 10px 0px 10px'>
            <Box>
                <Heading as='h3' mb='10'><Text wordBreak='break-all'>Descrição: {finance.description}</Text></Heading>
                <Heading as='h3' mb='10'><Text wordBreak='break-all'>Tipo: {finance.type}</Text></Heading>
                <Heading as='h3' mb='10'><Text wordBreak='break-all'>Valor: {finance.value}</Text></Heading>
            </Box>
            
            <Box>
                <HStack h='0'>
                    {!isOpen ? <ModalEditFinance finance_id={finance.id}/> : ''}
                    {!isOpen ? <ModalDeleteFinances finance_id={finance.id}/> : ''}
                </HStack>
            </Box>
        </Flex>
        })}
        
        </>
    )   
}