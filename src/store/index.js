import Vue from 'vue'
import Vuex from 'vuex'
//为了让index的内容清晰，抽离关键字
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'
import moduleA from './modules/moduleA'

//1.使用插件
Vue.use(Vuex);



//2.创建对象
const store = new Vuex.Store({
    state:state,
    mutations:mutations,
    actions:actions,
    getters:getters,
    modules:{
        a:moduleA
    }
});
//到出store
export default store
