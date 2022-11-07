import { useState, useEffect } from 'react';

const SynchronizingWithEffects35 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
            if(count === 5) {
                alert('High FIVE!');
            }      
        }, [count])

    function increment(){
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={increment}>Increment</button>
            <p>
                <span>Result: {count}</span>
            </p>
        </div>
    )
}

export default SynchronizingWithEffects35;