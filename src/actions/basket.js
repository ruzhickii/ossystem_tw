export const addToBasket = obj => ({
    type: 'ADD_TO_BASKET',
    payload: obj
});

export const removeFromBasket = id => ({
    type: 'REMOVE_FROM_BASKET',
    payload: id
});