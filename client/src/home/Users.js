import React from 'react';

import UsersList from './User/UserList';
import Map from './Components/Map';

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
     
       <Map />

     </div>
    
     </>
    )
};

export default Users;
