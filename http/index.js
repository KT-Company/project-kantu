import axios from 'axios'
let cancel, promiseArr = {}//promiseArr拦截使用
const CancelToken = axios.CancelToken
axios.defaults.baseURL = '/api'

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
//请求超时时间
axios.defaults.timeout = 30000

// 跨域是否带cookie
axios.defaults.withCredentials = false
export default {
    //get请求
    get(url, data) {
        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: url,
                params: data,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)//注意点1
            })
        })
    },
    //post请求
    post(url, data) {
        let storage = window.localStorage
        return new Promise((resolve) => {
            axios({
                method: 'post',
                url: url,
                data: JSON.stringify(data),//将post请求的数据转化为json字符串
                headers: { 'Authorization': storage.token, 'Content-Type': 'application/json; charset=UTF-8' },//注意点2
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    //delete请求
    delete(url, data) {
        let storage = window.localStorage
        return new Promise((resolve) => {
            axios({
                method: 'delete',
                url: url,
                data: JSON.stringify(data),//将post请求的数据转化为json对象
                headers: { 'Authorization': storage.token, 'Content-Type': 'application/json; charset=UTF-8' }
            }).then(res => {
                resolve(res)
            })
        })
    },
    //put请求
    // put(url, data) {
    //   let storage = window.localStorage
    //   return new Promise((resolve) => {
    //     axios({
    //       method: 'post',
    //       url: url,
    //       data: qs.stringify(data),//注意点3
    //       headers: { 'Authorization': storage.token },
    //     }).then(res => {
    //       resolve(res)
    //     })
    //   })
    // },
}