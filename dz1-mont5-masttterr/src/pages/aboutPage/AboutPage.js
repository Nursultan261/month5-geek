import React from "react";
import { useDispatch} from "react-redux";
import Menu from "../../components/menu/Menu";

function AboutPage  () {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch({
      type: "handle menu",
    });
  };

  return (
    <div>
      <button onClick={handleMenu}>Menu</button>
      <Menu />
    </div>
  );
};

export default AboutPage;
