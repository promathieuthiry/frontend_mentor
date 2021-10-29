import styled from 'styled-components';
import bg from '../images/bg-header-desktop.svg';

export const RawHeader = styled.div`
  height: 15.6rem;
  width: 100%;
  background-color: #5ca5a5;
`;

export const Header = () => {
  return (
    <RawHeader>
      <img src={bg} alt={''} style={{ width: '100%', height: '15.6rem', objectFit: 'cover' }} />
    </RawHeader>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 9.3% 7.6rem 9.3%;
  position: relative;
`;
