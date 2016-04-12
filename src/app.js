import React from 'react';
import { render } from 'react-dom';
import ActionCreator from './action';
import Store from './store';
import EventEmitter from './event';

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
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.plus.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    );
  }

  plus() {
    this.props.action.plusCounter();
  }

  minus() {
    this.props.action.minusCounter();
  }

  _onChange() {
    const { store } = this.props;
    this.setState({
      count: store.getCount()
    });
  }

}

render(
  <App action={action} store={store} />,
  document.getElementById('app')
);
