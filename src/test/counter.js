import React, { useState } from "react";

const Counter = () => {
const [abc, abcSet] = useState(0);

function increase(){
    abcSet(abc + 1);

}

function decrease(){
    abcSet(abc - 1);
}


    return (
        <div className="bccbcb">
            <button onClick={increase}>Increase</button>
            <p>{abc}</p>
            <button onClick={decrease}>Decrease</button>
        </div>
        
    );

}

export default Counter;