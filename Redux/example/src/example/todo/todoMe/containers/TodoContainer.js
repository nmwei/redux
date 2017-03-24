/**
 * Created by nmw on 2017/3/24.
 */
import { connect } from 'react-redux'
import Todo from '../components/Todo'

const mapStateToProps = (state, ownProps) => ({
    onClick: ownProps.onClick,
    text:ownProps.text,
    completed: ownProps.completed
});


const TodoContainer = connect(
    mapStateToProps
)(Todo);

export default TodoContainer


