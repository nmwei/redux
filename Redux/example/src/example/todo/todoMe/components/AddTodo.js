/**
 * Created by nmw on 2017/3/24.
 */
import React from 'react';

const AddTodo = ({onClick}) => {
    let input;
    const handlerClick = (e) => {
        const text = input.value.trim();
        onClick(text);
        input.value = '';
    }

    return (
        <div>
            <input type="text" ref={node=>{input = node}}/>
            <button onClick={(e)=> handlerClick(e)}>
                Add
            </button>
        </div>
    )
}
export default AddTodo

