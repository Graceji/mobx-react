import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleChange() {
    this.props.todo.toggleComplete();
  }

  handleDestroy() {
    this.props.todo.destroy();
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          onChange={this.handleChange}
          checked={todo.completed}
        />
        <label htmlFor="">{todo.title}</label>
        <button className="destroy" onClick={this.handleDestroy}>X</button>
      </li>
    );
  }
}