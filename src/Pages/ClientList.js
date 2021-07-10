import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import ClientLi from '../components/clientLi';
import '../css/ClientList.css';
import { fetchGetClients } from '../services/fetchClients';

function ClientList() {
  const [clients, setClients] = useState([])
  const [clientsFilter, setClientsFilter] = useState([])
  const [textFilter, setTextFilter] = useState('');
  const [status, setStatus] = useState('ativo');

  useEffect(() => {
    fetchGetClients().then((response) => { 
      setClients(response)
      setClientsFilter(response)
    })
  }, [])

  const setFilter = ({ target: { value } }) => {
    setTextFilter(value)
    const filtred = clients
      .filter((client) => client.name.toLowerCase().includes(value.toLowerCase()) || client.cpf_cnpj.includes(value))
      .filter((client) => {
        if(status === 'todos') return true
        return client.status === value
      })

    setClientsFilter(filtred);
  }

  const handleStatus = ({ target: { value } }) => {
    setStatus(value);
    const filtred = clients
      .filter((client) => client.name.toLowerCase().includes(textFilter.toLowerCase()) || client.cpf_cnpj.includes(textFilter))
      .filter((client) => {
        if(value === 'todos') return true
        return client.status === value
      })

    setClientsFilter(filtred);
  }

  return (
    <div className="client-list-container">
      <header>
        <h1>Clientes</h1>
        <Link to="/clients/add-client">
          <Button>
            Novo cliente
          </Button>
        </Link>
      </header>
      <hr/>
      <section className="filter-container">
        <div>
          <span>Filtra por:&nbsp;</span>
          <input type='text' placeholder="nome, CPF/CNPJ ou CEP" onInput={ setFilter }/>
        </div>
        <div className="status-container" onChange={ handleStatus }>
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
        { (clientsFilter) &&
          clientsFilter.map((client, index) => <ClientLi client={ client } key={ `key-${index}` } />)
        }
      </ul>
    </div>
  )
}

export default ClientList;
