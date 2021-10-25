import styled from "styled-components";

export const Cross = styled.img`
  display: none;
  cursor: pointer;
  transition: all 0.5s linear;

  @media only screen and (max-width: 450px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundList};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.5rem;
`;

export const Lu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 80rem;
  padding-bottom: 1rem;
  overflow-y: auto;

  @media only screen and (max-width: 450px) {
    max-height: 35rem;
  }

  @media only screen and (max-width: 380px) {
    max-height: 25rem;
  }
`;

export const Wrapper = ({ provided, children }) => {
  return (
    <Lu ref={provided.innerRef} {...provided.droppableProps}>
      {children}
    </Lu>
  );
};

export const Li = styled.li`
  height: 6.4rem;
  border-bottom: ${({ theme }) => theme.border};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2.4rem;
  /* transition: all 0.5s ease-out; */
  font-size: 1.8rem;

  &:hover ${Cross} {
    display: block;
  }

  @media only screen and (max-width: 450px) {
    height: 4.8rem;
  }

  @media only screen and (max-width: 380px) {
    max-height: 25rem;
  }
`;

export const ListItem = ({ provided, children }) => {
  return (
    <Li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {children}
    </Li>
  );
};

export const CrossIcon = ({ src, onDelete, task }) => {
  return <Cross src={src} onClick={(event) => onDelete(event, task)} />;
};
