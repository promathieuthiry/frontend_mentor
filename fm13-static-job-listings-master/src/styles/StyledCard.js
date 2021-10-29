import styled from 'styled-components';
import images from 'url:../images/*.svg';
import { Pill } from './StyledPill';
import { Button } from './StyledButton';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  margin-bottom: 2.4rem;
  padding: 3.2rem 4rem;
  display: flex;
  flex-direction: row;
  border-left: 0.5rem solid #5ca5a5;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    position: relative;
    margin-bottom: 4rem;
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  }
`;

export const RawImage = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 8.8rem;
  height: 8.8rem;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    position: absolute;
    top: -2.4rem;
    left: 2.4rem;
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const Logo = ({ source }) => {
  const name = source.split('/');
  const file_name = name[2].substring(0, name[2].length - 4);
  return <RawImage src={`${images[file_name]}`} />;
};

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.4rem;
  flex: 1;
  @media only screen and (max-width: 1100px) {
    padding-left: 0rem;
  }
`;

export const HeaderCategories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const NameCompany = styled.p`
  line-height: 1.6rem;
  color: #5ca5a5;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export const Position = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #2b3939;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #b7c4c4;
  margin-top: 0.8rem;
  gap: 1.6rem;

  @media only screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 24px;
    gap: 0.8rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1.5rem;
  line-height: 2.4rem;
  letter-spacing: -0.012rem;
`;

export const Bullet = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background-color: #b7c4c4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #b7c4c4;
  margin: 1.6rem 0rem;

  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const Categories = ({ job }) => {
  const { company, position, postedAt, contract, location } = job;
  return (
    <CategoriesWrapper>
      <HeaderCategories>
        <NameCompany>{company}</NameCompany>
        {job.new && <Pill background={'#5CA5A5'} content={'new!'} marginLeft={'1.6rem'} />}
        {job.featured && <Pill background={'#2B3939'} content={'featured'} marginLeft={'.8rem'} />}
      </HeaderCategories>
      <Position>{position}</Position>
      <FooterWrapper>
        <FooterText>{postedAt}</FooterText>
        <Bullet />
        <FooterText>{contract}</FooterText>
        <Bullet />
        <FooterText>{location}</FooterText>
      </FooterWrapper>
    </CategoriesWrapper>
  );
};

export const ButtonType = ({ job, addElement }) => {
  const { role, level, languages } = job;
  const data = [role, level, ...languages];
  return (
    <ButtonContainer>
      {data &&
        data.map((item, index) => {
          return <Button key={index} content={item} addElement={addElement} />;
        })}
    </ButtonContainer>
  );
};
