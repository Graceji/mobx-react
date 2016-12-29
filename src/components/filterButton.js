import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('todoStore') @observer
export default class FilterButton extends Component {
  handClick() {
    const { todoStore, type } = this.props;
    todoStore.filter = type;
  }

  render() {
    return (
      <button style={{marginLeft: '10px'}} onClick={this.handClick.bind(this)}>
        {this.props.type}
      </button>
    );
  }
}