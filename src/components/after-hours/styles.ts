import styled from 'styled-components';

interface Props {
  bg_align: string;
}

export const Container = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const Paragraph =  styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 2.5rem;
  color: black;
  text-align: justify;
  width: 85%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 460px){
    font-size: 1rem;
  }
`;

export const Pink = styled.span`
  color: #de80b0;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 0px 0;
  width: 50%;
  height: 100%;
  justify-content: ${props => props.bg_align == 'center' ? 'center' : 'flex-start'};
  align-items: ${props => props.bg_align == 'center' ? 'center' : 'flex-start'};

  img {
    max-width: 85%;
  }

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`;