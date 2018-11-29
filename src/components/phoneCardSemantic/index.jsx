import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const PhoneCardSemantic = ({name, description, price, image}) => (
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
    </Card>
);

export default PhoneCardSemantic