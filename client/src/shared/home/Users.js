import React from 'react';

import UsersList from './Components/UserList';
import Map from './Components/Map';

const Users = () => {
    const USERS = [
      {
        id: 'u1',
    name: 'RJ Singh',
    place: 'Road 13 Pistachio Ranch',
    image:
      "https://i.imgur.com/3Wb9sVF.jpg"
  }
  ];



    return(
      <div>
     <UsersList items={USERS} />
     <Map />
     </div>
    )
};

export default Users;
