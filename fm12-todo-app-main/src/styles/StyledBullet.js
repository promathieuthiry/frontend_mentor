import styled from "styled-components";
import checkIcon from "../images/icon-check.svg";

export const BulletContainer = styled.div`
  padding: 2.4rem;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 450px) {
    padding: 1.4rem 1.2rem 1.4rem 2rem;
  }
`;

export const Bullet = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border: ${({ theme }) => theme.border};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    border: 1px solid transparent;
    background: linear-gradient(
          ${({ theme }) => theme.backgroundList},
          ${({ theme }) => theme.backgroundList}
        )
        padding-box,
      linear-gradient(135deg, #55ddff 0%, #c058f3 100%) border-box;
  }
  @media only screen and (max-width: 450px) {
    width: 2rem;
    height: 2rem;
  }
`;

const BulletDone = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 450px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const NewBullet = ({ onSelect, task, isDone }) => {
  return (
    <BulletContainer onClick={() => onSelect(task)}>
      {isDone ? (
        <BulletDone>
          <img src={checkIcon} alt={""} />
        </BulletDone>
      ) : (
        <Bullet />
      )}
    </BulletContainer>
  );
};

const ListTextAlpha = styled.p`
  width: 100%;
  letter-spacing: -0.25px;
  color: ${({ theme }) =>
    (props) =>
      props.isDone ? theme.textIsDoneList : theme.textList};
  text-decoration-color: ${(props) => (props.isDone ? "#D1D2DA" : "#494c6b")};
  text-decoration: ${(props) => props.isDone && "line-through"};
  cursor: pointer;
  transition: all 0.15s linear;

  @media only screen and (max-width: 450px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: -0.02rem;
  }
`;

export const ListText = ({ title, onSelect, task, isDone }) => {
  return (
    <ListTextAlpha onClick={() => onSelect(task)} isDone={isDone}>
      {title}
    </ListTextAlpha>
  );
};
