<template>
    <div id="app">
        <router-link to="/home" tag="button">首页</router-link>
        <router-link to="/about" tag="button">关于</router-link>
        <router-link :to="'/user/'+userId" tag="button">用户</router-link>
        <router-link :to="{path:'/profile',query:{name:'lize',age:18}}">档案</router-link>

        <!--<button @click="homeClick">首页</button>-->
        <!--<button @click="aboutClick">关于</button>-->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>

    export default {
        name: 'app',
        data(){
          return {
              userId:1
          }
        },
        methods:{
            homeClick(){
                //通过代码的方式修改路由
                this.$router.push('/home')
            },
            aboutClick(){
                this.$router.push('/about')
            }
        },

    }
</script>

<style>
    .active {
        color: red;
    }
</style>
