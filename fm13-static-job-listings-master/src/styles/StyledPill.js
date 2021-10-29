import styled from 'styled-components';

export const RawPill = styled.div`
  background: ${(props) => props.background};
  border-radius: 1.2rem;
  padding: 0.6rem 0.8rem 0.4rem 0.8rem;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0')};
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.4rem;
  text-align: center;
  letter-spacing: -0.009rem;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Pill = ({ background, content, marginLeft }) => {
  return (
    <RawPill background={background} marginLeft={marginLeft}>
      <Text>{content}</Text>
    </RawPill>
  );
};
