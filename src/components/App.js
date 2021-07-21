import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '0',
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  render() {
    const { next } = this.state;
    return (
      <>
        <Display result={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
