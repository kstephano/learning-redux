import { useSelector } from 'react-redux';

import './App.css';
import { CreateDog, DeleteDog, EditDog } from './components';

function App() {
  const retrievedDogs = useSelector(state => state.dogs);

  return (
    <div className="App">
      <CreateDog />
      <DeleteDog />
      <EditDog />
      <h2>List of dogs:</h2>
      {retrievedDogs.map(d => {
        return (
          <div className='dog-container'>
            <p>{`* Name: ${d.name}, Age: ${d.age}, Breed: ${d.breed}`}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
