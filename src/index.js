import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Provider } from 'react-redux';
import createStore from './store'

import App from './containers/app/index';


const store = createStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));







