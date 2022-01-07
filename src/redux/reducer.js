import { combineReducers } from 'redux';

import { UPDATE_DOG, CREATE_DOG, DELETE_DOG } from './actions';

const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_DOG:
            return state.map((dog) => {
                return dog.name === action.payload.name ? merge(dog, action.payload) : dog
            });
        case CREATE_DOG:
            return [...state, { ...action.payload }]
        case DELETE_DOG:
            const dogToDelete = state.find(d => d.name === action.payload);
            return state.filter(dog => dog !== dogToDelete);
        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    dogs: reducer
});

export default combinedReducer;