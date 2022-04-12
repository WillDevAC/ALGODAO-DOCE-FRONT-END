import React, {useState, useEffect} from 'react';

import ClockLoader from "react-spinners/ClockLoader";

import { ContainerFlex } from  "../templates/home/styles";

import { css } from "@emotion/react";

import Default from './home';

const override = css`
  
`; 

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#DE80B0");

  useEffect(() => {
    setLoading(true)
    setColor("#de80b0")
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return(
    <>
      {
        loading ?
        <ContainerFlex>
          <ClockLoader color={color} loading={loading} css={override} size={70} />
        </ContainerFlex>
        
        :
        <Default/>
      }
    </>
  ) 
}

export default Home
