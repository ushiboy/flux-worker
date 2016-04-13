import React from 'react';

export default class Counter extends React.Component {

  render() {
    const { count, onClickPlus, onClickMinus } = this.props;
    return (
      <div>
        <div>{count}</div>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </div>
    );
  }

}
