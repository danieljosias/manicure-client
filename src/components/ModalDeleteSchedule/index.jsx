import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
  IconButton,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const ModalDeleteSchedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  
  return (
    <>
      <IconButton onClick={onOpen} aria-label='deletar' icon={<DeleteIcon />} color='red' border='none' bg='transparent' h='0' fontSize='20px'/>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='#F3CBCB' />
        <ModalContent p='20px'>
          <Flex justifyContent='center' textAlign='center' p='10'> 
            <Heading as='h2' fontWeight='bold'>Tem certeza?</Heading>
          </Flex>
        
          <Flex p='10' gap='10'>
            <Button h='40px' type='submit' bg='black' color='white' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'white', 'color':'black'}} transition='ease 1s'>
              Sim
            </Button>
            <Button onClick={onClose} h='40px' type='submit' bg='black' color='white' w='100%' border='none' borderRadius='10px' fontWeight='bold'  cursor='pointer' fontSize='large' _hover={{'background':'white', 'color':'black'}} transition='ease 1s'>
              Não
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}