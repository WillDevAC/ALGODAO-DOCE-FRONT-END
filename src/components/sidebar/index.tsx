import React, { useState } from 'react';

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

  const handleTaskAgendVisit = () => {
    router.push('https://api.whatsapp.com/send?phone=555551982599753&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20visita%21');
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Logo>
            <img src="images/logo.webp" alt="Logo do site algodão doce canoas" />
          </Logo>
          <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} offset={-50}>Página principal</SidebarLink>
          <SidebarLink to="informations" onClick={toggle} smooth={true} offset={-80} duration={500}>Para o seu filho</SidebarLink>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} offset={-50}>Sobre nós</SidebarLink>
          <SidebarLink to="classes" onClick={toggle} smooth={true} duration={500} offset={-130}>Turmas</SidebarLink>
          <SidebarLink onClick={() => RedirectHandleClick()}>Área dos pais</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={() => handleTaskAgendVisit()}><Calendar/>Agendar visita</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>      
  );
}

export default sidebar;