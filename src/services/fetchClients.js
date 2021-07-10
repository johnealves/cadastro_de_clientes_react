const noCors = 'https://floating-beyond-79262.herokuapp.com/'

const fetchGetClients = async () => {
  const result = await fetch(`${noCors}https://gentle-inlet-87565.herokuapp.com/clients`)
    .then((response) => response.json())
    .then((result) => result)
  return result
}

export {
  fetchGetClients,
}