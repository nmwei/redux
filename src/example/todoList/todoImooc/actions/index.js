/**
 * Created by nmw on 2017/3/26.
 */
let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId,
    text
})

export const toggleTodo =(id) => ({
    type:'TOGGLE_TODO',
    id
})

export const setVisibility = (filter) =>({
    type:'SET_VISIBILITY',
    filter
})




