import React, { Component } from 'react';
import './index.scss';
import axios from 'axios';

import {Lines} from 'react-preloaders';
import PhoneCard from '../../containers/phoneCardSemantic';
import Filter from '../../containers/filter';
import Menu from '../../containers/menuSemantic';

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
                <Filter />
                <Card.Group itemsPerRow={3}>
                    {!isReady ? 'загрузка' : phones.map((phone, i) =>  <PhoneCard key={i} {...phone} /> )}
                </Card.Group>
            </Container>
        );
    }
}

export default App;
