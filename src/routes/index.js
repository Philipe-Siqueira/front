import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import DashBoard from '../pages/DashBoard';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';


const Routes = (props) => {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" strict 
          render={ 
            () => user.signed ? (<DashBoard />) : <Redirect to="/" />
          }/>
        <Route component={()=> <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;