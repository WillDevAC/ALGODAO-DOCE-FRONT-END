import styled from 'styled-components';

export const Container = styled.div`
  background-color: #26C7D9;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  flex-direction: column;
  padding: 2% 0;

  h1 {
    margin-bottom: 2rem;

    @media screen and (max-width: 1000px) {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 5% 0;
  }

`;

export const Box = styled.div `
  display: flex;
  height: 75%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media screen and (max-width: 500px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const CardImageTop = styled.div `
  display: flex;
  height: 90%;
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    width: 70%;
  }

  p{
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 150%;
    }
  }

`

