import { useState, useMemo } from "react";

function Circle () {
    const PI = 3.14;

    let [radius, setRadius] = useState(0);
    let [counter, setCounter] = useState(0);

    let area = useMemo(() => {
            console.log("# Inside area computation");
            return PI * (radius * radius);
    }, [radius]);
    
    function getRadius(e) {
        setRadius(e.target.value);
    }
    
    return (
        <>
        <label>Enter the radiius: </label><input name='radius' type="number" onChange={(e) => getRadius(e) }></input>
        <br/>
        Area of the circle is: {area}
        
        <br/>
        <label>Counter: {counter}</label>
        <button onClick={() => { setCounter(++counter)}}>setCounter</button>
        </>
    )

};

export default Circle;