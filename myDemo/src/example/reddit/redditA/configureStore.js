import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger' //提供createLogger生成器
import rootReducer from './reducers'


const createStoreWithMiddleware = applyMiddleware(
    thunk,          // 允许我们 dispatch() 传递函数
    createLogger()  // 一个很便捷的 middleware，用来打印 action 日志
)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}
