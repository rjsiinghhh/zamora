import React from 'react';
import { Link } from 'react-router-dom';

import Map from '../../home/Components/Map';
import Card from '../../shared/UIElements/Card';


const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/expenses`}>
          <div className="user-item__image">
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.place}</h3>
            <Map center={props.coordinates} />
         
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;