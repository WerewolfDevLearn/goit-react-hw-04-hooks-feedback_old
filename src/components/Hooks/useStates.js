import { useState } from 'react';

export default function useStates(defaulValue) {
  const [state, setState] = useState(defaulValue);
  const updateState = () => setState(s => s + 1);
  return [state, updateState];
}
//   console.log('State from useStates', state);
//   console.log('updateState from useStates', updateState);
