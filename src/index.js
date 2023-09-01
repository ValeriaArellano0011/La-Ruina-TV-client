import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './middlewares/redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { $gId } from './functions';


const root = ReactDOM.createRoot($gId('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
);
