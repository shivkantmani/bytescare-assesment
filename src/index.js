import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


// 5. Add additional custom code here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
