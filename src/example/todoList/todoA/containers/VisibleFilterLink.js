/**
 * Created by nmw on 2017/3/23.
 */
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, ownProps) => {
    return {
        active : ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const VisibleFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)

export default VisibleFilterLink