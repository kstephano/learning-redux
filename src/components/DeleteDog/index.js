import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import { deleteDog } from '../../redux/actions';

const DeleteDog = () => {
    const [dogName, setDogName] = useState([])

    const dispatch = useDispatch(); 

    const handleInput = e => {
        setDogName(e.target.value);
    }

    return(
        <>  
        <h2>Delete Dog by Name</h2>
            <form onSubmit={() => dispatch(deleteDog(dogName))}>
                <label htmlFor='name'>Name</label>
                <input id="name" name="name" onChange ={handleInput} type="text" placeholder="Enter name of dog to be deleted" required>
                </input>
                <input type="submit" id="submit-btn" value="Delete dog"></input>
            </form>
        </>
    )
}

export default DeleteDog;