import React from 'react';

import { Title } from '../../templates/home/styles';

import {
   Container,
   FlexContainer,
   Image,
   About,
   Paragraph,
   Padding
   } 
  from './styles';


const about2: React.FC = () => {
  return (
  <section id='informations'>
    <Padding>
      <Container>
        <FlexContainer>
          <Image>
            <img src="images/sobre.webp" alt="" />
          </Image>
          <About>
            <Title color="primary" padding_left="default">Sobre</Title>
            <Paragraph>
              Nossa escola possui uma equipe especializada e com constante
              treinamento com foco no desenvolvimento infantil. Atendemos turmas
              reduzidas, o que permite um olhar muito mais próximo e atencioso
              para cada criança. Nossa abordagem educacional parte do Aprender
              Brincando para desenvolver as diferentes habilidades (intelectuais,
              emocionais, motoras e sociais), contribuindo para a expansão das suas
              capacidades de comunicação, autonomia, interação social, domínio do
              espaço físico e do próprio corpo, pensamento, ética e estética.
            </Paragraph>
          </About>
        </FlexContainer>
        <FlexContainer>
          <Image>
            <img src="images/infraestrutura.webp" alt="" />
          </Image>
          <About>
            <Title color="primary" padding_left="default">Infraestrutura</Title>
            <Paragraph>
              Buscamos sempre trazer o melhor conforto para o seu filho, aqui na 
              algodão doce canoas temos a melhor infraestrurura para você deixar seu
              filho em boas mãos, além da equipe qualificada e todo o suporte para ele,
              também garantimos uma infraestrutura de ponta. Nossas salas são amplas e
              climatizadas. Possuímos uma sala de TV / biblioteca / contos e fantasias,
              área de 550 m² destinada apenas para recreação, horta coletiva e parquinho
              ecológico.
            </Paragraph>
          </About>
        </FlexContainer>
      </Container>
      <Container>
        <FlexContainer>
          <Image>
            <img src="images/equipe.webp" alt="" />
          </Image>
          <About>
            <Title color="primary" padding_left="default">Equipe multidisciplinar</Title>
            <Paragraph>
              Todos os nossos profissionais são qualificados, nossa equipe multidisciplinar
              é formada por Pedagoga, Psicopedagoga, Professores, Auxiliares, Psicóloga, Nutricionista,
              Cozinheira, Auxiliar de Limpeza e Serviços Gerais.
            </Paragraph>
          </About>
        </FlexContainer>
        <FlexContainer>
          <Image>
            <img src="images/seguranca.webp" alt="" />
          </Image>
          <About>
            <Title color="primary" padding_left="default">Segurança</Title>
            <Paragraph>
              Para garantir a total segurança do seu filho, temos um sistema de monitoramento presencial
              e câmeras de segurança, trazendo maior segurança e agilidade. Seu filho conosco está totalmente
              protegido, buscamos sempre trazer confiabilidade conosco.
            </Paragraph>
          </About>
        </FlexContainer>
      </Container>
    </Padding>
  </section>
  );
}

export default about2;