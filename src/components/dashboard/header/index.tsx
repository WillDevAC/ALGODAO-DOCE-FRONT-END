import { useRouter } from 'next/router'; //Contexto Router controle de todas as rotas
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
  const router = useRouter()  // atribuindo useRouter a uma constante (todas as funções)
                              // Chamando o contexto
  const handleRedirect = () => {
    router.push("/")
  }

  return (
    <Container>
      <Header>
        <Logo>
          <img src="/images/logo.webp" alt="" />
        </Logo>
        <Hamburger onClick={toggle}/>
        <Disconnect onClick={() => handleRedirect()}>
          <LogOut/>
        </Disconnect>
      </Header>
    </Container>
  );
}

export default header;