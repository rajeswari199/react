
/**
*
* CopyContent
*
*/

import React, { useMemo, useCallback, useState } from 'react';


// Keeps track of all created functions during the app's life 
const functions: Set<any> = new Set();
function RenderCounts({ count1, count2 }) {
    const calculate = (count2, count1) => {
        /**
         * This console will be printed only if count2 is changed.
         * here count1's value does not change as it is passed as true bool value, 
         * this component will not re-render if count1 button is clicked.
         */
        console.log(count2, count1)
    }

    const primes = useMemo(() => calculate(count1, count2), [
        count1,
        count2,
    ])

    /**
     * uncomment this line to check for multiple rerender even when count1's value remains the same.
     * In this case console will be printed if count1,count2 is changed.
     *
    */
    // const primes = calculate(count1, count2);

    return <div>Primes! {primes}</div>
}

/**
 * UseCallback
 */
function Hooks() {

    const CountButton = function CountButton({ onClick, count }) {
        return <button onClick={onClick}>{count}</button>
    }

    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(c => { console.log(c, 'count 1'); return c + 1 }), [])

    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(c => { console.log(c, 'count 2'); return c + 1 }), [])

    /**
     * uncomment this line to check for multiple function creation.
     * In this case console will be printed if count1,count2 is changed.
     *
    */
    // const increment2 = () => setCount2(c => { console.log(c, 'count 2'); return c + 1 })

    // Register the functions to count it.
    functions.add(increment2);
    functions.add(increment1);

    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
            <div> Newly Created Functions: {functions.size - 2} </div>
            <RenderCounts count2={count2} count1 />
        </>
    )
}

export default Hooks
