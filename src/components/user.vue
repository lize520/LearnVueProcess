<template>
    <div>
        <h2>我是用户界面</h2>
        <h3>{{userId}}</h3>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "user",
        computed:{
            userId() {
                return this.$route.params.id
            }
        },
        methods:{
            btnClick(){
              // console.log(this.$router);
              // console.log(this.$route);
            }
        }
    }
</script>

<style scoped>

</style>
