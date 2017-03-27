/**
 * Created by nmw on 2017/3/23.
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FILTER_TODO = 'FILTER_TODO'

export const FILTER_TYPE = {
    SHOW_ALL :'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}

export function addTodo(text) {
    return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
    return {type:TOGGLE_TODO, index}
}

export function filterTodo(filter) {
    return {type:FILTER_TODO, filter}
}
