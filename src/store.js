import EventEmitter from './event';
import { UPDATE_COUNTER } from './constants';

export default class Store extends EventEmitter {

  constructor(dispatcher) {
    super();
    this._count = 0;
    dispatcher.on(UPDATE_COUNTER, this.onUpdateCounter.bind(this));
  }

  getState() {
    return {
      count: this._count
    };
  }

  onUpdateCounter(payload) {
    this._count = this._count + payload.value;
    this.emit('change');
  }
}
