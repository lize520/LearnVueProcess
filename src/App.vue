<template>
    <div id="app">
        <h2>{{$store.state.a.name}}</h2>

        <h2>{{$store.state.info}}</h2>
        <button @click="changeInfo">修改info信息</button>

        <div>{{$store.state.counter}}</div>
        <div>{{$store.getters.powerState}}</div>
        <div>{{$store.getters.more20stu}}</div>
        <button @click="add(5)">+5</button>
        <button @click="sub">-</button>
        <hello-world></hello-world>
    </div>
</template>

<script>
    import HelloWorld from './components/helloWorld'
    export default {
        name: 'app',
        data(){
            return {

            }
        },
        components:{
            HelloWorld
        },
        methods:{
            add(count){
                //1.普通的提交方式
                // this.$store.commit('increment',count)
                //2.特殊的提交方式
                this.$store.commit({
                    type:'increment',
                    count
                })
            },
            sub(){
                this.$store.commit('decrement',2)
            },
            changeInfo(){
                //
                // this.$store.commit('updateInfo')
                //调用action方法
                // this.$store.dispatch('changeInfo',{
                //     message:'不给带麻辣鸡',
                //     success:()=>{
                //         console.log('给带了香肠')
                //     }
                // })

                this.$store.dispatch('changeInfo','不给带麻辣鸡').then(res => {
                    console.log(res);
                })
            }

        }



    }
</script>

<style>

</style>
