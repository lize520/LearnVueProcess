<template>
    <div>
        <h2>我是首页</h2>
        <router-link to="/home/news" tag="button">新闻</router-link>
        <router-link to="/home/message" tag="button">消息</router-link>

            <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                path:'/home/news'
            }
        },
        created(){
          console.log('home.created')
        },
        destroyed(){
            console.log('home.destroyed');
        },
        activated(){
            if(this.path !== '/home/news'){
                this.$router.push(this.path)
            }

        },
        deactivated(){

        },
        //组件内导航守卫
        beforeRouteLeave(to,from,next) {
            this.path = this.$route.path
            next()
        }
    }
</script>

<style scoped>

</style>
