import React from 'react';

import {
  Card,
  BtnPink
 } from './styles';

interface Props {
  Title: string,
  Date: string,
  Link: string
}

const card: React.FC <Props> = ({Title, Date, Link}) => {
  return (
    <Card>
      <div>
        <h1>{Title}</h1>
      </div>
      <p>Postado em : {Date}</p>
        <BtnPink href={Link} target="_blank">Visualizar</BtnPink>
    </Card>
  );
}

export default card;