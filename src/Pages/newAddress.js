import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import '../css/NewAddress.css';
import InputMaskCep from '../services/InputMaskCep';

function NewAddress({ match: { params: { clientId } } }) {
  const [address, setAddress] = useState('');
  const [num, setNum] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')
  const history = useHistory()

  const handleAddress = ({ target: { value } }) => { setAddress(value) }
  const handleNum = ({ target: { value } }) => { setNum(value) }
  const handleComplement = ({ target: { value } }) => { setComplement(value) }
  const handleDistrict = ({ target: { value } }) => { setDistrict(value) }
  const handleCep = ({ target: { value } }) => { setCep(value) }
  const handleCity = ({ target: { value } }) => { setCity(value) }
  const handleState = ({ target: { value } }) => { setState(value) }

  const onSubmit = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();
    console.log('inicia submit')
    axios.post(
      `${noCors}https://gentle-inlet-87565.herokuapp.com/address/${clientId}`,
      {
        address,
        num,
        complement,
        district,
        cep,
        city,
        state,
      }
    ).then((response) => {
      history.push(`/client/${ clientId }`)
    })

    // addClientPost({ name, birthDate, document, entity })
  }

  return (
    <Form className="new-address-container">
      <Form.Group className="mb-1">
        <Form.Label htmlFor="address">Endereço: </Form.Label>
        <Form.Control id="address" type="text" placeholder="Endereço" onInput={ handleAddress } />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group className="mb-1">
          <Form.Label htmlFor="number">Numero:</Form.Label>
          <Form.Control id="number" type="text" placeholder="numero..." onInput={ handleNum } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="complement">Complemento:</Form.Label>
          <Form.Control id="complement" type="text" placeholder="complemento..." onInput={ handleComplement } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="district">Bairro: </Form.Label>
          <Form.Control id="district" type="text" placeholder="Bairro" onInput={ handleDistrict } />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-1">
          <Form.Label htmlFor="city">Cidade: </Form.Label>
          <Form.Control id="city" type="text" placeholder="Cidade" onInput={ handleCity } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="state">Estado: </Form.Label>
          <Form.Control id="state" type="text" placeholder="Estado" onInput={ handleState } />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="cpf">CEP</Form.Label>
          <Form.Control id="cpf" type="text" placeholder="Ex.: 12345-000" onInput={ handleCep } />
        </Form.Group>
      </Row>
      <Button
        // type="submit"
        variant='success'
        onClick={ onSubmit }>
        Adicionar usuario
      </Button>
    </Form>
  )
}

export default NewAddress;