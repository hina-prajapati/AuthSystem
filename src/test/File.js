import React, { useState } from "react";

const File = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    function handleAddition(){
        const res = parseInt(num1) + parseInt(num2);
        setResult(res);
    };

    return(
        <div className="">
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/><br/>
            <button type="button"  onClick={handleAddition}>Add</button>
            <p>Result: {result}</p>
        </div>
        

    );
}
export default File;