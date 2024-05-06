import React from "react";
import './aboutReact.css';
import Declarative from "../aboutReact/Declarative/Declarative";
import JSX from "../aboutReact/JSX/JSX";

function AboutReact() {
  return (
    <>
      <section id="aboutReact">
          <Declarative />
        <div id="components">Components</div>
        <div id="single-way">Single-way</div>
        <JSX />
      </section>
    </>
  );
}

export default AboutReact; // export Header component to use
