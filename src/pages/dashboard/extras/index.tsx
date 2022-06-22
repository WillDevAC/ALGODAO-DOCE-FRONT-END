import React from 'react';

import Card from '../../../components/dashboard/card'

import { Container } from '../../../templates/dashboard/styles';

import LayoutDashboard from '../../../components/dashboard/layout'

const extras: React.FC = () => {
    return (
        <LayoutDashboard>
          <Container>
            <Card Title='Calendário escolar 2022 (ATUALIZADO)' Date="24/05/2022" Link='/extras/calendario.pdf'></Card>
            <Card Title='Lista de materiais berçário' Date="03/03/2022" Link='/extras/bercario.pdf'></Card>
            <Card Title='Lista de materiais Jardim I' Date="03/03/2022" Link='/extras/jardim1.pdf'></Card>
          </Container>
          <Container>
            <Card Title='Catálogo de uniformes' Date="03/03/2022" Link='/extras/catalogo.pdf'></Card>
            <Card Title='Lista de materiais Maternal I' Date="03/03/2022" Link='/extras/maternal1.pdf'></Card>
            <Card Title='Lista de materiais Jardim II' Date="03/03/2022" Link='/extras/jardim2.pdf'></Card>
          </Container>
          <Container>
            <Card Title='Tabela de preços (ATUALIZADO)' Date="22/06/2022" Link='/extras/tabela.pdf'></Card>
            <Card Title='Lista de materiais Maternal II' Date="03/03/2022" Link='/extras/maternal2.pdf'></Card>
          </Container>
        </LayoutDashboard>
      );
}

export default extras;