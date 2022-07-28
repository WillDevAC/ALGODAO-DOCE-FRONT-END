
import React, { useEffect, useState } from 'react';

import Head from "next/head";

import Slider from '../../components/slider'

import About from '../../components/about'

import Gallery from '../../components/gallery'

import Informations from "../../components/informations";

import Classes from "../../components/classes";

import After_Hours from '../../components/after-hours'

import Activities from '../../components/activities'

import Footer from "../../components/footer";

import Partners from '../../components/partners'

import LayoutFragment from "../../components/layout";

import ModalVideo from 'react-modal-video'

const home = () => {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true);
  }, [])


  return (
    <>
      <Head>
        <title>Algodão Doce Canoas | Página Principal</title>
        <link rel="shortcut icon" href="icons/logo.ico"/>    
      </Head>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId="Vz8RcHH9TOY" onClose={() => setOpen(false)} />

      <LayoutFragment>
        <Slider/>
        <About/>
        <Gallery/>
	      <Informations/>
        <Classes/>
        <After_Hours/>
        <Activities/>
        <Partners/>
        <Footer/>
      </LayoutFragment>
    </>
  );
};

export default home;
