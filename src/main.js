import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import './css/main.css';
import Root from './components/root';
import TodoStore from './store/todoStore';

const initialStore = window.initialStore || {};
const todoStore = TodoStore.fromJS(initialStore.todos || []);

render(
  <Provider todoStore={todoStore}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
