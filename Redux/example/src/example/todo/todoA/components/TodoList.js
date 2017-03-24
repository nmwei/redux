/**
 * Created by nmw on 2017/3/23.
 */
import React, {PropTypes} from 'react'
import VisibleTodo from '../containers/VisibleTodo'


const TodoList =({todos, onClick}) => (
    <ul>
        {todos.map((todo,index) =>
            <VisibleTodo
                key={index}
                {...todo}
                onClick={()=>onClick(index)}
            />
        )}
    </ul>
)

//PropTypes.arrayOf 指定类型组成的数组
//PropTypes.shape 特定形状参数的对象
//http://www.myexception.cn/web/2016594.html
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onClick: PropTypes.func.isRequired
}

export default TodoList
