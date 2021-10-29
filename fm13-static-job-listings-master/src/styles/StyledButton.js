import styled from 'styled-components';
import crossIcon from '../images/icon-remove.svg';

export const RawButton = styled.button`
  background-color: rgba(92, 165, 165, 0.1);
  border-radius: 0.4rem;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 2.4rem;
  letter-spacing: -0.02rem;
  font-family: Spartan;
  font-weight: bold;
  color: #5ca5a5;
  border: none;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: #5ca5a5;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const Button = ({ content, addElement }) => {
  return <RawButton onClick={() => addElement(content)}>{content}</RawButton>;
};

export const QueryButtonContainer = styled.div`
  background-color: rgba(92, 165, 165, 0.1);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  min-height: 3.2rem;
`;

export const QueryButtonText = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 2.4rem;
  letter-spacing: -0.02rem;
  font-family: Spartan;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  color: #5ca5a5;
`;

export const CrossWrapperRaw = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ca5a5;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    background-color: #2b3939;
  }
`;

export const CrossWrapper = ({ removeElement, content }) => {
  return (
    <CrossWrapperRaw onClick={() => removeElement(content)}>
      <img src={crossIcon} alt={''} style={{ width: '1.344rem', height: '1.344rem' }} />
    </CrossWrapperRaw>
  );
};

export const QueryButton = ({ content, removeElement }) => {
  return (
    <QueryButtonContainer content={content} removeElement={removeElement}>
      <QueryButtonText>{content}</QueryButtonText>
      <CrossWrapper removeElement={removeElement} content={content}></CrossWrapper>
    </QueryButtonContainer>
  );
};
