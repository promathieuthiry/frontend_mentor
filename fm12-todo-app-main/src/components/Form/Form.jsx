import React from "react";
import { BulletContainer, Bullet } from "../../styles/StyledBullet";
import { Container, Input } from "../../styles/StyledInput";

function Form({ input, handleChange }) {
  return (
    <Container>
      <BulletContainer>
        <Bullet />
      </BulletContainer>
      <Input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Create a new todo..."
      />
    </Container>
  );
}

export default Form;
