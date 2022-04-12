import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

import { BsFillCalendar2CheckFill } from 'react-icons/bs'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #DE80B0;
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    color: #fff;
`;

export const SidebarMenu = styled.ul `
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 25px;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    background-color: #DE80B0;
    border-radius: 10px;
    padding: 15px 10px;
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: #44a3d9;
        transform: scale(1.01);
        transition: 0.1s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled.a `
    display: flex;
    border-radius: 10px;
    background-color: #44a3d9;
    white-space: nowrap;
    padding: 15px 20px;
    color: white;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.1s ease-in-out;
        background-color: #DE80B0;
        transform: scale(1.01);
    }
`;

export const Logo = styled.div`
  display: block;
  text-align: center;
  
  img {
    width: 350px;
  
    @media screen and (max-width: 500px) {
      width: 200px;
    }
  }
`;

export const Calendar = styled(BsFillCalendar2CheckFill)`
  width: 100%;
  padding-right: 10px;
`;
