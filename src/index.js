import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import Store  from './store/store';
import { BrowserRouter } from "react-router-dom";

const num = Math.floor(Math.random() * 500);  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App num={num} />
    </Provider>
  </BrowserRouter>
);
