import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
    }

function AccordionTitle(props: any) {
  console.log("AccordionTitle rendering");

  return <h3>{props.title}</h3>;
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
