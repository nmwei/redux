/**
 * Created by nmw on 2017/3/23.
 */

import {combineReducers} from 'redux'
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const {SHOW_ALL} = VisibilityFilters; //解构赋值

/*
* state的数据类型
 * {
 *    visibilityFilter: 'SHOW_ALL'/'SHOW_COMPLETED'/'SHOW_ACTIVE',
 *    todos: [
 *              {
 *                  text: "",
 *                  completed: false / true
 *              }
 *              ...
 *           ]
 * }
*/

//visibilityFilter默认值为SHOW_ALL
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//todos默认值为空数组[]
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            //...扩展运算符可以用于数组
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})
export default todoApp
