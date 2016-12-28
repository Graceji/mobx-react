import { observable, action, computed } from 'mobx';

class TodoModel {
  id;
  @observable completed = false;
  @observable title;

  
}

export default TodoModel;