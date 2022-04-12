import React from 'react';

import { Container, Logo, Icons } from './styles';

import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa';

const footer: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="images/logo.webp" alt="" />
      </Logo>
      <Icons>
        <a href="https://web.facebook.com/escolainfantilalgodaodoceemcanoas" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/escolaalgodaodocecanoas" target="_blank"><FaInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=5551994783328&text=Olá.%20Gostaria%20de%20falar%20com%20vocês." target="_blank"><FaWhatsapp/></a>
      </Icons>
    </Container>
  );
}

export default footer;