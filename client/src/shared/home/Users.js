import React from 'react';

import UsersList from './Components/UserList';

const Users = () => {
    const USERS = [
      {
        id: 'u1',
    name: 'RJ Singh',
    place: 'Road 13 Pistachio Ranch',
    image:
      "https://i.imgur.com/3Wb9sVF.jpg",
    places: 3
  }
  ];



    return <UsersList items={USERS} />;

};

export default Users;
