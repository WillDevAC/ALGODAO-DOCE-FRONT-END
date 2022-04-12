import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'ABeeZee', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-image: linear-gradient(#44A3D9, #DE80B0) ;
  }

`
