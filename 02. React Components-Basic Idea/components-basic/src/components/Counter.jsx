import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(count => count + 1);
    }
    const onReset = () => {
        setCount(0);
    }
    return (
        <div>
            <h2>Counter</h2>

            <p>Count : {count < 0 ? 'Invalid counter' : count }</p>

            <button onClick={onIncrementClick}>Click to increment</button>
            <button onClick={onReset}>Click to reset</button>
            <button onClick={() => setCount(count => count-1)}>Click to decrement</button>
        </div>
    );
}