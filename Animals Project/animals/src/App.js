import { useState } from "react";

function App() {
  // Demonstration of what deconstructing is:
  function makeArray() {
    return [1, 10, 30, 50];
  }
  //   const myArray = makeArray();
  //   const firstElement = myArray[0];
  //   const secondElement = myArray[1];

  // This code below also will print 1 and 10 on console same way as before
  const [firstElement, secondElement] = makeArray();
  console.log(firstElement, secondElement);

  //   const [count, setCount] = useState(0);

  //   return (
  //     <div>
  //       <button onClick={() => setCount(count + 1)}>Add animal!</button>
  //       <div> Number of animals: {count}</div>
  //     </div>
  //   );
}

export default App;
