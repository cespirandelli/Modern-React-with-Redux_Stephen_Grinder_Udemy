import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "cow", "horse"];
  // If we don't add the Math.floor, this will generate a decimal number.
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal!</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
