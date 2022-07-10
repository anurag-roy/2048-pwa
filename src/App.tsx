import { h } from 'preact';
import './App.css';

import Board from './components/Board';
import BoardSizePicker from './components/BoardSizePicker';
import Header from './components/Header';
import Info from './components/Info';
import { animationDuration, gridGap } from './config';

const App = () => {
  return (
    <div
      className="app"
      style={{
        '--animation-duration': animationDuration + 'ms',
        '--grid-gap': gridGap,
      }}
    >
      <div className="page">
        <Header />
        <Board />
        <BoardSizePicker />
        <Info />
      </div>
    </div>
  );
};

export default App;
