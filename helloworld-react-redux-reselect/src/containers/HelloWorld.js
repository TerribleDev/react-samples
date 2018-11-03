import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'
import { computeHelloWorldMessage, getClicks } from '../selectors/main';
import { incrementCount } from '../actions/counter.js';


export const mapStateToProps = (state) => {
    return {
        message: computeHelloWorldMessage(state), 
        clicks: getClicks(state)
    }
}

export const mapDispatchToProps = dispatch => ({
    incrementClick: ()=>dispatch(incrementCount()) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HelloWorld);