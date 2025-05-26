import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * This is the entry point for my React app. I use ReactDOM to render my App component into the root div in index.html. I wrap it in StrictMode to help catch potential problems early.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
