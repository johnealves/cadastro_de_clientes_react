import React, { useEffect, useState } from 'react';
import { fetchGetClients } from '../services/fetchClients';

function ClientHome() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetchGetClients().then((response) => setClients(response))
  }, []);

  return (
    <div>
      <h1>Pagina do Cliente</h1>
    </div>
  )
}

export default ClientHome
