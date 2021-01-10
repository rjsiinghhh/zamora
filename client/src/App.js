import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './users/Users';
import Expenses from './shared/finance/Expenses';

const App = () => {
  return(
   <Router> 
     <Switch>
       <Route path="/" exact>
         <Users />
       </Route>
       <Route path ="/expenses" exact>
         <Expenses />
       </Route>
       <Redirect to ="/" />
     </Switch>
   </Router>
  )
};
export default App;
