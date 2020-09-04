// theme.js
import {Http} from "../utils/http";

class Theme {
  static async getHomeLocationA() {
    return await Http.request({url: "/users",method:"GET",data: {}})
  }
}

module.exports = {
  Theme
}