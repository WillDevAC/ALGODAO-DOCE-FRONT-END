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

import Router from 'next/router'


const modal = ( { closeModal } ) => {

  const handleAgendVisit = () => {
    Router.push('https://api.whatsapp.com/send?phone=555551982599753&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20visita%21');
  }

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
                <BtnPink onClick={() => handleAgendVisit()}>Agendar visita</BtnPink>
            </Footer>
        </ModalContainer>
    </ModalBackground>
  );
}

export default modal;