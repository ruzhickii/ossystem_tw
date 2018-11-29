const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PHONE':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
            };
        case 'REMOVE_PHONE':
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            };
            break;
        default:
            return state;
    }
}