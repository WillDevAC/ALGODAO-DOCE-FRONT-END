import React from 'react';

import { useRouter } from 'next/router';

import { LogOut } from '../header/styles'; 

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
} from './styles';



const sidebar = ( { isOpen, toggle } ) => {
  const router = useRouter();
  
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
          <SidebarLink onClick={() => router.push('/dashboard')}>Cardápios</SidebarLink>
          <SidebarLink onClick={() => router.push('/dashboard/extras')}>Extras</SidebarLink>
          <SidebarLink onClick={() => router.push('/dashboard/album')}>Galeria</SidebarLink>
          <SidebarLink>Voltar</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute><LogOut/>Sair</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>      
  );
}

export default sidebar;