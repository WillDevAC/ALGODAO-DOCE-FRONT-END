import styled from 'styled-components';

interface Props { //Definição da prop
  color : string;
  align_self: string; //tem que ser com underline
  padding_left: string;
}

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1<Props>`
  display: flex;
  width: 100%;
  padding-left: ${props => props.padding_left == 'default' ? '9%' : '0'};
  font-family: 'Lobster Two', cursive;
  font-size: ${props => props.font_size == '4rem' ? '4rem' : '2.5rem'};
  color: black;
  align-self: ${props => props.align_self == 'left' ? 'left' : 'center'};
  padding-bottom: 1rem;
  color: ${props => props.color /*Propriedade*/ == 'primary' ? '#DE80B0' : 'white'}; //Condição pro input da prop

  @media screen and (max-width: 1280px) {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
