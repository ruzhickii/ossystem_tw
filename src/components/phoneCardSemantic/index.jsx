import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const PhoneCardSemantic =  phone  => {
    const { name, description, price, image, addToBasket, addedCount } = phone;

    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='dollar' />
                    {price}
                </a>
            </Card.Content>
            <Button onClick={ addToBasket.bind(this, phone) } >Добавить в корзину { addedCount > 0 && `(${addedCount})` }</Button>
        </Card>
    );
};



export default PhoneCardSemantic