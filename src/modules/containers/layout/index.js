import React, { Component } from 'react';
import logo from '../../../logo.svg';
import './index.scss';

import {Lines} from 'react-preloaders';


class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Lines time={3000} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p><h1 className="hello">Hello React !!!</h1></p>
        </header>
      </div>
    );
  }
}

export default Layout;
