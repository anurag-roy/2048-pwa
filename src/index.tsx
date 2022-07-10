import { h } from 'preact';

import App from './App';
import Provider from './state/Provider';

export default function index() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
