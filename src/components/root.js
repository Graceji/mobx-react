import React, { Component } from 'react';
import Input from './input';
import TodoList from './todoList';
import { inject, observer } from 'mobx-react';
import TodoFooter from './todoFooter';
import TodoInput from './todoInput';

@inject('todoStore') @observer
export default class Root extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { todoStore } = this.props;
    todoStore.filter = e.target.value;
  }

  handleClick() {
    const { todoStore } = this.props;
    todoStore.removeCompleted();
  }

  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <h1>Todos</h1>
        <TodoInput todoStore={todoStore} />
        <TodoList todoStore={todoStore} />
        <TodoFooter todoStore={todoStore} />
      </div>
    );
  }
}