import React from "react";

import Slider from "react-slick";

import { SliderItem } from "./styles";

import { settings } from "../../utils/sliderconfig";

import Image from 'next/image'

const slider: React.FC = () => {
  return (
    <div id="home" className="home">
      <Slider {...settings}>
        <SliderItem>
          <Image src="/images/mainslider1.png" alt="Turno Inverso, matrículas abertas" layout="fill" objectFit='none' priority/>
          <Image src="/images/mainslider2.png" alt="Turno Inverso, matrículas abertas" layout="fill" objectFit='none' priority/>
        </SliderItem>
      </Slider>
    </div>
  );
};

export default slider;
