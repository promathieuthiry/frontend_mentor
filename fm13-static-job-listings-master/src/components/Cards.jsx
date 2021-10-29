import React from 'react';
import { Container, Logo, Categories, ButtonType, Line } from '../styles/StyledCard';

function Cards({ job, addElement }) {
  return (
    <Container>
      <Logo source={`.${job.logo}`} />
      <Categories job={job} />
      <Line />
      <ButtonType job={job} addElement={addElement} />
    </Container>
  );
}

export default Cards;
