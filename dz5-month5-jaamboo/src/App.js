import React from 'react'
import { Provider } from "react-redux";
import { store } from "./store";
import Calculator from "./components/calculator/Calculator";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Калькулятор</h1>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
