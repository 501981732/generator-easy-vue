import axios from 'axios'
import { baseUrl } from './env.js'
import qs from 'qs'
import Toast from '@/plugins/toast/index.js'
import Loading from '@/plugins/loading/index.js'
vue.use(Toast)
vue.use(Loading)

const ax = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true // 允许携带cookie
})

// 添加请求拦截器
ax.interceptors.request.use(function(config) {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器
ax.interceptors.response.use(function(response) {
    if (process.env.NODE_ENV == 'development') {
        console.log(response)
    }
    return response;
}, function(error) {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
        console.log("错误回调", error)
        vue.$x.loading.hide()
        vue.$x.toast('请求超时请稍后再试')
        return Promise.reject(error); // reject这个错误信息
    }
});
export default ax
