import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// 1. 导入路由组件
const demo = import(/* webpackChunkName: "demo" */ '../views/demo/demo.vue')
const Login = import(/* webpackChunkName: "group-user" */ '../views/login/login.vue')
const Home = import(/* webpackChunkName: "group-user" */ '../views/home/home.vue')
const NotFound = import(/* webpackChunkName: "404" */ '../views/404/notfound.vue')
const Index = import(/* webpackChunkName: "index" */ '../views/index/index.vue')

// 2. 定义一些路由
const routes = [{
    path: '/',
    name: 'index',
    component: () => Index,
    alias: '/index',
    meta: {
        requiresAuth: false
    }
}, {
    path: '/demo',
    name: 'demo',
    component: () => demo,
    meta: {
        requiresAuth: false
    }
}, {
    path: '/login',
    name: 'login',
    component: () => Login,
    meta: {
        requiresAuth: false
    }
}, {
    //使用*号匹配props获得是一个数组值，？返回时单个值
    path: '/home/:username?',
    name: 'home',
    component: () => Home,
    props: true,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => NotFound
}]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    // `routes: routes` 的缩写
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    }
});

//全局前置导航守卫
router.beforeEach((to, from) => {
    console.log('全局前置导航守卫')
    if (to.meta.requiresAuth) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: {
                redirect: to.fullPath
            },
        }
    }
    // 返回 false 以取消导航
    return true;
})
//全局前置解析守卫
router.beforeResolve(() => {
    console.log('全局前置解析守卫')
    // 返回 false 以取消导航
    return true;
})
//全局后置导航守卫  navigation failures 作为第三个参数
router.afterEach((to, from, failure) => {
    console.log('全局后置导航守卫' + '  failure:' + failure)
})


export default router