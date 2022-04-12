import Head from "next/head";

import Slider from '../../components/slider'

import About from '../../components/about'

import Gallery from '../../components/gallery'

import Informations from "../../components/informations";

import Classes from "../../components/classes";

import After_Hours from '../../components/after-hours'

import Activities from '../../components/activities'

import Footer from "../../components/footer";

import LayoutFragment from "../../components/layout";


const home: React.FC = () => {

  return (
    <>
      <Head>
        <title>Algodão Doce Canoas | Página Principal</title>
        <link rel="shortcut icon" href="icons/logo.ico"/>    
      </Head>
      <LayoutFragment>
        <Slider/>
        <About/>
        <Gallery/>
	      <Informations/>
        <Classes/>
        <After_Hours/>
        <Activities/>
        <Footer/>
      </LayoutFragment>
    </>
  );
};

export default home;
