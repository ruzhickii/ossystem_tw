import React from 'react';
import { Menu } from 'semantic-ui-react';

import Logo from '../logo';

const MenuSemantic = () => (
    <Menu>
        <Menu.Item name='browse' >
            Магазин телефонов
        </Menu.Item>
        <Menu.Menu position='right'>
            <Logo />
            <Menu.Item name='signup'>
                Итого: &nbsp; <b>0</b> &nbsp; $
            </Menu.Item>

            <Menu.Item name='help'>
                Корзина (<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default MenuSemantic