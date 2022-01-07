import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createDog } from '../../redux/actions';

const CreateDog = () => {
    const [nameInput, setNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [breedInput, setbreedInput] = useState("");

    const dispatch = useDispatch();

    const handleInput = setter => e => {
        setter(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(createDog({
            name: nameInput,
            age: ageInput,
            breed: breedInput
        }));

        alert(`Created dog: ${nameInput}, ${ageInput}, ${breedInput}`);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Create a new dog!</h2>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name="name" placeholder='Enter a name' value={nameInput} onChange={handleInput(setNameInput)} required></input>
                <label htmlFor='age'>Age</label>
                <input type="text" id="age" name="age" placeholder='Enter an age' value={ageInput} onChange={handleInput(setAgeInput)} required></input> 
                <label htmlFor='breed'>Breed</label>
                <input type="text" id="breed" name="breed" placeholder='Enter a breed' value={breedInput} onChange={handleInput(setbreedInput)} required></input>
                <input type="submit" id="submit-btn" value="Create dog!"></input>
            </form>
        </>
    )
}

export default CreateDog;