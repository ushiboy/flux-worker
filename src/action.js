import { UPDATE_COUNTER } from './constants';

export default class ActionCreator {

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  plusCounter() {
    this.dispatcher.emit(UPDATE_COUNTER, {
      value: 1
    });
  }

  minusCounter() {
    this.dispatcher.emit(UPDATE_COUNTER, {
      value: -1
    });
  }

}
