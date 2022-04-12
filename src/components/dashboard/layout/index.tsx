import React, { useState } from "react";

import { Container, Wrapper, InfoContainer } from './styles'; 

import Aside from '../aside';

import Sidebar from '../sidebar'

import Header from '../header';

const layout: React.FC = ( { children } ) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Wrapper>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Aside />
        <Container>
          <Header toggle={toggle}/>
          
          <InfoContainer>
            { children }
          </InfoContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default layout;
