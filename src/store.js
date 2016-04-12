import EventEmitter from './event';

export default class Store extends EventEmitter {

  constructor(dispatcher) {
    super();
    this.count = 0;
    dispatcher.on('plus', this.onChangeCount.bind(this));
    dispatcher.on('minus', this.onChangeCount.bind(this));
  }

  getCount() {
    return this.count;
  }

  onChangeCount(count) {
    this.count = count;
    this.emit('change');
  }
}
