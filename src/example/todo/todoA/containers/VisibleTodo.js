/**
 * Created by nmw on 2017/3/24.
 */
import {connect} from 'react-redux'
import Todo from '../components/Todo'

const mapStateToProps =(state, ownProps) => ({
    completed: ownProps.completed,
    text: ownProps.text,
    onClick: ownProps.onClick
});

const VisibleTodo = connect(
    mapStateToProps
)(Todo);

export default VisibleTodo

