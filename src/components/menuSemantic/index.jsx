import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuSemantic = () => (
    <Menu>
        <Menu.Item name='browse' >
            Магазин телефонов
        </Menu.Item>
        <Menu.Menu position='right'>
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