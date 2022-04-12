import React from "react";

import { Container, Box, CardImageTop } from "./styles";

const activities: React.FC = () => {
  return (
    <Container>
      <h1>ATIVIDADES EXTRAS</h1>
      <Box>
        <CardImageTop>
          <img src="images/activity.png" alt="Bebê" />
          <p>Ballet</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/activity2.png" alt="Bebê" />
          <p>Ginástica</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/activity3.png" alt="Bebê" />
          <p>Capoeira</p>
        </CardImageTop>
        <CardImageTop>
          <img src="images/activity4.png" alt="Bebê" />
          <p>Idiomas</p>
        </CardImageTop>
      </Box>
    </Container>
  );
};

export default activities;
