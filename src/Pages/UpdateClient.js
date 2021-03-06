/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import LoadingRegistration from '../components/LoadingRegistration';
import NavBar from '../components/navBar';
import '../css/NewClient.css';
import { getClientById } from '../services/fetchClients';

function attClient({ match: { params: { clientId } } }) {
  const [client, setClient] = useState([]);

  useEffect(() => {
    getClientById(clientId)
      .then((response) => { 
        setClient(response)
        setName(response.name)
        setBirthDate(response.birth_date)
        setDocument(response.cpf_cnpj)
      })
  }, []);

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [document, setDocument] = useState('')
  const [entity, setEntity] = useState('')
  const [registration, setRegistration] = useState(false)
  const history = useHistory();

  const handleName = ({ target: { value } }) => { setName(value) }
  const handleBirthDate = ({ target: { value } }) => { setBirthDate(value) }
  const handleDocument = ({ target: { value } }) => { setDocument(value) }
  const handleEntity = ({ target: { value } }) => { setEntity(value) }

  const verifyDocument = () => {
    const documentRegex = (
      /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
    )
    const regexTest = documentRegex.test(document);
    if (!regexTest) return false
    return true;
  }

  const checkForm = () => {
    if (
      name === "" 
      || birthDate === ""
      || document === ""
      || entity === ""
    ) {
      alert('Campos obrigatorios não preechidos!')
      return false
    }
    return true;
  }

  const submit = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();
    setRegistration(true)

    const completForm = checkForm()
    if (!completForm) return null;

    const verification = verifyDocument();
    if (!verification) return alert('"CPF/CNPJ" invalido!,  por favor verifique os dados e tente novamente.')
    
    axios.put(
      `${noCors}https://gentle-inlet-87565.herokuapp.com/client/${clientId}`,
      {
        name,
        birth_date: birthDate,
        cpf_cnpj: document,
        legal_entity: entity,
        status: 'ativo'
      }
    ).then((response) => {
      history.push(`/client/${clientId}`)
    })
  }

  if (registration) return <div className="new-client-container"><LoadingRegistration /></div>

  return (
    <Form className="new-client-container">
      <NavBar />
      <h4>Atualizar dados</h4>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-name">
          Nome completo: 
        </Form.Label>
        <Form.Control id="form-name" type="text" defaultValue={ client.name } placeholder="Digite seu nome" onInput={ handleName } required />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-birth">Data de nascimento: </Form.Label>
        <Form.Control id="form-birth" type="date" defaultValue={ client.birth_date } placeholder="Ex.: 01/01/2001" onInput={ handleBirthDate } required />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-cpf">CPF/CNPJ</Form.Label>
        <Form.Control id="form-cpf" type="text" defaultValue={ client.cpf_cnpj} placeholder="CPF/CNPJ" onInput={ handleDocument } required />
      </Form.Group>
      <div 
        className="status-container"
        onChange={ handleEntity }
        required 
      >
        <label htmlFor="radio-ativo" >
          <input id="radio-ativo" type="radio" value="pessoa fisica" name="entity" />
          &nbsp;&nbsp;Pessoa física
        </label>
        <label>
          <input type="radio" value="pessoa juridica" name="entity" />
          &nbsp;&nbsp;Pessoa Jurídica
        </label>
      </div>
      <Button
        type="submit"
        variant='success'
        onClick={ submit }>
        atualizar dados
      </Button>
    </Form>
  )
}

export default attClient;