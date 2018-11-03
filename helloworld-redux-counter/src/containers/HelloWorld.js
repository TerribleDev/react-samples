import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'
import * as moment from 'moment';


export const mapStateToProps = (state) => {
    let daysUntilBirthday = moment
    .duration(moment('2020-01-01')
    .diff(moment()))
    .days()
    return {
        message: `${state.get('message')} - You have ${daysUntilBirthday} days until your birthday!`
    }
}

export default connect(
    mapStateToProps,
)(HelloWorld);