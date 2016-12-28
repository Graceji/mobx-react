import { observable, action, computed } from 'mobx';
import TodoModel from './todoModel';

class TodoStore {
  @observable todos = [];

}

const todoStore = new TodoStore;
export default todoStore;