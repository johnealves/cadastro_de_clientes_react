import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import { getClientAddressById, getClientById } from '../services/fetchClients';
import { RiAddCircleFill } from 'react-icons/ri';
import '../css/ClientHome.css';
import AddressItem from '../components/AddressItem';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/navBar';
import Loading from '../components/Loading';

function ClientHome({ history, match: { params: { clientId } } }) {
  const [client, setClient] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getClientById(clientId).then((response) => setClient(response))
    getClientAddressById(clientId).then((response) => setAddress(response.address))
  }, []);

  return (
    <div className="client-container">
      <div>
        <NavBar />
        <header>
          <div>
            <h4>{ client.name }</h4>
            <p>idade: {moment().diff(client.birth_date, 'years')} anos</p>
          </div>
          <div>
            <p>CPF/CNPJ: { client.cpf_cnpj }</p>
            <p>cadastrado em: <Moment format="DD/MM/YYYY">{client.register}</Moment></p>
          </div>
        </header>
      <Link to={`/client/${client.clientId}/update`} >Atualizar dados</Link>
      </div>
      <hr/>
      <section>
        <h6>Endereços cadastrados</h6>
        <Link to={ `/client/${clientId}/add-address` } >
          <Button size="sm" >
            <RiAddCircleFill size='1rem'/>&nbsp;
            Novo endereço
          </Button>
        </Link>
      </section>
      <hr/>
      <section className="address-list-container">
        { (address) && address.map((add, index) => <AddressItem add={ add } key={`key-${index}`} />) }
      </section>
    </div>
  )
}

export default ClientHome
