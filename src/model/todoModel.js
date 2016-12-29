import { observable, action, computed } from 'mobx';

class TodoModel {
  id;
  store;
  @observable completed;
  @observable title;
  constructor(store, id = 0, title, completed = false) {
    this.id = id;
    this.title = title;
    this.store = store;
    this.completed = completed;
  }

  @action toggleComplete() {
    this.completed = !this.completed;
  }
  
  @action destroy() {
    this.store.todos.remove(this);
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed
    };
  }

  static fromJS(store, obj) {
    return new TodoModel(store, obj.id, obj.title, obj.completed);
  }
}

export default TodoModel;