import EventEmitter from './event';

export default class Store extends EventEmitter {

  constructor(dispatcher) {
    super();
    this.count = 0;
    dispatcher.on('updateCounter', this.onChangeCount.bind(this));
  }

  getState() {
    return {
      count: this.count
    };
  }

  onChangeCount(payload) {
    this.count = this.count + payload.value;
    this.emit('change');
  }
}
