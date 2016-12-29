import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FilterButton from './filterButton';
import { ALL_TODO, ACTIVE_TODO, COMPLETED_TODO } from '../constants/filter';

@observer
export default class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <FilterButton type={ALL_TODO} />
        <FilterButton type={ACTIVE_TODO} />
        <FilterButton type={COMPLETED_TODO} />
        <button 
          style={{textDecoration: "underline", marginTop: '20px', cursor: 'pointer'}}
          onClick={this.handleClick}
        >
          Clear Complete
        </button>
      </div>
    );
  }
}