//公共
import { url } from '@/config/config'
import axios from 'axios'
import { Message } from "element-ui"
//创建axios,赋值给service
export async function requestData(type, link, data) {
    const service = axios.create();
    // 添加请求拦截器
    service.interceptors.request.use(function(config) {
        // 在发送请求之前做些什么
        // config.headers.Authorization = ${token};//添加token
        config.headers['Tokey'] = 111;
        return config;
    }, function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    // 添加响应拦截器
    service.interceptors.response.use(function(response) {
        // 对响应数据做点什么
        return response;
    }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    await service.request({
        method: type,
        url: url + link,
        data,
        responseType: 'json',
    }).then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.log(error)
    })
}