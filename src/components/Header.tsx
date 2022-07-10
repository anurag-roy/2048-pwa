import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import { resetAction, undoAction } from '../actions';
import { useGameContext } from '../state/GameContext';

const Header = () => {
  const { score, scoreIncrease, moveId, best, previousBoard, dispatch } = useGameContext();
  const reset = useCallback(() => dispatch(resetAction()), [dispatch]);
  const undo = useCallback(() => dispatch(undoAction()), [dispatch]);

  return (
    <div className="header">
      <div className="header-row">
        <h1>2048</h1>
        <div className="header-scores">
          <div className="header-scores-score">
            <div>Score</div>
            <div>{score}</div>
            {!!scoreIncrease && (
              <div className="header-scores-score-increase" key={moveId}>
                +{scoreIncrease}
              </div>
            )}
          </div>
          <div className="header-scores-score">
            <div>Best</div>
            <div>{best}</div>
          </div>
        </div>
      </div>
      <div className="header-row">
        <div>
          Join the numbers and get to the <strong>2048 tile!</strong>
        </div>
        <div className="header-buttons">
          <button onClick={undo} disabled={!previousBoard}>
            Undo
          </button>
          <button onClick={reset}>New game</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
