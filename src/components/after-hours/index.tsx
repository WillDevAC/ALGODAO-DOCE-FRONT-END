import React from 'react';

import { Title } from '../../templates/home/styles';

import {
    Container,
    Content,
    Paragraph,
    Pink
  } 
  from './styles';

const after_hours: React.FC = () => {
  return (
    <Container>
      <Content bg_align="center">
        <img src="images/bebefeliz.png" alt="Bebê feliz" />
      </Content>
      <Content bg_align="default">
        <Title color="primary" font_size="4rem" align_self="flex-start">Turno Inverso</Title>
          <Paragraph>
            <Pink>Turno Inverso</Pink> é um espaço prazeroso, que propicia aprendizagens diversificadas e convivência social para estudantes do 1º ao 9º ano do Ensino Fundamental, no turno oposto às aulas.
          </Paragraph>
          <Paragraph>
            <Pink>TURNO MANHÃ:</Pink> As crianças chegam a partir das 7h, realizam atividades diversificadas, lancham, recebem orientação na realização dos temas, estudos e pesquisas, almoçam as 11h, fazem higiene, descansam até o horário de irem para escola regular.
          </Paragraph>          
          <Paragraph>
            <Pink>TURNO DA TARDE:</Pink> As crianças chegam a partir das 12h, almoçam, fazem a higiene e um período de descanso. À tarde fazem atividades diversificadas, lancham e recebem orientação na realização dos temas, estudos e pesquisas.
          </Paragraph>
          <Paragraph>
            <Pink>PÓS TURNO:</Pink> As crianças chegam após o término das aulas regulares do turno da tarde, recebem um lanche e usufruem de espaços de lazer até às 19h, quando os pais vêm buscá-las.
          </Paragraph>
      </Content>
    </Container>
  );
}

export default after_hours;