/**
 * Created by nmw on 2017/3/23.
 */
//这种写法参考react中函数式声明组件
//对于无状态的简单组件，使用函数式组件的方式声明，会使得代码的可读性更好，并且减少冗余代码的数目。
// 公式: View = f(props)
// http://www.tuicool.com/articles/2iiM3uj
import React, {PropTypes} from 'react'

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through':'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
