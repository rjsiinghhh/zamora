import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './shared/home/Users';
import Expenses from './shared/finance/Expenses';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return(
    <Router>
    <MainNavigation />
    <main>
     <Switch>
       <Route path="/" exact>
         <Users />
       </Route>
       <Route path ="/expenses" exact>
         <Expenses />
       </Route>
       <Redirect to ="/" />
     </Switch>
     </main>
   </Router>
  )
};
export default App;
