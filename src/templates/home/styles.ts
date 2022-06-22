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
  color: ${props => props.color /*Propriedade*/ == 'primary' ? '#DE80B0' : 'white'}; 

  @media screen and (max-width: 1280px) {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;


export const PartnersContainer = styled.div `

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 300px;
  gap: 15px;

  @media screen and (max-width: 645px) {
    flex-direction: column;
  }
`

export const PartnersBox = styled.div `
  width: 20%;
  height: 60%;
  display: flex;
  
  align-items: center;
  justify-content: center;


  img{
    height: 50%;
  }
`

export const TitlePartner = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  color: #de80b0;
  font-size: 35px;
  font-weight: bold;
`