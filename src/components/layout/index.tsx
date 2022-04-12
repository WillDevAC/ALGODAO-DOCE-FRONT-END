import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../../components/header';

import Sidebar from '../../components/sidebar'

const layout: React.FC = ( { children } ) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        
        <Container>
            { children }
        </Container>

    </>
  );
}

export default layout;