import mainCaller from "./mainCaller";
import HTTPMethods from "./HTTPMethods";

export class Article {
  static endpoint = "/api/article/";

  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }
}
