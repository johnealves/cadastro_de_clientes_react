import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import '../css/NewClient.css';

function NewClient() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [document, setDocument] = useState('')
  const [entity, setEntity] = useState('')
  const history = useHistory();

  const handleName = ({ target: { value } }) => { setName(value) }
  const handleBirthDate = ({ target: { value } }) => { setBirthDate(value) }
  const handleDocument = ({ target: { value } }) => { setDocument(value) }
  const handleEntity = ({ target: { value } }) => { setEntity(value) }

  const submit = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();
    console.log('inicia submit')
    axios.post(
      `${noCors}https://gentle-inlet-87565.herokuapp.com/addclient`,
      {
        name,
        birth_date: birthDate,
        cpf_cnpj: document,
        legal_entity: entity,
        status: 'ativo'
      }
    ).then((response) => {
      history.push('/')
    })
    // addClientPost({ name, birthDate, document, entity })
  }

  return (
    <Form className="new-client-container">
        <h4>Novo cliente</h4>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-fullname">
            Nome completo: 
          </Form.Label>
          <Form.Control id="checkout-fullname" type="text" placeholder="Digite seu nome" onInput={ handleName } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-birth">Data de nascimento: </Form.Label>
          <Form.Control id="checkout-birth" type="date" placeholder="Ex.: 01/01/2001" onInput={ handleBirthDate }/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-cpf">CPF/CNPJ</Form.Label>
          <Form.Control id="checkout-cpf" type="text" placeholder="Digite seu CPF ou CNPJ" onInput={ handleDocument }/>
        </Form.Group>
        <div 
          className="status-container"
          onChange={ handleEntity }
        >
          {/* <span>status:&nbsp;</span> */}
          <label htmlFor="radio-ativo" >
            <input id="radio-ativo" type="radio" value="pessoa fisica" name="entity"/>
            &nbsp;&nbsp;Pessoa física
          </label>
          <label>
            <input type="radio" value="pessoa juridica" name="entity" />
            &nbsp;&nbsp;Pessoa Jurídica
          </label>
        </div>
        <Button
          // type="submit"
          variant='success'
          onClick={ submit }>
          Adicionar usuario
        </Button>
      </Form>
  )
}

export default NewClient;