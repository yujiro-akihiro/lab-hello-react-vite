import React from "react";
import "../commonStyles.css"; // common styles for each section from about React

function JSX() {
  return (
   
    <>
      <section id="JSX">
        <div className="img">
        <img src="/src/assets/ironhack-logo-xs-dark.png" alt="Iron Hack Logo" />

        </div>
        <div className="title">JSX</div>
        <div className="p">Statically-typed, designed to run on modern browsers.</div>
      </section>
    </>
  );
}

export default JSX; // export to use
