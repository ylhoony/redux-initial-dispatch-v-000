let state;

function changeState(state = { count: 0 }, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }

    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

function render() {
  // document.innerHTML = state.count
  console.log(state.count);
}

dispatch({ type: '@@INIT' })
dispatch({ type: 'INCREASE_COUNT' })
// dispatch({ type: '@@INIT' })
