import React from "react";
import "./App.css";
import { log } from "console";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { Simulate } from "react-dom/test-utils";

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      <Accordion titleValue={"Menu"} />
      <Accordion titleValue={"Users"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}

export default App;
