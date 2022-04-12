import styled from 'styled-components';

export const Padding = styled.div`
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 70px;

  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  max-width: 50%;

  @media screen and (max-width: 1280px) {
    max-width: 100%;
    margin: 20px 40px;
    
    img {
      display: none;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    padding: 0 40px;
    border-radius: 50%;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Paragraph = styled.p`
  color: black;
  text-align: justify;
  width: 80%;
  font-size: 1rem;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;