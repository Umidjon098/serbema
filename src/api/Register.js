import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class RegisterApi {
  static endpoint = "/api/register/";

  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }
}
