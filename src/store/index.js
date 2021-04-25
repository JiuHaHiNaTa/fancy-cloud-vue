import {
    createStore
} from 'vuex'


const store = createStore({
    state: () => {
        return {
            count: 0,
            todos: [{
                    id: 1,
                    text: '...',
                    done: true
                },
                {
                    id: 2,
                    text: '...',
                    done: false
                }
            ]
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state, n) {
            state.count += n
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    actions: {
        incrementAsync({
            commit
        }) {
            setTimeout(() => {
                commit('increment', 10)
            }, 1000)
        }
    }
})

export default store