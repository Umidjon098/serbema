import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.css";
import "antd/dist/antd.css";
import MainContextProvider from "./context/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
