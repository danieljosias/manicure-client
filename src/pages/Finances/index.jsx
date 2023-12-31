import { Header } from '../../components/Header'
import { useContext, useEffect, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Icon,
  Box,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FiancesCard } from '../../components/FinancesCard';
import { ApiContext } from '../../providers/api';
import { toast } from 'react-toastify';

export const Finances = () => {
  const { createFinances, listFinances, setFinances, finances } = useContext(ApiContext)

  const [isOpen, setIsOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')

  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleTypeChange = (e) => setType(e.target.value)
  const handleValueChange = (e) => setValue(e.target.value)
  
  const isDescriptionError = description === ''
  const isTypeError = type === ''
  const isValueError = value === ''

  const data = {
    description: description.substring(0,1).toUpperCase().concat(description.substring(1)),
    type: type.substring(0,1).toUpperCase().concat(type.substring(1)),
    value: value.substring(0,1).toUpperCase().concat(value.substring(1)),
    id: Math.floor(Date.now() * Math.random()).toString(36),
  }

  const handleCreatesFinances = async () => {
    if(data.description !== '' && data.type !== '' && data.value !== ''){
      toast.success("Finança criada!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
  
      const newItem = data
      const newItems = [...finances, newItem]
      setFinances(newItems)

      setDescription('')
      setType('')
      setValue('')
      
    }else{
      toast.error("Campo em branco!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark',
      })
    } 
  }

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const message = 'Você tem alterações não salvas. Tem certeza que deseja sair?'
      e.returnValue = message
      return message
    };

    window.addEventListener('beforeunload', handleBeforeUnload)
  }, [])
  
  const datas = finances.filter((finance) => finance.type === 'Entrada')
  const entrada = datas.reduce((acc, data) => {
    return Number(acc) + Number(data.value)
  }, 0)

  const itens = finances.filter((finance) => finance.type === 'Saída' || finance.type === 'Saida')
  const saida= itens.reduce((acc, itens) => {
    return Number(acc) + Number(itens.value)
  }, 0)

  const total = Number(entrada) - Number(saida)
  
  return(
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Flex flexDirection='column' gap='20px' p='20px'>
        <Box>
          <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
            <Box h='0px'>
              <Heading as='h3' h='0px'>Entrada e Saída</Heading>
            </Box>
            <Box h='0px'>
              <Icon as={FaMoneyCheckAlt} fontSize='20px'/>
            </Box>
          </HStack>
        </Box>

        <Box>
          <FormControl isInvalid={{isDescriptionError, isTypeError, isValueError}} display='flex' gap='10px' flexDirection='column' justifyContent='center' bg='#F3CBCB' borderRadius='0px 10px 0px 10px' p='25' h='350px'>
            {description === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Descrição é obrigatória.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Descrição</FormErrorMessage>}
            <Input h='30px' type='text' value={description} onChange={handleDescriptionChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Ex: Salário'/>
            
            {type === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Tipo é obrigatório.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Tipo</FormErrorMessage>}
            <Input h='30px' type='text' value={type} onChange={handleTypeChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Ex: Entrada ou Saída'/>
            
            {value === '' ? <FormErrorMessage fontWeight='bold' h='30px'>Valor é obrigatória.</FormErrorMessage> : <FormErrorMessage fontWeight='bold' h='30px'>Valor</FormErrorMessage>}
            <Input h='30px' type='text' value={value} onChange={handleValueChange} border='none' bg='#FFFFFF' color='#000000' borderRadius='6px' fontWeight='bold' fontSize='large' placeholder='Ex: 1000'/>
            
            {!isOpen ?  <Button onClick={handleCreatesFinances} h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{backgroundColor: 'white', color: 'black', transition: 'ease 1s'}}>Ok</Button>
            :
            <Button display='none' h='30px' type='submit' bg='#000000' color='white' border='none' borderRadius='10px' fontWeight='bold' mt='15' cursor='pointer' fontSize='large' _hover={{backgroundColor: 'white', color: 'black', transition: 'ease 1s'}}>Ok</Button>
            }
          </FormControl>
        </Box>
        
        <Flex flexDirection='column' gap='20px'>
          <Box>
            <HStack spacing={10} h='30px' textAlign='center' alignItems='center' justifyContent='center'>
              <Box h='0px'>
                <Heading as='h3'>Lista de entrada e saída</Heading>
              </Box>
              <Box h='0px'>
                <Icon as={FaMoneyCheckAlt} fontSize='20px'/>
              </Box>
            </HStack>
          </Box>

          <Flex bg='#F3CBCB' flexDirection='column' maxH='500px'  p='25' gap='20px' borderRadius='0px 10px 0px 10px' >
          
          {finances?.length === 0?
            <Flex justifyContent='center' alignItems='center' bg='#D9D9D9' mb='10px' p='10' h='200px'>
             <Heading as='h3'>Não há Finanças</Heading>
            </Flex> 
            :
            <Box overflowY='scroll' bg='#D9D9D9' mb='10px' p='10'>
              <FiancesCard isOpen={isOpen}/>
            </Box>
            }

            <Flex flexDirection='column' justifyContent='space-between' gap='10'>
                <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
                  <Heading as='h3'>Entrada: R$ {entrada}</Heading>
                </Box>
                <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
                  <Heading as='h3'>Saída: R$ {saida}</Heading>
                </Box>
                <Box bg='white' p='10' borderRadius='0px 10px 0px 10px'>
                  <Heading as='h3'>Total: R$ {Math.abs(total)}</Heading>
                </Box>
            </Flex>
          </Flex>    
        </Flex>
      </Flex>
    </>
  )
}
