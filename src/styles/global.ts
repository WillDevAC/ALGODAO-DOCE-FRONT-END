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

  @keyframes modal-video {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  
  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -ms-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
  }
  
  .modal-video-effect-exit {
    opacity: 0;
  }
  
  .modal-video-effect-exit .modal-video-movie-wrap {
    -webkit-transform: translate(0, 100px);
    -moz-transform: translate(0, 100px);
    -ms-transform: translate(0, 100px);
    -o-transform: translate(0, 100px);
    transform: translate(0, 100px);
  }
  
  .modal-video-body {
    max-width: 960px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  
  .modal-video-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  @media (orientation: landscape) {
    .modal-video-inner {
      padding: 10px 60px;
      box-sizing: border-box;
    }
  }
  
  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -ms-transition: -ms-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
  }
  
  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -45px;
    right: 0px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
  }
  
  @media (orientation: landscape) {
    .modal-video-close-btn {
      top: 0;
      right: -45px;
    }
  }
  
  .modal-video-close-btn:before {
    transform: rotate(45deg);
  }
  
  .modal-video-close-btn:after {
    transform: rotate(-45deg);
  }
  
  .modal-video-close-btn:before, .modal-video-close-btn:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
  }
  

`
