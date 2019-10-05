export default {
    //方法
    increment (state,payload){
        state.counter+=payload.count
    },
    decrement (state,n){
        state.counter-=n
    },
    updateInfo(state){
        state.info.name = 'qianqian'
    }

}
