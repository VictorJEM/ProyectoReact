import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import FormContext from './context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FormContext>
);
