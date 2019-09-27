import VueRouter from 'vue-router'
import Vue from 'vue'

// import about from '../components/about'
// import home from '../components/home'
// import user from '../components/user'
//懒加载的方式
const home = () => import('../components/home');
const about = () => import('../components/about');
const user = () => import('../components/user');
const news = () => import('../components/news');
const message = () => import('../components/message');
const profile = () => import('../components/profile');
//安装插件
Vue.use(VueRouter);

const routes = [
    {
        path:'/home',
        meta:{
          title:'首页'
        },
        component: home,
        children:[
            {path:'',redirect: 'news'},
            {path:'news',component:news},
            {path:'message',component:message},
        ]
    },
    {
        path:'/about',component:about,
        meta:{
            title:'关于'
        },
    },
    {
        path:'/user/:id',component:user,
        meta:{
            title:'用户'
        },
    },
    {
        path:'/profile',component:profile,
        meta:{
            title:'我的'
    },
    },
    //redirect：重定向
    {path:'',redirect:'/home'}
];

const router = new VueRouter({
    mode:'history',
    linkActiveClass:'active',
    routes
});

// router.beforeEach((to,from,next) =>{
//     document.title = to.matched[0].meta.title;
//     console.log('+++++++')
//     next()
// });
// router.afterEach((to,from) =>{
//     console.log(('....'));
// });


export default router
