import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class TimeApi {
  static endpoint = "/api/time/";

  static get() {
    return mainCaller(this.endpoint, HTTPMethods.GET);
  }
}
