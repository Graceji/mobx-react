// import React, { Component } from 'react';
// import todoModel from '../store/todoModel';
// import { inject, observer } from 'mobx-react';

// @inject('stores') @observer
// export default class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.handlePress = this.handlePress.bind(this);
//   }

//   handlePress(e) {

//     const { todoStore } = this.props.stores;
//     let idArr;
//     let maxId = 0;

//     if (todoStore.todos.length) {
//       idArr = todoStore.todos.map(todo => todo.id);
//       maxId = idArr.reverse()[0];
//     }

//     if (e.which === 13) {
//       if (e.target.value) {
//         const nextTodo = new todoModel(maxId + 1, e.target.value, todoStore);
//         todoStore.addTodo(nextTodo);
//         e.target.value = "";
//       }
//     }
//   }

//   render() {
//     return (
//       <input
//         type="text"
//         onKeyPress={this.handlePress}
//       />
//     );
//   }
// }