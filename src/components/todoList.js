import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoItem from './todoItem';
import { ALL_TODO, ACTIVE_TODO, COMPLETED_TODO } from '../constants/filter';

@observer
export default class TodoList extends Component {

  getVisibleTodos() {
    const { todoStore } = this.props;
    const { todos } = todoStore;
    return todos.filter(todo => {
      switch(todoStore.filter) {
        case ALL_TODO :
          return true;
        case ACTIVE_TODO: 
          return !todo.completed;
        case COMPLETED_TODO:
          return todo.completed;
        default:
          return true;
      }
    });
  }

  render() {
    console.log(this.getVisibleTodos());
    return (
      <ul>
        {
          this.getVisibleTodos().map(todo =>
            (<TodoItem
              key={todo.id}
              todo={todo}
            />))
        }
      </ul>
    );
  }
}