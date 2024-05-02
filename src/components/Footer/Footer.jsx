import React from "react";
import './Footer.css';
// import Button from "./Button/Button";

function Footer() {
  return (
    //  ↓ this one <></>
    // which way is better to organize those 4 topics.
    // each topics from about should be = 4 components?
    // then import 4 components and like a <Declarative />...?
    // what about img? should be also components?
    <>
      <section id="about">
        <div id="declarative">Declarative</div>
        <div id="components">Components</div>
        <div id="single-way">Single-way</div>
        <div id="jsx">JSX</div>
      </section>
    </>
  );
}

export default Footer; // export Header component to use
