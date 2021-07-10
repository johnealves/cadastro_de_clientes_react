const noCors = 'https://floating-beyond-79262.herokuapp.com/'

const addClientPost = async ({ name, birthDate, document, entity }) => {
  console.log('começou requisição')
  const rawResponse = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/client`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ name, birthDate, document, entity })
  })
  
  const content = await rawResponse.json();

  console.log(content);
}

export {  
  addClientPost
}