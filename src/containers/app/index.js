import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import axios from 'axios';

import { setPhones } from '../../actions/phones';

import {Lines} from 'react-preloaders';
import Menu from '../../components/menuSemantic';
import PhoneCard from '../../components/phoneCardSemantic';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';



class App extends Component {
    componentWillMount() {
        const { setPhones } = this.props;
        axios.get('/mockPhones.json').then(({ data }) => {
            setPhones(data);
        })
    }

    render() {
    const { phones, isReady } = this.props;

    return (
      <Container className="App">
        <Lines time={1000} />
          <Menu />
          <Card.Group itemsPerRow={3}>
              {!isReady ? 'загрузка' : phones.map((phone, i) =>  <PhoneCard key={i} {...phone} /> )}
          </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ phones }) => ({
    phones: phones.items,
    isReady: phones.isReady
});

const mapDispatchToProps = dispatch => ({
  setPhones: phones => dispatch(setPhones(phones))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
