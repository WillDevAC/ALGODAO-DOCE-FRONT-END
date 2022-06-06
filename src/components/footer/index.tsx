import React from 'react';

import { Container, Logo, Icons } from './styles';

import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa';

const footer: React.FC = () => {
  return (
  <>
    <Container>
      <Logo>
        <img src="images/logo.webp" alt="" />
      </Logo>
      <Icons>
        <a href="https://web.facebook.com/escolainfantilalgodaodoceemcanoas" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/escolaalgodaodocecanoas" target="_blank"><FaInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=555551982599753&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20visita%21" target="_blank"><FaWhatsapp/></a>
      </Icons>
    </Container>
  </>
  );
}

export default footer;