import { h } from 'preact';
import { useReducer } from 'preact/hooks';
import { ActionModel } from '../types/Models';
import { StateType } from '../types/StateType';
import GameContext from './GameContext';
import { initialState } from './initialState';
import reducer from './reducer';

const Provider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = useReducer<StateType, ActionModel>(reducer, initialState);

  const providerState = {
    ...state,
    dispatch,
  };

  return <GameContext.Provider value={providerState}>{children}</GameContext.Provider>;
};

export default Provider;
