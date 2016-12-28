import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import '../css/main.css';
import Root from '../components/root';
import todoStore from '../store/todoStore';

const stores = {
  todoStore,
};

render(
  <Provider stores={stores}>
    <Root />
  </Provider>,
  document.getElementById('app')
);