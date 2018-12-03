import React from 'react';
import Logo from '../logo';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const BasketComponent = ({ name, id, image, removeFromBasket }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromBasket.bind(this, id)} color="red">
                    Удалить
                </Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{name}</List.Content>
        </List.Item>
    </List>
);


const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item name="browse" /*onClick={this.handleItemClick}*/ >
            Магазин Телефонов
        </Menu.Item>
        <Logo />
        <Menu.Menu position="right">
            <Menu.Item name="signup" /*onClick={this.handleItemClick}*/ >
                Итого: &nbsp; <b>{totalPrice}</b>&nbsp;$.
            </Menu.Item>

            <Popup
                verticalOffset={10}
                trigger={
                    <Menu.Item name="help" /*onClick={this.handleItemClick}*/ >
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(phone => <BasketComponent {...phone} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;
