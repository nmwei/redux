/**
 * Created by nmw on 2017/3/23.
 */

import {combineReducers} from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    FILTER_TODO,
    FILTER_TYPE
} from './actions';
const {SHOW_ALL} = FILTER_TYPE;
/*
 * state的数据类型
 * {
 *    filter: 'SHOW_ALL'/'SHOW_COMPLETED'/'SHOW_ACTIVE',
 *    todos: [
 *              {
 *                  text: "",
 *                  completed: false / true
 *              }
 *              ...
 *           ]
 * }
 */

function filter(filter=SHOW_ALL, action) {
    switch (action.type) {
        case FILTER_TODO:
            return action.filter
        default:
            return filter
    }
}

function todos(todos=[], action) { //生成新对象，而不修改原对象
    switch (action.type) {
        case ADD_TODO:
            debugger;
            return [
                ...todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return [
                ...todos.slice(0, action.index),
                Object.assign({}, todos[action.index],{
                    completed: !todos[action.index].completed
                }),
                ...todos.slice(action.index + 1),
            ]
        default:
            return todos
    }
}

const todoApp = combineReducers({
    todos,
    filter
})

export default todoApp;