import { UPDATE_COUNTER } from './constants';

const state = {
  count: 0
};

onmessage = evt => {
  const action = JSON.parse(evt.data);
  console.log(action);
  postMessage(JSON.stringify({ state: store(state, action) }));
};

function store(state, action) {
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
