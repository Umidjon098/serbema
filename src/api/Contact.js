import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class ContactApi {
  static endpoint = "/api/contact/";

  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }
}
