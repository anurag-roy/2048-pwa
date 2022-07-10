import { h } from 'preact';
import { resetAction } from '../actions';

import { supportedBoardSizes } from '../config';
import { useGameContext } from '../state/GameContext';

const BoardSizePicker = () => {
  const { dispatch } = useGameContext();

  return (
    <div>
      <h2>Board size</h2>
      <div className="size-picker">
        {supportedBoardSizes.map((size) => (
          <button key={size} onClick={() => dispatch(resetAction(size))}>
            {size}x{size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardSizePicker;
