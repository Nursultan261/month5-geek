const initialState = {
  title: "old title",
  menu: false,
  count: 0,
  value: "",
  text: "",
  textList: [],
};

export default function reducer(state = initialState, actions) {
  if (actions.type === "CHANGE_TITLE") {
    return {
      title: "Hello, World!",
    };
  } else if (actions.type === "HANDLE_MENU") {
    return { ...state, menu: !state.menu };
  } else if (actions.type === "VALUE") {
    return { value: actions.payload };
  } else if (actions.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (actions.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else if (actions.type === "ADD_TEXT") {
    return {
      ...state,
      textList: [...state.textList, actions.payload],
      text: "",
    };
  } else if (actions.type === "DELETE_ALL_TEXT") {
    return {
      ...state,
      textList: [],
    };
  } else if (actions.type === 'UPDATE_TEXT') {
    return {
      ...state,
      text: actions.payload
    }
  }

  return state;
}
