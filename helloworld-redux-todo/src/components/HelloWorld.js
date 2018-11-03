import React, { PureComponent } from 'react';
import Checkbox from './Checkbox';

export default class HelloWorld extends PureComponent {
  render(){
    let boxes = this.props.todoItems && this.props.todoItems.map(i => {
      return <Checkbox key={`${i.get('id')}-${i.get('name')}`} onFireEvnt={this.props.onCheckboxClick} checked={i.get('checked')} name={i.get('name')} itemId={i.get('id')}  /> ;
    })
    return (
      <div>
        <h2>Hello React <small>dropoffs: {this.props.todoItemsWithDropoff}</small></h2>
        {boxes}
      </div>
    )
  }
}