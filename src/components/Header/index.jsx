import { Flex, Image, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { IoMdLogOut } from "react-icons/io";

export const Header = () =>{
    return(
        <Flex justify-content='center'>
            <Image src={Logo} alt='logo do site' w='100px' h='100px'/>
            
            <Link to="/clientes" >Clientes</Link>
            <Link to="/agendamentos" >Agendamentos</Link>
            <Link to="/finanças" >Finanças</Link>
           
            <IconButton aria-label='botão de deslogar' icon={<IoMdLogOut />} bg='transparent' border='none' size='' variant='' isRound={''}/>
        </Flex>
    )
}