
import React, { useState } from 'react';
import MyContext from './Context';

const Contextprovider = ({ children }) => {
  const [user, setUser] = useState("Ali");

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default Contextprovider;
