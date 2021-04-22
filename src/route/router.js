import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// 1. 导入路由组件
const demo = import('../views/demo/demo.vue')
const Login = import('../views/login/login.vue')
const App = import('../App.vue')

// 2. 定义一些路由
const routes = [{
    path: '/',
    name: 'index',
    component: () => App,
    children: [{
            path: '/demo',
            name: 'demo',
            component: () => demo
        }, {
            path: '/login',
            name: 'login',
            component: () => Login
        }

    ]
}, {
    path: '/demo',
    name: 'demo',
    component: () => demo
}, {
    path: '/login',
    name: 'login',
    component: () => Login
}]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    // `routes: routes` 的缩写
    routes
});


export default router