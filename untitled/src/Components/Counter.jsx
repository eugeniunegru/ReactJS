import React, {useState} from 'react';

const Counter = () => {
    const [x,setx]=useState(1)
    function increment(){
        setx(x+1)
    }
    function decrement(){
        setx(x-1)
    }

    return (
        <div>
            <h1>{x}</h1>
            <button onClick={increment} >Adauga</button>
            <button  onClick={decrement}>Scade</button>
        </div>
    );
};

export default Counter;