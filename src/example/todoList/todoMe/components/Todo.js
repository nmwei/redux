/**
 * Created by nmw on 2017/3/24.
 */
import React from 'react';
const Todo = ({onClick, text, completed}) => {
    debugger;
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                cursor: completed ? 'default' : 'pointer'
            }}
        >
            {text}
        </li>
    )
}
export default  Todo;