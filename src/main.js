import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

new Vue({
    render: h => h(App),
}).$mount('#app');

/**1.基本使用,config为配置项,axiso(config)*/
// axios({
//     url: 'http://123.207.32.32:8000/api/v1/home/multidata',
//     method: 'get'
// }).then(res => {
//     console.log(res);
// })
//
// Vue.config.productionTip = false;
// /**
//  * axios的全局配置
//  * @type {string}
//  */
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/v1'
// axios.defaults.timeout = 5000
//
// /**2.发送并发请求**/
// axios.all([
//     axios({
//         url: '/home/multidata'
//     }),
//     axios({
//         url: '/home/data',
//         params: {
//             type: 'sell',
//             page: 3
//         }
//     })
// ]).then(axios.spread((res1,res2) => {
//     console.log(res1)
//     console.log(res2)
// }));

/** 4.创建axios的实例 */
// const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/v1',
//     timeout: 5000
// });
// instance1({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res)
// });

//5.封装request模块
import {request} from "./network/request";

// request({
//     url:"/home/multidata"
// },res =>{
//     console.log(res)
// },err => {
//     console.log(err)
// });

request({
    url:"/home/multidata"
}).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
});

var name = "小白";
var obj = {
    name: "小红"
};

function sayName() {
    return this.name;
}
console.log(sayName.call(this));   //小白
console.log(sayName.call(obj));    //小红

