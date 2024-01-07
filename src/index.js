import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom' directly
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document. getElementById('root'));
root.render(
  <HouseContextProvider>
    
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </HouseContextProvider>
  
  
);
