import { defaultBoardSize } from "../config";
import { initializeBoard } from "../functions/board";
import { getStoredData } from "../functions/localStorage";
import { StateType } from "../types/StateType";

const storedData = getStoredData();

function initializeState(): StateType {
  const update = initializeBoard(defaultBoardSize);

  return {
    boardSize: storedData.boardSize || defaultBoardSize,
    board: storedData.board || update.board,
    defeat: storedData.defeat || false,
    victory: false,
    victoryDismissed: storedData.victoryDismissed || false,
    score: storedData.score || 0,
    best: storedData.best || 0,
    moveId: new Date().getTime().toString(),
  };
}
export const initialState: StateType = initializeState();
