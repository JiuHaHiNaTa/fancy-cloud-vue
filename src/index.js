import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import VueRouter from 'vue-router'
import App from './App.vue' // 引入 APP 页面组建
import Login from './views/login/login.vue'

const routes = [
    { path: '/', component: Login },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
  


const app = createApp(App) // 通过 createApp 初始化 app
app.use(router)
app.mount('#app') 