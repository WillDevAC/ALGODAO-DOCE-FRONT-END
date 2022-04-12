import React, { useState } from 'react';

import { Title } from '../../templates/home/styles';

import {
   Grid,
   Text,
   Paragraph,
   About,
   Image,
   ButtonContainer,
   BtnBlue
  } from './styles';

const about = () => {

  return (
    <>
    <section id='about' className='about'>
      <About>
        <Grid>
          <Image>
            <img src="images/cover.webp" alt="" />
          </Image>
          <Text>
            <Title color="primary" align_self="left">Sobre o Algodão Doce</Title>
            <Paragraph>
              Nossa escola possui uma equipe especializada e com constante treinamento com foco
              no desenvolvimento infantil. Atendemos turmas reduzidas, o que permite um olhar muito
              mais próximo e atencioso para cada criança. Nossa abordagem educacional parte do Aprender
              Brincando para desenvolver as diferentes habilidades (intelectuais, emocionais, motoras e sociais),
              contribuindo para a expensão das suas capacidades de comunicação, autonomia, interação social, domínio do espaço
              físico e do próprio corpo, pensamento, ética e estética.
            </Paragraph>
            <ButtonContainer>
              <BtnBlue>Veja nossa história</BtnBlue>
            </ButtonContainer>
          </Text>
        </Grid>
      </About>
    </section>
    </>
  );
}

export default about;