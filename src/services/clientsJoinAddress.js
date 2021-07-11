// import React, { useEffect, useState } from 'react'
import { fetchGetClients, getClientAddressById} from './fetchClients';


async function clientsJoinAddress() {
  
  const clients = await fetchGetClients()

  clients.forEach(async (client) => {
    const { address } = await getClientAddressById(client.clientId);
    
    client['address'] = address.map((add) => add.CEP)
  })
  
   return clients;
}

export default clientsJoinAddress;