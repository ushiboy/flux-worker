import EventEmitter from './event';

export default class Dispatcher extends EventEmitter {

  constructor(scriptPath) {
    super();
    this._worker = new Worker(scriptPath);
    this._worker.onmessage = evt => {
      // const { state } = JSON.parse(evt.data);
      const { state } = evt.data;
      /**
       * FIXME Dispatcherではなくなっているような..
       */
      this.emit('change', state);
    };
  }

  dispatch(action) {
    // this._worker.postMessage(JSON.stringify(action));
    this._worker.postMessage(action);
  }

}
