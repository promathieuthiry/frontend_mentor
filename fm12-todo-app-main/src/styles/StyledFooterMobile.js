import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  padding: 2rem 2.4rem 2rem 2.4rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: -0.02rem;
  color: #9495a5;
  margin-top: 1.6rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundList};

  @media only screen and (min-width: 450px) {
    display: none;
  }
`;
