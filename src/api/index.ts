import Taro from "@tarojs/taro";

console.log(process.env.TARO_APP_BASEURL, 67676);

const baseUrl = process.env.TARO_APP_BASEURL || "http://localhost:3636";
export function request(url, method, data = {}) {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${baseUrl}${url}`,
      method: method,
      data: data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}
