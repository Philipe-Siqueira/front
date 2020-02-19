import React, { useState ,createContext } from 'react';

// import { Container } from './styles';

export const UserContext  = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    {id:'', email:'', token: '', partner: true, signed: true }
  );

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
export default  UserProvider;