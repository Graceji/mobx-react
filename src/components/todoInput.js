import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const checked = e.target.checked;
    this.props.todoStore.toggleAll(checked);
  }

  handleKeyDown(e) {
    if (e.which !== 13) {
      return;
    }

    const { todoStore } = this.props;
    let idArr;
    let maxId = 0;

    if (todoStore.todos.length) {
      idArr = todoStore.todos.map(todo => todo.id);
      maxId = idArr.reverse()[0];
    }

    if (this.textInput.value) {
      const todoStore = this.props.todoStore;
      const value = this.textInput.value;
      todoStore.addTodo({
        id: maxId + 1,
        title: value,
        completed: false
      });
      this.textInput.value = "";
    }
  }

  render() {
    const {todoStore} = this.props;
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleChange}
          checked={todoStore.activeTodoCount === 0}
        />
        <input
          type="text"
          onKeyDown={this.handleKeyDown}
          ref={(input) => this.textInput = input}
        />
      </div>
    );
  }
}