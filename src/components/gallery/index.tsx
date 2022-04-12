import React, { useState } from "react";

import Slider from "react-slick";

import { settings } from "../../utils/galleryslider";

import { Container, SectionImg} from "./styles";

const Gallery: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        <SectionImg>
          <img src="images/gallery.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery2.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery3.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery4.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery5.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery6.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery7.png" alt="Imagem escola algodão doce" />
        </SectionImg>
        <SectionImg>
          <img src="images/gallery8.png" alt="Imagem escola algodão doce" />
        </SectionImg>
      </Slider>
    </Container>
  );
};

export default Gallery;
