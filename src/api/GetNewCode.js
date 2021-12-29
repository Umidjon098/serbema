import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class getNewCodeApi {
  static endpoint = "/api/code/";

  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }
}
