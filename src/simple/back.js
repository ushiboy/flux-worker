function store(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_COUNT':
      return updateCount(state, payload);
    default:
      return state;
  }
}

function updateCount(state, payload) {
  const { value } = payload;
  state.count += value;
  return state;
}

const state = {
  count: 0
};

onmessage = evt => {
  postMessage(store(state, evt.data));
};
// initialize
postMessage(state);
