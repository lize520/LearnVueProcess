export default {
    //context上下文
    changeInfo(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updateInfo');
                console.log(payload.message);
                resolve('我是李百万')
            },1000)
        })
    }
}
