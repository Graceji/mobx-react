import React, { Component } from 'react';
import Input from './input';

export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <Input />
        <Input />
      </div>
    );
  }
}