import React, { useState ,createContext } from 'react';

// import { Container } from './styles';

export const UserContext  = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    {id:1, email:'teste@teste1.com', token: '', partner: true, signed: false }
  );

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
export default  UserProvider;