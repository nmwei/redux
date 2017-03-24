/**
 * Created by nmw on 2017/3/24.
 */
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'


const getVisitbleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            //ES5中的filter方法和ES6中的箭头函数结合
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisitbleTodos(state.todos, state.filter)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (index) => dispatch(toggleTodo(index))
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer;
