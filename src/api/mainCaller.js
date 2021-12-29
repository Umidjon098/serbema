import HTTPMethods from "./HTTPMethods";
import axios from "axios";

export const baseUrl = "http://138.68.70.187:8001";

export default function mainCallerOX(
  path,
  method = HTTPMethods.GET,
  data,
  headers
) {
  const _headers = {
    Accept: "application/json",
    Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    ...headers,
  };

  const options = {
    method,
    url: baseUrl + path,
  };

  //   if (development) _headers.Authorization = "Bearer " + getTOKEN();

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
