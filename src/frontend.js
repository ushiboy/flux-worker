import React from 'react';
import { UPDATE_COUNTER } from './constants';
import { render } from 'react-dom';
import Counter from './components/Counter';
import Dispatcher from './dispatcher';

const dispatcher = new Dispatcher('./backend.js');

const action = {

  plusCounter() {
    dispatcher.dispatch({
      type: UPDATE_COUNTER,
      payload: {
        value: 1
      }
    });
  },

  minusCounter() {
    dispatcher.dispatch({
      type: UPDATE_COUNTER,
      payload: {
        value: -1
      }
    });
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);
    const { state, dispatcher } = props;
    this.state = state || { count: 0 };

    dispatcher.on('change', state => {
      this.setState(state);
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
render(
  <App action={action} dispatcher={dispatcher} />,
  document.getElementById('app')
);
