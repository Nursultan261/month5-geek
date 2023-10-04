import React from "react";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useSelector((state) => state.menu);

  return (
    <ul className={menu ? "activeMenu" : "hiddenMenu"}>
      <li>AboutPage</li>
      <li>MainPage</li>
      <li>ContactsPage</li>
    </ul>
  );
}

export default Menu;
