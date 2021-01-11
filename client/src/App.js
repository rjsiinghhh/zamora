import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './home/Users';
import Expenses from './finance/Expenses';
import MainNavigation from './shared/navbar/MainNavigation';
import PlaceItem from './home/Components/PlaceItem';


const App = () => {
  return(
    <Router>
    <MainNavigation />
    <main>
     <Switch>
       <Route path="/" exact>
         <Users />
         <PlaceItem />
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
