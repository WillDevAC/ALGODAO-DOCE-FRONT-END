import React from 'react';

import { 
    ModalBackground,
    ModalContainer,
    Title,
    Body,
    Footer,
    TitleCloseBtn
 } from './styles';

import { BtnPink } from '../dashboard/card/styles'; 

const modal = ( { closeModal } ) => {
  return (
    <ModalBackground>
        <ModalContainer>
            <TitleCloseBtn>
                <button onClick={() => closeModal(false)}> X </button>
            </TitleCloseBtn>   
            <Title>
                <h1>Agendar Visita</h1>
            </Title>
            <Body>
                <form action="">
                  <label htmlFor="text">Digite seu nome</label>
                  <input type="text" placeholder='Nome completo' />
                  <label htmlFor="text">Digite o nome da criança</label>
                  <input type="text" placeholder='Nome completo' />
                  <label htmlFor="text">Escolha uma data</label>
                  <input type="date"/>
                  <label htmlFor="text">Escolha um horário (7h às 11h) (14h às 18h)</label>
                  <input type="time" placeholder='Ex: 14h00' />
                </form>
            </Body>
            <Footer>
                <BtnPink onClick={() => alert("Funcionalidade em desenvolvimento")}>Agendar visita</BtnPink>
            </Footer>
        </ModalContainer>
    </ModalBackground>
  );
}

export default modal;