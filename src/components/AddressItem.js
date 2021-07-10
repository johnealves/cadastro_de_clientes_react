function AddressItem({ add }) {
  // const { 
  //   // cep,
  //   address,
  //   city,
  //   complement,
  //   district,
  //   num,
  //   state,
  // } = add;
  return (
    <div className="address-container">
      <p><span>Rua: { add.address }</span>&nbsp;<span>nº { add.num }</span></p>
      <p><span>complemento: { add.complement }</span></p>
      <p><span>Bairro: { add.district }</span>&nbsp;&nbsp;<span>Cidade: { add.city }</span></p>
      <p><span>{ add.state }</span>&nbsp;&nbsp;<span>CEP: { add.CEP }</span></p>
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