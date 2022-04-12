import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  min-height: 10rem;

  grid-template-columns: 4fr 5fr;
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`;

export const About = styled.div`
  background-color: #FFF;  
  padding: 30px 50px;
  @media screen and (max-width: 850px) {
    padding: 30px;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 50%
  }

  @media screen and (max-width: 1280px) {
    justify-content: flex-start;
    width: 150%;
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.p`
  color: black;
  text-align: justify;
  padding-bottom: 2%;
  width: 80%;
  font-size: 1rem;
  padding-top: 2%;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 2%;
`;

export const BtnPink = styled.a`
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #de80b0;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 10px;
  }

`;

export const BtnBlue = styled(BtnPink)`
  background-color: #44a3d9;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
  }

`;