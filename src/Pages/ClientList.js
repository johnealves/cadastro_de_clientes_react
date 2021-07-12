import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';
import Button from 'react-bootstrap/Button'
import ClientLi from '../components/clientLi';
import '../css/ClientList.css';
// import { fetchGetClients } from '../services/fetchClients';
// import useClients from '../services/clientsJoinAddress';
import clientsJoinAddress from '../services/clientsJoinAddress';
import Loading from '../components/Loading';
import NavBar from '../components/navBar';

function ClientList() {
  const [isFetching, setIsFetching] = useState(true)
  const [clients, setClients] = useState([])
  const [clientsFilter, setClientsFilter] = useState([])
  const [textFilter, setTextFilter] = useState('');
  const [status, setStatus] = useState('ativo');

  useEffect(() => {
    clientsJoinAddress().then((response) =>{
      setClients(response)
      setClientsFilter(response.filter((resp) => resp.status === 'ativo'))
      setIsFetching(false)
    })
  }, [])

  const setFilter = ({ target: { value } }) => {
    setTextFilter(value)
    const filtred = clients
      .filter(({name, cpf_cnpj, ceps}) => {
        const cep = ceps.filter((cep) => cep.includes(value));
        if (cep.length || name.toLowerCase().includes(value.toLowerCase()) || cpf_cnpj.includes(value)) return true
        return false;
      })
      .filter((client) => {
          if(status === 'todos') return true
          return client.status === status
      })
    
      
      setClientsFilter(filtred);
      // console.log(client.address.map((add) => add.CEP) ))
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

  // if (isFetching) return (
  //   <div className="client-list-container">
  //     <Loading />
  //   </div>
  //   )

  return (
    <div className="client-list-container">
      <NavBar />
      <header>
        <h1>Clientes cadastrados</h1>
        <Link to="/clients/add-client">
          <Button size="sm">
            <RiAddCircleFill size='1rem'/>&nbsp;
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
            <input id="radio-ativo" type="radio" value="ativo" name="entity" defaultChecked/>
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
        <li className="indice-list">
          <span>Id
          &nbsp;&nbsp;&nbsp;&nbsp;
          Nome</span>
        </li>
        { (clientsFilter && !isFetching)
          ? clientsFilter.map((client, index) => <ClientLi client={ client } key={ `key-${index}` } />)
          : <Loading />
        }
      </ul>
    </div>
  )
}

export default ClientList;
