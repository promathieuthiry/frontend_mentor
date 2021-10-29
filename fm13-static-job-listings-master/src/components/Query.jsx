import React from 'react';
import { Container, QueryContainer, ClearText } from '../styles/StyledQuery';
import { QueryButton } from '../styles/StyledButton';

function Query({ removeElement, filterQuery, setFilterQuery }) {
  return (
    <Container filterQuery={filterQuery}>
      <QueryContainer>
        {filterQuery.map((query, index) => {
          return <QueryButton key={index} content={query} removeElement={removeElement} />;
        })}
      </QueryContainer>
      <ClearText setFilterQuery={setFilterQuery}>Clear</ClearText>
    </Container>
  );
}

export default Query;
