import HTTPMethods from "./HTTPMethods";
import axios from "axios";

export const baseUrl = "http://62.209.128.34";

export default function mainCallerOX(
  path,
  method = HTTPMethods.GET,
  data,
  headers
) {
  const _headers = {
    Accept: "application/json",
    ...headers,
  };

  const options = {
    method,
    url: baseUrl + path,
  };
  // if (localStorage.getItem("accessToken")) {
  //   _headers.Authorization = `Bearer  ${localStorage.getItem("accessToken")}`;
  // }

  if (data) {
    options.data = data;
    if (data instanceof FormData) {
      _headers["Content-type"] = "multipart/form-data";
    } else {
      _headers["Content-type"] = "application/json";
    }
  }

  options.headers = _headers;

  return axios(options).then((r) => r.data);
}
