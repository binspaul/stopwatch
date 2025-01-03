import { useEffect, useState, memo} from 'react';
import './App.css'

let CachedChild = memo(function Child() {
  console.log("2. Child render called");

  return (
      <>
      Child
      </>
  );
});


function App() {
  console.log("1. App render called");

  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  
  useEffect(() => {
    console.log("useEffect called");
  }, [counter, counter2]);

  function incrementCounter() {
    let c = counter + 1;
    
    setCounter(c);
    setCounter2(c);
  }

  return (
    <>
    Counter is: {counter}, {counter2}
    <br/>
    <CachedChild/>
    <br/>
    <button onClick={incrementCounter}>INCREMENT</button>
    </>
  )
}

export default App
