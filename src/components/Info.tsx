import { h } from 'preact';

const Info = () => {
  return (
    <div className="info">
      <h2>About</h2>
      <p>
        This is a reimplementation of Gabriele Cirulli's excellent{' '}
        <a href="https://play2048.co/">2048</a> game, built with Preact.
      </p>
      <p>
        Developed by <a href="https://github.com/anurag-roy">Anurag Roy</a>. Source code available
        at <a href="https://github.com/anurag-roy/2048">anurag-roy/2048</a>.
      </p>
    </div>
  );
};

export default Info;
