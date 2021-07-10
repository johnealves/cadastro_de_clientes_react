import React from 'react';
import { Link } from 'react-router-dom';

const ClientLi = ({ client }) => {
  return (
    <Link to={`/client/${client.clientId}`}>
      <li className={`status-${client.status}`}>{ client.name }</li>
    </Link>
  )
}

export default ClientLi;
