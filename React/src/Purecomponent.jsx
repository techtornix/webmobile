import React from 'react';

let count = 1;

const Purecomponent = () => {

count++;
  return (
    <div>
      <Sum />
      <Sum />
      <Sum />
      <Sum />
    </div>
  );
};


const Sum = () => {
  console.log("Sum component rendered");
  return (
  <h1>{count+1}</h1>

  )
};

export default Purecomponent;
