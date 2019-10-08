<template>
    <div id="app">
        <div class="wrapper">
            <div class="content"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',



    }
</script>

<style>
    .wrapper {
        position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid red;
    }
    .content {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid green;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin:auto;
    }
    /*.wrapper {*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    /*}*/
</style>
