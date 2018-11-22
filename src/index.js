import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './modules/containers/layout/index';
import * as serviceWorker from './serviceWorker';

//import {Router, Route, browserHistory} from 'react-router'



ReactDOM.render(
   <Layout />,
    document.getElementById('root'));

serviceWorker.unregister();
