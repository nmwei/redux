/**
 * Created by nmw on 2017/3/24.
 */
import React from 'react';
import Todo from '../containers/TodoContainer';

const TodoList = ({todos, onClick}) => {
    return (
        <ul>
            {todos.map((todo,index) =>
                <Todo
                    key={index}
                    onClick={() => onClick(index)}
                    {...todo}
                />
            )}
        </ul>

    )
}
export default TodoList
