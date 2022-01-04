import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.css";
import "antd/dist/antd.css";
import MainContextProvider from "./context/MainContext";
import axios from "axios";

axios.defaults.baseURL = "http://62.209.128.34";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");
    if (
      refreshToken &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`/api/token/refresh/`, { refresh: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.access);
            return axios(originalRequest);
          }
        });
    } else if (error.response.status === 401) {
      // this.props.history.push("/");
    }
    return Promise.reject(error);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
