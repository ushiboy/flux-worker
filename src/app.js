import React from 'react';
import { render } from 'react-dom';
import ActionCreator from './action';
import Store from './store';
import EventEmitter from './event';
import App from './container';

const dispatcher = new EventEmitter();
const action = new ActionCreator(dispatcher);
const store = new Store(dispatcher);

render(
  <App action={action} store={store} />,
  document.getElementById('app')
);
