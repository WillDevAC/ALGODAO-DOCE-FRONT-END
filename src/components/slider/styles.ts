import styled from 'styled-components';


export const SliderItem = styled.div` 
  text-align: center;
  display: flex;
  justify-content: center;
  outline: none;

  img {
    width: 100%;
    height: 100%;
    min-height: 250px;
    object-fit: fill;
    text-align: center;
  }

  @media(max-width: 800px) {
   min-height: 250px;
  }

`;
