<template>
    <div class="tabbar">
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="icon-item" src="~assets/img/tabbar/home.svg" alt="">
                <img slot="icon-item-active" src="~assets/img/tabbar/home_active.svg" alt="">
                <div slot="text-item">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="icon-item" src="~assets/img/tabbar/category.svg" alt="">
                <img slot="icon-item-active" src="~assets/img/tabbar/category_active.svg" alt="">
                <div slot="text-item">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img slot="icon-item" src="~assets/img/tabbar/shopcart.svg" alt="">
                <img slot="icon-item-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
                <div slot="text-item">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="icon-item" src="~assets/img/tabbar/profile.svg" alt="">
                <img slot="icon-item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
                <div slot="text-item">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>

    import TabBar from '../common/TabBar'
    import TabBarItem from '../common/TabBarItem'


    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>


</style>
