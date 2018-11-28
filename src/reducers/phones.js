const initialState = {
    phones: [
        {
            id: 0,
            title: 'Hello World !!!'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PHONES':
            return {
                ...state,
                phones: action.payload
            };
        case 'ADD_PHONES':
            return {
                phones: {
                    ...state,
                    phones: [
                        ...state.phones,
                        action.payload
                    ]
                }
            };
        default:
            return state;
    }
}