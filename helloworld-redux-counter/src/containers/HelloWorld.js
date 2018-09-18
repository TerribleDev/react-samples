import { connect } from 'react-redux';
import { incrementCount } from '../actions/counter.js';
import HelloWorld from '../components/HelloWorld'
export const mapStateToProps = (state) => ({
    clicks: state.counter || 0
});

export const mapDispatchToProps = dispatch => ({
    incrementClick: ()=>dispatch(incrementCount()) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HelloWorld);