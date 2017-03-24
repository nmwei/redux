/**
 * Created by nmw on 2017/3/23.
 */
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import  AddTodo from '../components/AddTodo'


const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (text) => {
        dispatch(addTodo(text))
    }
})

const VisibleAddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodo);

export default VisibleAddTodo;
