import React from 'react';
import { render } from 'react-dom';
import ActionCreator from './action';
import Store from './store';
import EventEmitter from './event';
import Counter from './components/Counter';

const dispatcher = new EventEmitter();
const action = new ActionCreator(dispatcher);
const store = new Store(dispatcher);

class App extends React.Component {

  constructor(props) {
    super(props);
    const { store } = props;
    this.state = { count: store.getCount() };

    store.on('change', this._onChange.bind(this));
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

  _onChange() {
    const { store } = this.props;
    this.setState(store.getState());
  }

}

render(
  <App action={action} store={store} />,
  document.getElementById('app')
);
