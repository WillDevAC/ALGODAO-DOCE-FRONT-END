import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

export const Icons = styled.div`
  display: block;

  @media screen and (max-width: 650px) {
    padding-top: 4%;
  }
`;

export const Logo = styled.div`
  display: block;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5% 0;
  
  background-color: #26c7d9;

  img {
    width: 250px;
  }

  a {
    margin: 0 20px;
    font-size: 3rem;
    color: white;
    transition: 0.1s;

    &:hover {
      color: #26c7d9;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;

    img {
      width: 300px;
    }
  }
`;
