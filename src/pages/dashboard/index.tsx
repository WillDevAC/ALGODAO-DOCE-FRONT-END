import React, { useEffect } from 'react';

import Head from "next/head";

import LayoutDashboard from '../../components/dashboard/layout'

import Card from '../../components/dashboard/card'

import Router from 'next/router'

const dashboard: React.FC = () => {

  function analiseLogin (){
    var senha = prompt('Digite sua senha: ');

    if(senha != '0225') {
      return Router.push('/')
    }
  }

  useEffect(() => {
    analiseLogin()
  }, [])

  return (
    <>
      <Head>
        <title>Algodão Doce Canoas | Dashboard</title>
        <link rel="shortcut icon" href="icons/logo.ico"/>    
      </Head>
      <LayoutDashboard>
        <Card Title="Cardápio Berçário" Date="12/04/2022" Link="menus/bercario.xlsx"/>
        <Card Title="Cardápio Abril" Date="12/04/2022" Link="menus/abril.xlsx"/>
      </LayoutDashboard>
    </>
  );
}

export default dashboard;