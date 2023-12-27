import { Flex, Box, Image, IconButton } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { IoMdLogOut } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ApiContext } from "../../providers/api";

export const Header = ({isOpen, setIsOpen}) => {
    const { setIsAuthenticated } = useContext(ApiContext)

    const navigate = useNavigate();

    const handleOpenMenu = () => {
        setIsOpen(true)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    const handleLogout= () => {
        navigate('/signin')
        setIsAuthenticated(false)
    }
    
    return(
        <Flex h='110px' bg='#F3CBCB' justifyContent='space-between'>
            <Box>
                <Image src={Logo} alt='logo do site' w='150px' h='150px'/>
            </Box>
            
            <Box>
                {!isOpen ? <IconButton onClick={handleOpenMenu} aria-label='botão do menu' icon={<GiHamburgerMenu/>} bg='transparent' fontSize='40px' border='none' w='100px' h='100px'/> : <IconButton onClick={handleCloseMenu} aria-label='botão do fechar menu' icon={<IoMdClose />} bg='transparent' border='none' w='100px' h='100px' fontSize='40px'/>}
                <IconButton onClick={handleLogout} aria-label='botão de deslogar' icon={<IoMdLogOut />} bg='transparent' border='none' fontSize='40px' w='100px' h='100px'/>
            </Box>
  
           {isOpen &&
            <Flex flexDirection='column' textAlign='center' position='absolute' top='110px' bg='#D9D9D9' h='500vh' w='100vw' p='10px'>
                <Box h='70px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/clients">Clientes</Link>
                </Box>
                <Box h='70px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/schedules">Agendamentos</Link>
                </Box>
                <Box h='70px' _hover={{'background-color': '#F3CBCB'}} p='20px'>
                    <Link to="/finances">Finanças</Link>
                </Box>
            </Flex>
            }  
        </Flex>
    )
}