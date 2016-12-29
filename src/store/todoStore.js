import mobx, { observable, action, computed } from 'mobx';
import TodoModel from '../model/todoModel';
import { ALL_TODO, ACTIVE_TODO, COMPLETED_TODO } from '../constants/filter';

export default class TodoStore {
  @observable todos = [];
  @observable filter = ALL_TODO;

  @computed get activeTodoCount() {
    return this.todos.length - this.completedCount;
  }

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }

  // @computed get filteredTodos() {
  //   const matchesFilter = new RegExp(this.filter, "i");
  //   return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title));
  // }
  @action addTodo(todo) {
    this.todos.push(new TodoModel(this, todo.id, todo.title, todo.completed));
    console.log(mobx.toJS(this.todos));
  }

  @action toggleAll(checked) {
    this.todos.forEach(todo => todo.completed = checked)
  }

  @action clearCompleted() {
    this.todos.replace(this.todos.filter(todo => !todo.completed));
  }

  @action removeCompleted() {
    this.todos.replace(this.todos.filter(todo => !todo.completed));
  }

  toJS() {
    return this.todos.map(todo => todo.toJS());
  }

  static fromJS(array) {
    const todoStore = new TodoStore();
    todoStore.todos = array.map(todo => TodoModel.fromJS(todoStore, todo));
    return todoStore;
  }
}

