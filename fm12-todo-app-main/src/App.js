import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useKeyPress from "../src/customHooks/useKeyPress";
import bgCoverDark from "../src/images/bg-desktop-dark.jpg";
import bgCoverLight from "../src/images/bg-desktop-light.jpg";
import { container, bgImg, wrapper, dragAndDropText } from "./App.module.css";
import Header from "../src/components/Header/header";
import Form from "../src/components/Form/Form";
import List from "../src/components/List/List";
import FooterMobile from "./components/Footer/FooterMobile";
import { initialValue } from "./components/Helpers/data";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { useDarkMode } from "../src/customHooks/useDarkMode";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(initialValue);
  const [caseFilter, setCaseFilter] = useState(0);
  // const [theme, setTheme] = useState("light");
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelector("body")
        .setAttribute("style", "transition: all 0.50s linear;");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    for (let d of newData) {
      if (d.key === task.key) {
        d.isDone = !d.isDone;
      }
    }
    setData(newData);
  };

  const onDelete = (event, task) => {
    event.preventDefault();
    const filterNewData = data.filter((el) => el.key !== task.key);
    setData(filterNewData);
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

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className={container}>
          <img
            src={theme === "light" ? bgCoverLight : bgCoverDark}
            alt={""}
            className={bgImg}
          />
          <div className={wrapper}>
            <Header theme={theme} themeToggler={themeToggler} />
            <Form input={input} handleChange={handleChange} />
            <List
              filterArr={filterArr}
              data={data}
              setData={setData}
              onSelect={onSelect}
              onDelete={onDelete}
              caseFilter={caseFilter}
              setCaseFilter={setCaseFilter}
              clear={clear}
            />
            <FooterMobile
              caseFilter={caseFilter}
              setCaseFilter={setCaseFilter}
            />
            <p className={dragAndDropText}>Drag and drop to reorder list</p>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
