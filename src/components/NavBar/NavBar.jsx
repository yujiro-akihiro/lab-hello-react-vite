import React from "react";
import './NavBar.css'; // NavBar.cssを./で始めて相対パスとして読み込む
// !!! Check, how to set a img directory.
// try 1    <img src="./src/assets/logo.png" alt="Iron Hack Logo" /> !!! 
// try 2    <img src="src/assets/logo.png" alt="Iron Hack Logo" />　/ ✅ this one works.

function NavBar() {
  return (
    <nav className="Nav">
      <div>
        <img src="/src/assets/ironhack-logo-xs-dark.png" alt="Iron Hack Logo" />
      </div>
      <div>
        <img src="/src/assets/menu-top-xs-dark.png" alt="Menu" />
      </div>
    </nav>
  );
}

export default NavBar; // export NavBar component to use
