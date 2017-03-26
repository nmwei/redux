/**
 * Created by nmw on 2017/3/24.
 */
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo'
import {addTodo} from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (text) => {
        dispatch(addTodo(text))
    }
})

const AddTodoContainer = connect(
    null,
    mapDispatchToProps
)(AddTodo);
export default AddTodoContainer;
