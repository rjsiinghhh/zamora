import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './users/Users';
import Bills from './finance/Bills';

const App = () => {
  return(
   <Router> 
     <Switch>
       <Route path="/" exact>
         <Users />
       </Route>
       <Route path ="/bills" exact>
         <Bills />
       </Route>
       <Redirect to ="/" />
     </Switch>
   </Router>
  )
};
export default App;
