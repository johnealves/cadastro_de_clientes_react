import React from 'react';
import { Link } from 'react-router-dom';

const ClientLi = ({ client }) => {
  console.log(client)
  return (
    <Link to={`/client/${client.clientId}`}>
      <li>{ client.name }</li>
    </Link>
  )
}

export default ClientLi;
