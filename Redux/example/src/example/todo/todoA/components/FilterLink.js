/**
 * Created by nmw on 2017/3/23.
 */
import React, {PropTypes} from 'react'

const Link = ({active, children, onClick}) => {
    //this.props 对象的属性与组件的属性一一对应。
    //this.props.children 属性例外，它表示组件的所有子节点
    if(active) {
        return <span>{children}</span>
    }

    return (
        //箭头函数 =>
        //左侧-无参数或多个参数时，()不能省略
        //右侧-无括号或者()表示返回值，且只能是值或表达式，{}表示执行语句，可以有多句。
        <a href="#"
           onClick={e =>{
               e.preventDefault()
               onClick()
           }}
        >
            {children}
        </a>
    )
}

//PropTypes.node-所有可以被渲染的对象：数字，字符串，DOM 元素或包含这些类型的数组。
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
