import React, { Component } from 'react';
import logo from '../../logo.png';
import './index.scss';

export default class Logo extends Component {
    render() {
        return(
            <div className="wrapper-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
        )
    }
}
