import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6.4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundList};
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  @media only screen and (max-width: 450px) {
    height: 4.8rem;
    margin-bottom: 1.6rem;
  }
`;

export const Input = styled.input`
  font-family: Josefin Sans;
  border: none;
  padding: 2rem 2.4rem 2rem 0rem;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.textList};
  height: 4.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundList};

  ::placeholder {
    color: #9495a5;
  }

  @media only screen and (max-width: 450px) {
    padding: 1.8rem 2rem 1.8rem 0rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;
