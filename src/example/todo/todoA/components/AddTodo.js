import React from 'react';

const AddTodo = ({onClick}) => {
    let input
    //ref的回调
    //https://facebook.github.io/react/docs/refs-and-the-dom.html
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                onClick(input.value)
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
export default AddTodo;