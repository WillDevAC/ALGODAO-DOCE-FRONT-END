import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  background-color: #00a99d;
`;

export const Baby = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 65%;
  align-items: center;
  max-width: 50%;

  img {
    border: 10px solid white;
    max-width: 65%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TurmaContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  max-width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-bottom: 10px;

  @media screen and (max-width: 645px) {
    font-size: 1.5rem;
  }
`;

export const TurmaSection = styled.div`
  display: flex;
  max-width: 65%;
  justify-content: center;
  gap: 100px;

  @media screen and (max-width: 860px) {
    gap: 100px;
  }

  @media screen and (max-width: 600px) {
    gap: 50px;
  }
  
  @media screen and (max-width: 460px) {
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const TurmaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    min-width: 200px;
  }
`;

export const Description = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 15px;
  font-size: 1rem;
`;


