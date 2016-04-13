import React from 'react';
import Counter from './components/Counter';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const { store } = props;
    this.state = store.getState();

    store.on('change', () => {
      this.setState(store.getState());
    });
  }

  render() {
    const { count } = this.state;
    return (
      <Counter count={count}
        onClickMinus={this.handleMinus.bind(this)}
        onClickPlus={this.handlePlus.bind(this)} />
    );
  }

  handlePlus() {
    this.props.action.plusCounter();
  }

  handleMinus() {
    this.props.action.minusCounter();
  }

}
