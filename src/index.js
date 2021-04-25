import {
  createApp
} from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
import router from './route/router'
import store from './store/index'

// 通过 createApp 初始化 app
const app = createApp(App)

//保证use和mount执行顺序
app.use(router)
app.use(store)
app.mount('#app')
//所有的导航，包括第一个导航，现在都是异步的，这意味着，如果你使用一个 transition，你可能需要等待路由 ready 好后再挂载程序 需要保证app.mount必须在use执行完之后执行
// router.isReady().then(() => app.mount('#app'))