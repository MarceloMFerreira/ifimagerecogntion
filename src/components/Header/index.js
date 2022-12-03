import React from "react";
import Logo from "./logo.png";
import "./index.css";

function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="meuDisco logo" />
      </a>
    </nav>
  );
}
export default Header;