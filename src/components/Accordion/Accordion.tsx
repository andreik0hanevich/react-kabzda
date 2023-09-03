import React from "react";

function Accordion() {
  return (
    <>
      <AccordionTitle />
      <AccordionBody />
    </>
  );
}

function AccordionTitle() {
  console.log("AccordionTitle rendering");

  return <h3>Menu</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendering");

  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Accordion;
