import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

  return (
    <div className={'App'}>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      <Accordion titleValue={"Menu"}  />
      <Accordion titleValue={"Users"} />
      <Rating />
      <Rating />
      <Rating />
      <Rating />
      <Rating />
      <OnOff  />
      <OnOff  />
      <OnOff  />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}

export default App;
