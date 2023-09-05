import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "cow", "horse"];
  // If we don't add the Math.floor, this will generate a decimal number.
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // The code below will get the array with all the
    // existing elements of animals array nad put them into a new one
    // Then we'll gona put a random animal at the end as well.
    setAnimals([...animals, getRandomAnimal()]);

    // It's possible to do "the same as above", as the code below:
    // animals.push( getRandomAnimal() )
    // But this would modify directly the 'piece of state'
    // so don't do like this.
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal!</button>
    </div>
  );
}

export default App;
