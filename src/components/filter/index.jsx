import React from 'react';
import { Input, Menu } from 'semantic-ui-react'



const Filter = ({ setFilter, filterBy }) => (
    <Menu secondary>
        <Menu.Item  active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')} >
            Все
        </Menu.Item>
        <Menu.Item  active={filterBy === 'price_high'} onClick={setFilter.bind(this, 'price_high')} >
            Цена (дорогие)
        </Menu.Item>
        <Menu.Item  active={filterBy === 'price_low'} onClick={setFilter.bind(this, 'price_low')} >
            Цена (дешевые)
        </Menu.Item>
        <Menu.Item  active={filterBy === 'name'} onClick={setFilter.bind(this, 'name')} >
            Название
        </Menu.Item>
    </Menu>


);


export default Filter