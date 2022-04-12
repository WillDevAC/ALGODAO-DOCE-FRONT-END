import styled from 'styled-components';

import { MdMenuBook } from 'react-icons/md';

import { BsImages } from 'react-icons/bs';

import { RiPencilRuler2Fill } from 'react-icons/ri';

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: #44a3d9;
  width: 13%;
  height: 100vh;

  @media screen and (max-width: 985px) {
   display: none;
  }

  h1, p {
    padding: 15px;
    width: 100%;
    text-align: center;
    color: white;
  }
  h1 {
    font-size: 1.5rem;
    background-color: #3e94c5;
  }
  p {
    display: flex;
    font-size: 1rem;

    &:hover {
      transition: 0.1s;
      font-size: 1.2rem;
      background-color: #4fb4ed;
      cursor: pointer;
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  section {  
    border-bottom: 1.5px solid white;
  }
`;

export const MenuBook = styled(MdMenuBook)`
  margin-right: 10px;
`;

export const RulerPencil = styled(RiPencilRuler2Fill)`
  margin-right: 10px;
`;

export const Gallery = styled(BsImages)`
  margin-right: 10px;
`;
