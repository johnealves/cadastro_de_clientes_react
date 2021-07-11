import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const ClientLi = ({ client }) => {
  const { name, birth_date, cpf_cnpj, legal_entity, clientId, status } = client;

  const disableClient = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();

    axios.put(
      `${noCors}https://gentle-inlet-87565.herokuapp.com/client/${clientId}`,
      {
        name,
        birth_date,
        cpf_cnpj,
        legal_entity,
        status: 'inativo'
      }
    ).then((response) => {
      window.location.reload()
    })
  }

  const ableClient = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();

    axios.put(
      `${noCors}https://gentle-inlet-87565.herokuapp.com/client/${clientId}`,
      {
        name,
        birth_date,
        cpf_cnpj,
        legal_entity,
        status: 'ativo'
      }
    ).then((response) => {
      window.location.reload()
    })
  }

  return (
    <li >
      <div>
        <span className={`status-${ status}`}>#{ clientId }</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/client/${ clientId }`} className={`status-${ status }`}>
          { name }
        </Link>
      </div>
      { (status === 'ativo')
        ? (
          <Button variant="outline-danger" size="sm" onClick={ disableClient } >
            Desativar cadastro
          </Button>
        )
        : (
          <Button variant="success" size="sm" onClick={ ableClient }>
            ativar cadastro
          </Button>
        )
      }
    </li>
  )
}

export default ClientLi;
