import styled from 'styled-components';

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  margin: 0 25px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    color: #de80b0;
    text-align: left;
    font-size: 1rem;

    @media screen and (max-width: 360px) {
      font-size: 1.2rem;
    }
  }

  input {
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #44A3D9;

    &:last-child {
      margin-bottom: 5%;
    }
  }
`;

export const TitleCloseBtn = styled.div `
    display: flex;
    justify-content: flex-end;

    button {
        background-color: transparent;
        border: none;
        color: #44a3d9;
        font-size: 25px;

        &:hover {
          transition: 0.1s ease-in-out;
          color: #DE80B0;
          cursor: pointer;
        }
    }
`;

export const Title = styled.div`
  color: #DE80B0;
  display: inline-block;
  font-size: 0.8rem;
  text-align: center;
  margin: 20px 0;
`;

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
