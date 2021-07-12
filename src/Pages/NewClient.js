import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import LoadingRegistration from '../components/LoadingRegistration';
import '../css/NewClient.css';

function NewClient() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [document, setDocument] = useState('')
  const [entity, setEntity] = useState('pessoa fisica')
  const [registration, setRegistration] = useState(false)
  const history = useHistory();

  const handleName = ({ target: { value } }) => { setName(value) }
  const handleBirthDate = ({ target: { value } }) => { setBirthDate(value) }
  const handleDocument = ({ target: { value } }) => { setDocument(value) }
  const handleEntity = ({ target: { value } }) => { setEntity(value) }

  const verifyDocument = () => {
    const documentRegex = (
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
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
    ) {
      alert('Campos obrigatorios não preechidos!')
      return false
    }
    return true;
  }

  const submit = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();
    
    const completForm = checkForm()
    if (!completForm) return null;

    const verification = verifyDocument();
    if (!verification) return alert('"CPF/CNPJ" invalido!,  por favor verifique os dados e tente novamente.')

    setRegistration(true)

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
  }

  if (registration) return <div className="new-client-container"><LoadingRegistration /></div>

  return (
    <Form className="new-client-container">
      <NavBar />
      <h4>Novo cliente</h4>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-fullname">
          Nome completo: 
        </Form.Label>
        <Form.Control id="form-fullname" type="text" placeholder="Digite seu nome" onInput={ handleName } required />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-birth">Data de nascimento: </Form.Label>
        <Form.Control id="form-birth" type="date" placeholder="Ex.: 01/01/2001" onInput={ handleBirthDate } required />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="form-cpf">CPF/CNPJ</Form.Label>
        <Form.Control id="form-cpf" type="text" placeholder="Digite seu CPF ou CNPJ" onInput={ handleDocument } required />
      </Form.Group>
      <div 
        className="status-container"
        onChange={ handleEntity }
        required 
      >
        {/* <span>status:&nbsp;</span> */}
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
        type='submit'
        variant='success'
        onClick={ submit }>
        Adicionar cliente
      </Button>
    </Form>
  )
}

export default NewClient;