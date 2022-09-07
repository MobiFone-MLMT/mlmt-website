import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dasboard from './dashboard/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dasboard />
  </React.StrictMode>
);

