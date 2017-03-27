/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';  //添加一项
export const COMPLETE_TODO = 'COMPLETE_TODO'; //完成一项
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'; //过滤

/*
 * 其它的常量(过滤事件类型的参数)
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL', //全部项
    SHOW_COMPLETED: 'SHOW_COMPLETED', //已完成
    SHOW_ACTIVE: 'SHOW_ACTIVE' //未完成
};

/*
 * action 创建函数
 */

//ADD_TODO时，传text参数
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

//COMPLETE_TODO时，传index参数
export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

//SET_VISIBILITY_FILTER时，传filter参数
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}