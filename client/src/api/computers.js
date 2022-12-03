import axios from 'axios'

export const getComputersRequest = async () => await axios.get('/computers')

export const createComputerRequest = async (computer) => await axios.post('/computers', computer)

export const deleteComputerRequest = async id => await axios.delete('/computers/' + id)

export const getComputerRequest = async id => await axios.get('/computers/' + id)

export const updateComputerRequest = async (id, newFields) => await axios.put('/computers/' + id, newFields)
