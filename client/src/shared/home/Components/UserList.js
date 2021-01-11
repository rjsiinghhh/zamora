import React from 'react';

import UserItem from './UserItem';
import Card from '../../components/UIElements/Card';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          place ={user.place}
         
        />
      ))}
    </ul>
  );
};

export default UsersList;