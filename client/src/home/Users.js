import React from 'react';

import UsersList from './Components/UserList';
import Map from '../home/Components/Map';
import DailyList from './Components/DailyList';

const Users = () => {
    const USERS = [
      {
        id: 'u1',
    name: 'RJ Singh',
    place: 'Road 13 Pistachio Ranch'
  }
  ];



    return(
      <>
      <div>
     <UsersList items={USERS} />
     
  
     </div>
     <div>
       <DailyList />
       <Map />

     </div>
    
     </>
    )
};

export default Users;
