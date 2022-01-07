// action types
export const UPDATE_DOG = 'UPDATE_DOG';
export const CREATE_DOG = 'CREATE_DOG';
export const DELETE_DOG = 'DELETE_DOG';

// action creators
export const updateDog = (updatedDog) => ({
    type: UPDATE_DOG,
    payload: updatedDog,
});

export const createDog = (newDog) => ({
    type: CREATE_DOG,
    payload: newDog
});

export const deleteDog = (name) => ({
    type: DELETE_DOG,
    payload: name
});