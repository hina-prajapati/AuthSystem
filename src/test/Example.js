import React, { useState } from "react";

const AdditionComponent = () => {
  // State variables to hold the two numbers and the result
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  // Function to handle addition
  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2); // Ensure numbers are parsed before addition
    setResult(sum);
  };

  return (
    <div>
      <h2>Addition of Two Numbers</h2>
      <div>
        {/* Input field for the first number */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1"
        />
      </div>
      <div>
        {/* Input field for the second number */}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2"
        />
      </div>
      <div>
        {/* Button to trigger addition */}
        <button onClick={handleAddition}>Add</button>
      </div>
      {/* Display the result */}
      <div>Result: {result}</div>
    </div>
  );
};

export default AdditionComponent;
