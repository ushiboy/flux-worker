import { UPDATE_COUNTER } from './constants';

const state = {
  count: 0
};

onmessage = evt => {
  const action = evt.data;
  postMessage({ state: store(state, action) });
  //const action = JSON.parse(evt.data);
  //postMessage(JSON.stringify({ state: store(state, action) }));
};

function store(state, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_COUNTER:
      return updateCounter(state, payload);
    default:
      return state;
  }
}

function updateCounter(state, payload) {
  state.count += payload.value;
  return state;
}

// initialzie
postMessage({ state: store(state) });
