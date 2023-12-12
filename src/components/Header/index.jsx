import { useState } from "react";
import { Flex, Box, Image, IconButton} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { IoMdLogOut } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsOpen(true)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    return(
        <Flex h='110px' bg='#F3CBCB' justifyContent='space-between'>
            <Box>
                <Image src={Logo} alt='logo do site' w='150px' h='150px'/>
            </Box>
            
            <Box>
                {!isOpen ? <IconButton onClick={handleOpenMenu} aria-label='botão do menu' icon={<GiHamburgerMenu/>} bg='transparent' fontSize='40px' border='none' w='100px' h='100px'/> : <IconButton onClick={handleCloseMenu} aria-label='botão do fechar menu' icon={<IoMdClose />} bg='transparent' border='none' w='100px' h='100px' fontSize='40px'/>}
            </Box>
  
           {isOpen &&
            <Flex flexDirection='column' textAlign='center' position='absolute' top='110px' bg='#D9D9D9' w='100%' p='10px'>
                <Box h='50px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/clients">Clientes</Link>
                </Box>
                <Box h='50px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/schedules">Agendamentos</Link>
                </Box>
                <Box h='50px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/finances">Finanças</Link>
                </Box>
            </Flex>
            }
                
            {/* <IconButton aria-label='botão de deslogar' icon={<IoMdLogOut />} bg='transparent' border='none' size='' variant='' isRound={''} w='100px' h='100px'/> */}
        </Flex>
    )
}