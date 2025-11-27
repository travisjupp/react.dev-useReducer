import { useState } from 'react';
// Implement useReducer from scratch
export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  // Create dispatch from scratch
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState({
      ...nextState,
    })
  }

  // More accurate dispatch implementation.
  // This is because the dispatched actions are 
  // queued until the next render, similar to the
  // **updater functions**. 
  // See: https://react.dev/learn/queueing-a-series-of-state-updates
  // Also see: ./dispatch.md
  function dispatch(action) {
    setState((s) => reducer(s, action));
  }

  return [state, dispatch];
}
