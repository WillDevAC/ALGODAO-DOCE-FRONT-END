import React from 'react';

import { 
  Container,
  Baby,
  TurmaContainer,
  TurmaSection,
  TurmaDiv,
  Title,
  Description
} from './styles';

const Classes: React.FC = () => {
  return (
  <section id='classes' className='classes'>
    <Container>
      <Baby>
        <img src="images/baby.png" alt="" />
      </Baby>
      <TurmaContainer>
        <Title>NOSSAS TURMAS</Title>
        <TurmaSection>
          <TurmaDiv>
            <Description>Berçário</Description>
            <img src="images/bercario.png" alt="" />
          </TurmaDiv>
          <TurmaDiv>
            <Description>Jardim I e II</Description>
            <img src="images/jardim.png" alt="" />
          </TurmaDiv>
        </TurmaSection>
        <TurmaSection>
          <TurmaDiv>
            <Description>Maternal I e II</Description>
            <img src="images/maternal.png" alt="" />
          </TurmaDiv>
          <TurmaDiv>
            <Description>Turno Inverso</Description>
            <img src="images/turno.png" alt="" />
          </TurmaDiv>
        </TurmaSection>
      </TurmaContainer> 
    </Container>
  </section>
  );
}

export default Classes;