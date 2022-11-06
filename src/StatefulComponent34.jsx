import { useState } from 'react';

const StatefulComponent34 = () => {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

     function decrement(){         
        setCount(count > 0 ? count - 1 : 0);
    }

    return(
        <>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>

                <p>
                    <span>Result: {count}</span>
                </p>
            </div>
        </>
    )
}

export default StatefulComponent34;