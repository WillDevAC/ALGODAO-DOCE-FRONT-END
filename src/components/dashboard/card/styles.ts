import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  min-height: 200px;
  padding: 20px;
  border-radius: 20px;
  background-color: #EFEFEF;

  h1 {
    color: #44a3d9;
    font-size: 1.5rem;
    padding-bottom: 1%;
  }

  p {
    width: 100%;
    color: #de80D0;
  }
  
  button {
    align-self: flex-start;
  }

  & > div {
    border-bottom: 1px solid #DE80B0;
  }

  @media screen and (max-width: 685px){
    width: 100%;
  }
`;

export const BtnPink = styled.a`
  color: white;
  font-size: 1rem;
  align-self: flex-start;
  text-decoration: none;
  border-radius: 5px;
  padding: 5px 15px;
  border: none;
  background-color: #DE80B0;

  &:hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.03);
    cursor: pointer;
  }
`;
