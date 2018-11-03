import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'
import { toggleItem, changeSort} from '../actions/check.js';
import { computeDropoffs, stateItemsWithChecked, stateOrder} from '../selectors/todoSelector';
export const mapStateToProps = (state) => {
    let before = performance.now();
    // let todoItems = state.get('todoItems').sort(
    //     (a, b) => 
    //         state.get('order') > 0 ? a.get('name').localeCompare(b.get('name'))
    //         : b.get('name').localeCompare(a.get('name'))
    //         )
    //         .map(i => i.set("checked", state.get('checked').get(i.get("id").toString())));

    let todoItems = stateItemsWithChecked(state);
    let res = 
     {
        todoItems,

        order: stateOrder(state)
    }
    let after = performance.now();
    console.log(`took ${after - before}ms`)
    return res;
};

export const mapDispatchToProps = dispatch => ({
    onCheckboxClick: (id)=>{
        dispatch(toggleItem(id));
    },
    sortChanged: (event) => {
        dispatch(changeSort(event.target.value));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HelloWorld);