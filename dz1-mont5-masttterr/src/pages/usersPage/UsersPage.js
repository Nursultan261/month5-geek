import React from "react";
import { useSelector, useDispatch } from "react-redux";

const updateText = (text) => {
  return {
    type: "up text",
    payload: text,
  };
};

const addText = (text) => {
  return {
    type: "add text",
    payload: text,
  };
};
const deleteAllText = () => {
  return {
    type: "delete al",
  };
};

const UsersPage = () => {
  const text = useSelector((state) => state.text);
  const textList = useSelector((state) => state.textList);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  const handleAddClick = () => {
    dispatch(addText(text));
  };
  const handleDeleteAllClick = () => {
    dispatch(deleteAllText());
  };

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleDeleteAllClick}>Delete All</button>

      <div>
        {textList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;