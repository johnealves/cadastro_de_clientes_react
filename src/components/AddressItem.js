import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AddressItem({ add }) {
  
  console.log()
  const onDelete = (e) => {
    const noCors = 'https://floating-beyond-79262.herokuapp.com/'
    e.preventDefault();
    
    // eslint-disable-next-line no-restricted-globals
    const action = confirm("Tem certeza que deseja excluir o endereço?")
    if (!action) return null;
    axios.delete(`${noCors}https://gentle-inlet-87565.herokuapp.com/address/${add.addressId}`)
      .then(res => {
        window.location.reload();
      })

  }
  return (
    <div className="address-container">
      <p><span>Rua: { add.address }</span>&nbsp;<span>nº { add.num }</span></p>
      <p><span>complemento: { add.complement }</span></p>
      <p><span>Bairro: { add.district }</span>&nbsp;&nbsp;<span>Cidade: { add.city }</span></p>
      <p><span>{ add.state }</span>&nbsp;&nbsp;<span>CEP: { add.CEP }</span></p>
      <section>
        <Link to={ `/client/${add.clientId}/update-address/${add.addressId}` }>editar endereço</Link>
        <Button variant="danger" size="sm" onClick={ onDelete }>
          excluir endereço
        </Button>
      </section>
    </div>
  )
}

export default AddressItem;

// CEP: "26000-000"
// address: "est velha"
// addressId: 5
// city: "Nova Iguaçu"
// clientId: 5
// complement: null
// district: "Ponto chic"
// num: 584
// state: "Rio de Janeiro"