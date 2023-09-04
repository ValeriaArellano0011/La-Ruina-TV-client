import './styles/root.css';
import './styles/player.css';
import './styles/globals.css';
import React from 'react';
import store from './middlewares/redux/store';
import Router from './app/router/router';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { $gId } from './functions';


const root = ReactDOM.createRoot($gId('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
);
