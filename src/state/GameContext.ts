import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { ActionModel } from "../types/Models";
import { StateType } from "../types/StateType";

export interface ProviderStateType extends StateType {
  dispatch: (action: ActionModel) => void;
}

const GameContext = createContext<ProviderStateType>({} as ProviderStateType);

export const useGameContext = () => useContext(GameContext);

export default GameContext;
