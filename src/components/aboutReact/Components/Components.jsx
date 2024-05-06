import React from "react";
import "../commonStyles.css"; // common styles for each section from about React

function Components() {
  return (
   
    <>
      <section id="Declarative">
        <div className="img">
        <img src="/src/assets/ironhack-logo-xs-dark.png" alt="Iron Hack Logo" />

        </div>
        <div className="title">Components</div>
        <div className="p">Build encapsulated components that manage their state..</div>
      </section>
    </>
  );
}

export default Components; // export to use
