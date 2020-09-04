import { promisic } from "./util";
import config from "../config/config";

class Http {
  static async request({ url,method,data }) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      method,
      data,
    });
    
    return res.data;
  }
};

module.exports = {
  Http
}