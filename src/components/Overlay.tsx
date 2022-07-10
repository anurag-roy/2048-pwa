import { h } from 'preact';
import { useCallback } from 'preact/hooks';

import { dismissAction, resetAction } from '../actions';
import { useGameContext } from '../state/GameContext';

const Overlay = () => {
  const { defeat, victory, victoryDismissed, dispatch } = useGameContext();
  const reset = useCallback(() => dispatch(resetAction()), [dispatch]);
  const dismiss = useCallback(() => dispatch(dismissAction()), [dispatch]);

  if (victory && !victoryDismissed) {
    return (
      <div className="overlay overlay-victory">
        <h1>You win!</h1>
        <div className="overlay-buttons">
          <button onClick={dismiss}>Keep going</button>
          <button onClick={reset}>Try again</button>
        </div>
      </div>
    );
  }

  if (defeat) {
    return (
      <div className="overlay overlay-defeat">
        <h1>Game over!</h1>
        <div className="overlay-buttons">
          <button onClick={reset}>Try again</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Overlay;
