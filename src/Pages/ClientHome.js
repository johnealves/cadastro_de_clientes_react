import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import { getClientAddressById, getClientById } from '../services/fetchClients';
import '../css/ClientHome.css';
import AddressItem from '../components/AddressItem';
import Button from 'react-bootstrap/Button';

function ClientHome({ match: { params: { clientId } } }) {
  const [client, setClient] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getClientById(clientId).then((response) => setClient(response))
    getClientAddressById(clientId).then((response) => setAddress(response.address))
  }, []);

  return (
    <div className="client-container">
      <header>
        <div>
          <h4>{ client.name }</h4>
          <p>idade: {moment().diff(client.birth_date, 'years')} </p>
        </div>
        <div>
          <p>CPF/CNPJ: { client.cpf_cnpj }</p>
          <p>cadastrado em: <Moment format="DD/MM/YYYY">{client.register}</Moment></p>
        </div>
      </header>
      <hr/>
      <section>
        <h6>Endereços cadastrados</h6>
        <Button size="sm">
          Novo endereço
        </Button>
      </section>
      <hr/>
      <section className="address-list-container">
        { (address) && address
          .map((add, index) => <AddressItem add={ add } key={`key-${index}`} />) }
      </section>
    </div>
  )
}

export default ClientHome
