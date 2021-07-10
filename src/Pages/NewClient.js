import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../css/NewClient.css';
import { addClientPost } from '../services/Post';

function NewClient() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [document, setDocument] = useState('')
  const [entity, setEntity] = useState('')

  const handleName = ({ target: { value } }) => { setName(value) }
  const handleBirthDate = ({ target: { value } }) => { setBirthDate(value) }
  const handleDocument = ({ target: { value } }) => { setDocument(value) }
  const handleEntity = ({ target: { value } }) => { setEntity(value) }

  const submit = () => {
    addClientPost({ name, birthDate, document, entity })
  }

  return (
    <Form className="new-client-container">
        <h4>Dados para entrega</h4>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-fullname">
            Nome completo: 
          </Form.Label>
          <Form.Control id="checkout-fullname" type="text" placeholder="Digite seu nome" onInput={ handleName } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-birth">Data de nascimento: </Form.Label>
          <Form.Control id="checkout-birth" type="text" placeholder="Ex.: 01/01/2001" onInput={ handleBirthDate }/>
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
        {/* <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-phone-number">Telefone</Form.Label>
          <Form.Control id="checkout-phone-number" type="text" placeholder="Digite um telefone para contato"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-address">Endereço: </Form.Label>
          <Form.Control id="checkout-address" type="text" placeholder="Endereço"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-district">Bairro: </Form.Label>
          <Form.Control id="checkout-district" type="text" placeholder="Bairro"/>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-city">Cidade: </Form.Label>
            <Form.Control id="checkout-city" type="text" placeholder="Cidade"/>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-state">Estado: </Form.Label>
            <Form.Control id="checkout-state" type="text" placeholder="Estado"/>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-cpf">CEP</Form.Label>
            <Form.Control id="checkout-cpf" type="text" placeholder="Ex.: 12345000"/>
          </Form.Group>
        </Row> */}
      </Form>
  )
}

export default NewClient;