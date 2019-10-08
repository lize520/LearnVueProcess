import axios from 'axios'

// export function request(config,success,failure) {
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000/api/v1',
//         timeout: 5000
//     });
//
//     //2.发送真正的网络请求
//     instance(config).then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }

//自己封装promise
// export function request(config) {
//     return new Promise((resolve,reject) => {
//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000/api/v1',
//             timeout: 5000
//         });
//
//         //2.发送真正的网络请求
//         instance(config).then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

//instance就是一个promise对象
export function request(config) {
        //1.创建axios的实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000/api/v1',
            timeout: 5000
        });

        //2.发送真正的网络请求
       return instance(config)

}
