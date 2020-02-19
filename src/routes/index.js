import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import history from '../services/history';
import DashBoard from '../pages/DashBoard';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Users from '../pages/Users/';
import Address from '../pages/Address/';
import Products from '../pages/Products';
import Deliveries from '../pages/Deliveries';
import Shopping from '../pages/Shopping';

const Routes = (props) => {
  const { user } = useContext(UserContext);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" strict
          render={ 
            () => user.signed ? (<DashBoard />) : <Redirect to="/signin" />
          }
        />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" strict 
          render={ 
            () => user.signed ? (<DashBoard />) : <Redirect to="/" />
          }
        />
        <Route path="/address" component={Address} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route path="/deliveries" component={Deliveries} />
        <Route path="/shopping" component={Shopping} />
        <Route component={()=> <h1>404</h1>} />
      </Switch>
    </Router>
  );
}

export default Routes;