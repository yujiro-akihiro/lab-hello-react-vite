import React from "react";
import Button from "./Button/Button";

function Header() {
  return (
    //  ↓ this one explain ↓
    <>
      <h1>Say hello to<br /> ReactJS</h1>
      <p>
        You will learn how to use
        <br />
        the most popular frontend library,
        <br />
        and become a super Ninja developer.
      </p>
      <Button />
    </>
  );
}

export default Header; // export Header component to use
