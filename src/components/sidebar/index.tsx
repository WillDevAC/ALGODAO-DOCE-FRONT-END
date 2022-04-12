import React from 'react';

import { BsFillCalendar2CheckFill } from 'react-icons/bs'

import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute,
  Logo,
  Calendar
} from './styles';

import { useRouter } from 'next/router'


const sidebar = ( { isOpen, toggle } ) => {

  const router = useRouter()

  const RedirectHandleClick = () => {
    router.push('/dashboard');
  }


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Logo>
            <img src="images/logo.webp" alt="" />
          </Logo>
          <SidebarLink to="home" smooth={true} duration={500} offset={-50}>Página principal</SidebarLink>
          <SidebarLink to="informations" smooth={true} offset={-80} duration={500}>Para o seu filho</SidebarLink>
          <SidebarLink to="about" smooth={true} duration={500} offset={-50}>Sobre nós</SidebarLink>
          <SidebarLink to="classes" smooth={true} duration={500} offset={-130}>Turmas</SidebarLink>
          <SidebarLink onClick={() => RedirectHandleClick()}>Área dos pais</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute><Calendar/>Agendar visita</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>      
  );
}

export default sidebar;