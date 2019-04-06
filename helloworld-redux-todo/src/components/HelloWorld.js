import React, { PureComponent } from 'react';
import Checkbox from './Checkbox';

export default class HelloWorld extends PureComponent {
  render(){
    let boxes = this.props.todoItems && this.props.todoItems.slice(0, this.props.showX).map(i => {
      return <Checkbox key={`${i.get('id')}-${i.get('name')}`} onFireEvnt={this.props.onCheckboxClick} checked={i.get('checked')} name={i.get('name')} itemId={i.get('id')}  /> ;
    })
    return (
      <div class="main-content-wrap">
        <select value={this.props.order} onChange={this.props.sortChanged}>
          <option value="1">Asc</option>
          <option value="0">Dec</option>
        </select>
        <h2>Hello React</h2>
        <div>
        <label>Show Last <input type="number" value={this.props.showX} onChange={(evnt) => {this.props.onShowChange(evnt.target.value)}} /></label>
        
        </div>
        {boxes}
      </div>
      
    )
  }
}