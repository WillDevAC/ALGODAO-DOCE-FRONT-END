import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

import { FiLogOut } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 3px solid #44a3d9;
  width: 100%;
  align-items: center;
  padding: 0.5rem calc((100vw - 1900px) / 2);
  height: 100%;
  z-index: 10;
`;

export const Logo = styled.div`
  display: block;
  margin: 0 15px;
  img {
    width: 200px;
  }
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 985px) {
    color: #DE80B0;
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const LogOut = styled(FiLogOut)`
  margin-right: 10px;
`;


export const Disconnect = styled.a`
  margin: 0 15px;
  color: #44a3d9;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #DE80B0;
    transition: 0.1s ease-in-out;
    transform: scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: 985px) {
    display: none;
  }
`;
