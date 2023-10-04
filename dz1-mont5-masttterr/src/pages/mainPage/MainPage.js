import React from "react";
import { useSelector, useDispatch } from "react-redux";

function MainPage() {
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const changeTitle = () => {
    dispatch({
      type: "title",
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change title</button>d
    </div>
  );
}

export default MainPage;
