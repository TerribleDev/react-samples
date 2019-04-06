import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'
import { toggleItem, changeSort, showX} from '../actions/check.js';
import { computeDropoffs, stateItemsWithChecked, stateOrder} from '../selectors/todoSelector';
export const mapStateToProps = (state) => {
    let before = performance.now();

    const items = state.get("todoItems");
    const order = state.get("order");
    const stateChecked = state.get("checked")

    let itemsOrdered =  items.sort((a, b) => order > 0 ? a.get('name').localeCompare(b.get('name')): b.get('name').localeCompare(a.get('name')));
    let todoItems = itemsOrdered.map(i => i.set("checked", stateChecked.get(i.get("id").toString())))
    // let todoItems = stateItemsWithChecked(state);
    let res = 
     {
        todoItems,
        order: stateOrder(state),
        showX: state.get('showX')
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
    },
    onShowChange: (num) => dispatch(showX(num)) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HelloWorld);