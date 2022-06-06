import { useRouter } from 'next/router';
import React from 'react';

import { 
  Container,
  Header,
  Logo,
  Disconnect,
  Hamburger,
  LogOut
} from './styles';

const header = ({ toggle }) => {
  const router = useRouter() 

  const handleRedirect = () => {
    router.push("/")
  }

  const handleClickImageInLogo = () => {
    router.push('/');
  }

  return (
    <Container>
      <Header>
        <div onClick={() => handleClickImageInLogo()}>
          <Logo>
            <img src="/images/logo.webp" alt="" />
          </Logo>
        </div>
        <Hamburger onClick={toggle}/>
        <Disconnect onClick={() => handleRedirect()}>
          <LogOut/>
        </Disconnect>
      </Header>
    </Container>
  );
}

export default header;