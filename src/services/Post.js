const noCors = 'https://floating-beyond-79262.herokuapp.com/'

const addClientPost = async ({ name, birth_date, cpf_cnpj, legal_entity }) => {
  console.log('começou requisição')
  const rawResponse = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/client/5`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: { name, birth_date, cpf_cnpj, legal_entity, status: 'ativo' },
  })
  
  const content = await rawResponse.json();

  console.log(content);
}

export {  
  addClientPost
}