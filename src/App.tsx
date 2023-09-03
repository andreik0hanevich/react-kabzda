import React from "react";
import "./App.css";
import { log } from "console";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { Simulate } from "react-dom/test-utils";

function App() {
  return (
    <div>
      This is APP component
      <Title />
      <Rating value = {3} />
      <Accordion />
      <Rating value = {4} />
    </div>
  );
}

function Title() {
  return <>String</>;
}

export default App;
