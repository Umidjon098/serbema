import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class LoginApi {
  static endpoint = "/api/token/";

  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }
}
