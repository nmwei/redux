/**
 * Created by nmw on 2017/3/24.
 */
import {connect} from 'react-redux';
import Footer from '../components/Footer';
import {filterTodo} from '../actions'

const mapStateToProps = (state, ownProps) => ({
    filter: state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
   onClick: (filter)=>{
        dispatch(filterTodo(filter))
   }
})

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
export default FooterContainer;