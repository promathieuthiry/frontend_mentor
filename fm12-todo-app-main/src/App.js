import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useKeyPress from "../src/customHooks/useKeyPress";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [caseFilter, setCaseFilter] = useState(0);
  useKeyPress("Enter", input, () => {
    input && submit();
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const submit = () => {
    const task = {
      key: uuidv4(),
      title: input,
      isDone: false,
    };
    setData([...data, task]);
    setInput("");
  };

  const onSelect = (task) => {
    const newData = data.slice();
    // newData[index].isDone = !newData[index].isDone;
    for (let d of newData) {
      if (d.key === task.key) {
        d.isDone = !d.isDone;
      }
    }
    setData(newData);
  };

  const filterArr = (arr) => {
    switch (caseFilter) {
      case 0:
        return arr;
      case 1:
        return arr.filter((el) => !el.isDone);
      case 2:
        return arr.filter((el) => el.isDone);
      default:
        return arr;
    }
  };

  const clear = () => {
    const newData = data.slice();
    const doneTasks = newData.filter((el) => !el.isDone);
    setData(doneTasks);
  };

  const itemLeft = data.filter((el) => !el.isDone);

  return (
    <div className="App">
      Todo All Active Completed Clear Completed Drag and drop to reorder list
      <input type="text" value={input} onChange={handleChange} />
      <ul>
        {filterArr(data).map((task, index) => {
          const { title, isDone } = task;
          return (
            <li
              key={task.key}
              onClick={() => onSelect(task)}
              style={{ textDecoration: isDone && "line-through" }}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <p>{itemLeft.length} items left</p>
      <p onClick={() => setCaseFilter(0)}>All</p>
      <p onClick={() => setCaseFilter(1)}>Active</p>
      <p onClick={() => setCaseFilter(2)}>Completed</p>
      <p onClick={() => clear()}>Clear completed</p>
    </div>
  );
}

export default App;
