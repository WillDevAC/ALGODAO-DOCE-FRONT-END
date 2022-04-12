import React from 'react';

import { useRouter } from 'next/router';

import {
  Aside,
  MenuBook,
  RulerPencil,
  Gallery,
  SectionContainer
 } from './styles';
 

const aside: React.FC = () => {

  const router = useRouter()

  return (
    <Aside>
      <h1>Seções</h1>
      <SectionContainer>
        <section onClick={() => router.push('/dashboard')}>
          <p><MenuBook/>Cardápios</p>
        </section>
        <section onClick={() => router.push('/dashboard/extras')}>
          <p><RulerPencil/>Extras</p>  
        </section>
        <section onClick={() => router.push('/dashboard/album')}>
          <p><Gallery/>Galeria</p>
        </section>
      </SectionContainer>
    </Aside>
  );
}

export default aside;