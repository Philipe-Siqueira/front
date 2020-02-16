import React from 'react';
import Routes from './routes'
import UserContext from './context/UserContext';
const App = () => {
  return (
   <UserContext>
     <Routes></Routes>
   </UserContext>
  );
}

export default App;
