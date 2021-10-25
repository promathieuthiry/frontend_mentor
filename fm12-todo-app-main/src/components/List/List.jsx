import React from "react";
import { ListText, NewBullet } from "../../styles/StyledBullet";
import crossIcon from "../../images/icon-cross.svg";
import Footer from "../Footer/Footer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../Helpers/dragAndDrop";

import {
  Container,
  Wrapper,
  ListItem,
  CrossIcon,
} from "../../styles/StyledList";

function List({
  filterArr,
  data,
  setData,
  onSelect,
  onDelete,
  caseFilter,
  setCaseFilter,
  clear,
}) {
  function dragEnd(param) {
    // if (destination !== "undefined") {
    //   if (caseFilter === 0) {
    //     const rawData = spliceArray(newData, source, destination, element);
    //     return setData(rawData);
    //   }
    //   if (caseFilter === 1) {
    //     const arr = newData.filter((el) => !el.isDone);
    //     const det = arr[destination];
    //     const el = arr[source];
    //     const s = id.indexOf(param.draggableId);
    //     const d = id.indexOf(det.key);
    //     const rawData = spliceArray(newData, s, d, el);
    //     return setData(rawData);
    //   }
    // }
    const destination = param.destination?.index;
    if (destination !== undefined) {
      reorder(param, data, setData, caseFilter);
    }
  }
  return (
    <Container>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <Wrapper
              provided={provided}
              // style={{
              //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
              // }}
            >
              {filterArr(data).map((task, index) => {
                const { title, isDone, key } = task;
                return (
                  <Draggable key={key} draggableId={key} index={index}>
                    {(provided, snapshot) => (
                      <ListItem provided={provided}>
                        <NewBullet
                          onSelect={onSelect}
                          task={task}
                          isDone={isDone}
                        />
                        <ListText
                          title={title}
                          onSelect={onSelect}
                          task={task}
                          isDone={isDone}
                        />
                        <CrossIcon
                          src={crossIcon}
                          onDelete={onDelete}
                          task={task}
                        />
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>

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

// LovePikachu!2016

// LovePikachu!2016
