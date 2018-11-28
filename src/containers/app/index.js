import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';

import { setPhones } from '../../actions/phones';

import {Lines} from 'react-preloaders';
import PersistenDrawerLeft from '../../components/persistenDrawerLeft';



class App extends Component {
  render() {

    const { phones } = this.props.phones; // reducers -> state
    const { setPhones } = this.props; // props
    const newPhones = [
        {
          id: 0,
          title: 'Iphone 6S'
        }
    ];

    return (
      <div className="App">
        <Lines time={1000} />
        <PersistenDrawerLeft />
          <div style={{backgroundImage: "url('https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg')", width: '200px', height: '200px', backgroundColor: 'red'}} >
              Hello !!!
          </div>
        <div>
          <h1>{ phones[0].title }</h1>
          <button onClick={setPhones.bind(this, newPhones)}>Set new Phones</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
  setPhones: phones => dispatch(setPhones(phones))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
