import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import ClientLi from '../components/clientLi';
import '../css/ClientList.css';
import { fetchGetClients } from '../services/fetchClients';

function ClientList() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetchGetClients().then((response) => setClients(response))
  }, [])

  return (
    <div className="client-list-container">
      <header>
        <h1>Clientes</h1>
        <Button>
          Novo cliente
        </Button>
      </header>
      <hr/>
      <section className="filter-container">
        <div>
          <span>Filtra por:&nbsp;</span>
          <input type='text' placeholder="nome, CPF/CNPJ ou CEP"/>
        </div>
        <div className="status-container">
          <span>status:&nbsp;</span>
          <label htmlFor="radio-ativo" >
            <input id="radio-ativo" type="radio" value="ativo" name="entity"/>
            &nbsp;&nbsp;Ativo
          </label>
          <label>
            <input type="radio" value="inativo" name="entity" />
            &nbsp;&nbsp;Inativo
          </label>
          <label>
            <input type="radio" value="todos" name="entity" />
            &nbsp;&nbsp;Todos
          </label>
        </div>
      </section>
      <hr/>
      <ul>
        {/* { clients.map((client, index) => <ClientLi client={ client } key={ `key-${index}` } />) } */}
        { (clients) &&
          clients.map((client, index) => <ClientLi client={ client } key={ `key-${index}` } />)
        }
      </ul>
    </div>
  )
}

export default ClientList;
