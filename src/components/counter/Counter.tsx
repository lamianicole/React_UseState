import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const addOne = () => {
        setCounter(counter + 1);
    };

    const subtractOne = () => {
        setCounter(counter - 1);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div className="counter-container">
            <h3>Aufgabe React-Counter-Level-1_3</h3>
            <div className="button-group">
                <button onClick={addOne}>+</button>
                <h2 className="counter-display">{counter}</h2>
                <button onClick={subtractOne}>-</button>
            </div>
            <button onClick={resetCounter} className="reset-button">Reset</button>
        </div>
    );
};

export default Counter;
