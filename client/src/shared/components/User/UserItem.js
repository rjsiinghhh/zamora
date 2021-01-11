import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../components/UIElements/Avatar';
import Card from '../../components/UIElements/Card';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/expenses`}>
          <div className="user-item__image">
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
         
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;