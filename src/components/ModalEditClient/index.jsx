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
} from '@chakra-ui/react'
import { useRef } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const ModalEditClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  
  return (
    <>
      <IconButton icon={<EditIcon/>} onClick={onOpen} color='blue' border='none' bg='transparent' h='0' fontSize='20px'>Open Modal</IconButton>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg='#F3CBCB'/>
        <ModalContent>
          <ModalHeader>Editar Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder='Digite o nome' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Endereço</FormLabel>
              <Input placeholder='Digite o endereço' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Celular</FormLabel>
              <Input placeholder='Digite o celular' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Observações</FormLabel>
              <Input placeholder='Digite a observação' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancela</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}