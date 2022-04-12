import React from 'react';

import { Title } from '../../../templates/home/styles'; 

import LayoutDashboard from '../../../components/dashboard/layout'

import Card from '../../../components/dashboard/card'


const album: React.FC = () => {
  return (
    <LayoutDashboard>
      <Card Title="Fotinhas formandos 2021" Date="12/04/2022" Link="/fotinhas/formandos.zip"/>
      <Card Title="Fotos carnaval 2021" Date="12/04/2022" Link="/fotinhas/carnaval.zip"/>
      <Card Title="Galeria de 2019" Date="12/04/2022" Link="/fotinhas/2019.zip"/>
      <Card Title="Galeria de 2020" Date="12/04/2022" Link="/fotinhas/2020.zip"/>
    </LayoutDashboard>
  );
}

export default album;