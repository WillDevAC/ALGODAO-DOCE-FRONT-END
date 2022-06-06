import React, { useState } from 'react';

import { useRouter } from 'next/router'

import {
  Nav,
  NavLink,
  Hamburger,
  Calendar,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo
} from './styles';

import Modal from '../modal'

const Navbar = ( { toggle } ) => {

  const [openModal, setOpenModal] = useState(false);

  const router = useRouter()

  const HandleRedirectButton = () => {
    router.push('/dashboard');
  }

  const setOpenHandleModal = () => {
    router.push('https://api.whatsapp.com/send?phone=555551982599753&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20visita%21');
  }

  return (
    <>
      <Nav id="header" className="header">
        <NavLogo href='/'>
          <img src="images/logo.webp" alt="Logo algodão doce canoas" />
        </NavLogo>
        <Hamburger onClick={toggle}/>
        <NavMenu>
          <NavLink to="home" smooth={true} duration={500} offset={-50}>
            Home
          </NavLink>
          <NavLink to="informations" smooth={true} offset={-80} duration={500}>
            Para o seu filho
          </NavLink>
          <NavLink to="about" smooth={true} duration={500} offset={-50}>
            Sobre nós
          </NavLink>
          <NavLink to="classes" smooth={true} duration={500} offset={-130}>
            Turmas
          </NavLink>
          <NavLink onClick={() => HandleRedirectButton()}>
            Restrito
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={() => setOpenHandleModal()}>
          <Calendar/> Agende sua visita
          </NavBtnLink>
        </NavBtn>
      </Nav>
      { openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
};

export default Navbar;