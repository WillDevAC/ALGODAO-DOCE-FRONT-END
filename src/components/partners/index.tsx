import React, { useEffect } from 'react';

import { PartnersContainer, PartnersBox, TitlePartner } from '../../templates/home/styles'

interface IPartners{
    title: string;
    description: string;
    action?: string;
}

const partners: React.FC<IPartners> = () => {
  return ( 
    <>
        <TitlePartner>Nossos Parceiros</TitlePartner>

        <PartnersContainer>

          <PartnersBox>
            <img src="/images/parceiro1.png" alt="Box to partner 1" />
          </PartnersBox>

          <PartnersBox>
            <img src="/images/parceiro2.png" alt="Box to partner 2" />
          </PartnersBox>
        </PartnersContainer>
    </>
  );
}

export default partners;