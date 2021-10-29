import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  transform: translateY(-3.6rem);
  opacity: ${(props) => (props.filterQuery.length > 0 ? '1' : '0')};
  transition: all 0.15s ease-out;
`;

export const QueryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  flex: 1;
`;

export const ClearTextStyled = styled.p`
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #7c8f8f;
  transition: all 0.15s ease-out;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
    color: #5ca5a5;
  }
`;

export const ClearText = ({ setFilterQuery, children }) => {
  return <ClearTextStyled onClick={() => setFilterQuery([])}>{children}</ClearTextStyled>;
};
