import React from 'react';
import { render } from 'react-dom';

function Counter(props) {
  const { count, plus, minus } = props;
  return (
    <div>
      <div>{count}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.worker = props.worker;
    this.worker.onmessage = evt => {
      this.setState(evt.data);
    };
  }

  render() {
    const { count } = this.state;
    return (
      <Counter count={count}
        plus={this.handlePlus.bind(this)}
        minus={this.handleMinus.bind(this)} />
    );
  }

  handlePlus() {
    this.worker.postMessage({
      type: 'UPDATE_COUNT',
      payload: {
        value: 1
      }
    });
  }

  handleMinus() {
    this.worker.postMessage({
      type: 'UPDATE_COUNT',
      payload: {
        value: -1
      }
    });
  }

}

render(
  <App worker={new Worker('../scripts/simple/back.js')} />,
  document.getElementById('app')
);
