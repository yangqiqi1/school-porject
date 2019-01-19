import axios from 'axios';
import qs from "qs";

class Axios{
  constructor (){
    let cancel;
    axios.defaults.baseURL = "http://localhost:8888/";
    axios.defaults.timeout = 5000;
    //请求拦截器
    axios.interceptors.request.use(
      config => {
        config.data = qs.stringify(config.data);
        config.headers = {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
        return config;
      },
      error => {
        return Promise.reject(error)
      }
    );
    //响应拦截器
    axios.interceptors.response.use(
      res => {
        console.log(res);
        if (res.data && res.data.status !== "0") {
          console.log("进入错误处理");
        }
        return res;
      },
      error => {
        console.log(error);
        return Promise.reject(error)
      }
    );
  };

  /**
   * GET 请求 {es6解构赋值}
   */
  get(url,data) {
    return new Promise((resolve, reject)=> {
      axios.get(url,{params:data})
        .then((data) => {
          resolve(response.data);
        })
        .catch((data) =>{
          reject(err)
        })
    })
  };
  /**
   * POST 请求
   */
  post(url,Data){
    return new Promise((resolve, reject)=> {
      axios.post(url,Data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) =>{
          reject(err)
        })
    })
  };
};
export default new Axios();