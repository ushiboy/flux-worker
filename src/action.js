export default class ActionCreator {

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  plusCounter() {
    this.dispatcher.emit('updateCounter', {
      value: 1
    });
  }

  minusCounter() {
    this.dispatcher.emit('updateCounter', {
      value: -1
    });
  }

}
