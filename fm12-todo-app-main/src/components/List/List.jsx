import React from "react";
import { ListText, NewBullet } from "../../styles/StyledBullet";
import crossIcon from "../../images/icon-cross.svg";
import Footer from "../Footer/Footer";
import {
  Container,
  Wrapper,
  ListItem,
  CrossIcon,
} from "../../styles/StyledList";

function List({
  filterArr,
  data,
  onSelect,
  onDelete,
  caseFilter,
  setCaseFilter,
  clear,
}) {
  return (
    <Container>
      <Wrapper>
        {filterArr(data).map((task, index) => {
          const { title, isDone, key } = task;
          return (
            <ListItem key={key}>
              <NewBullet onSelect={onSelect} task={task} isDone={isDone} />
              <ListText
                title={title}
                onSelect={onSelect}
                task={task}
                isDone={isDone}
              />
              <CrossIcon src={crossIcon} onDelete={onDelete} task={task} />
            </ListItem>
          );
        })}
      </Wrapper>
      <Footer
        data={data}
        caseFilter={caseFilter}
        setCaseFilter={setCaseFilter}
        clear={clear}
      />
    </Container>
  );
}

export default List;
