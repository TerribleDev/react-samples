import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.onFireEvnt(this.props.itemId);
  }
  render() {
    let { itemId, checked, name } = this.props;
    const checboxId = `checkbox-${itemId}`;

    return (
      <div>
        <input
          id={checboxId}
          type="checkbox"
          name="todoItem"
          value={itemId}
          checked={!!checked}
          onChange={this.handleClick}
          readOnly
        />
        <label htmlFor={itemId}>{name}</label>
      </div>
    );
  }
}
