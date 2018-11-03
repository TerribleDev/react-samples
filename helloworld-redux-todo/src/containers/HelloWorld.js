import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'
import { toggleItem } from '../actions/check.js';
import { computeDropoffs, stateItemsWithChecked } from '../selectors/todoSelector';
export const mapStateToProps = (state) => {
    console.log('hit');
    // let todoItems = state.get('todoItems').toList().map(i => i.set('checked', state.getIn(['checked', i.get('id').toString()])));
    // let todoItemsWithDropoff = state.get('todoItems').map(i=>i.get('name')).reduce((accum, item)=>{
    //     if(item.includes('dropoff'))
    //     {
    //         return accum + 1;
    //     }
    //     return accum;
    // }, 0)
    let todoItemsWithDropoff = computeDropoffs(state);
    let todoItems = stateItemsWithChecked(state);
    let duplicateItemCount = 
     {
        todoItems,
        todoItemsWithDropoff
    }
    return duplicateItemCount;
};

export const mapDispatchToProps = dispatch => ({
    onCheckboxClick: (id)=>{
        dispatch(toggleItem(id));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HelloWorld);