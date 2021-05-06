import React, {useState} from 'react';
import PropTypes from 'prop-types';
const CounterApp = ({value = 1}) => {
    // Estado
    const [counter, setCounter] = useState(value)
    // Sumar
    const handleAdd = () =>{
        // console.log(e);
        setCounter(counter+1);  
    }
    // Restar
    const handleRes = () =>{
        // console.log(e);
        setCounter(counter-1);  
    }
    // Reset
    const handleReset = () =>{
        // console.log(e);
        setCounter(value);  
    }

    return (
        <>
        <h1>Counter App </h1>
        <h2>{counter}</h2>

        <button onClick={handleRes}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;


