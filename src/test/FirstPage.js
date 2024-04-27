import React, { useState } from "react";


const FirstPage = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setRes] = useState();


function addition(){
    const sum = parseInt(num1) + parseInt(num2);
    setRes(sum);
}

return(
    <div>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <button onClick={addition}>Add</button>
        <p>Result: {result}</p>
    </div>
);

}

export default FirstPage;