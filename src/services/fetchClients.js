const noCors = 'https://floating-beyond-79262.herokuapp.com/'

const fetchGetClients = async () => {
  const result = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/clients`)
    .then((response) => response.json())
    .then((result) => result)
  return result
}

const getClientById = async (id) => {
  const result = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/client/${id}`)
    .then((response) => response.json())
    .then((result) => result)
  return result
}

const getClientAddressById = async (id) => {
  const result = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/address/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => console.log(err));
  return result
}

export {
  fetchGetClients,
  getClientById,
  getClientAddressById,
}