import axios from 'axios'

const token = document.cookie.replace('token=', '')
const headers = {
    'x-access-token': token
}

export const getComputersRequest = async () => await axios.get('/computers', {headers:headers})

export const createComputerRequest = async (computer) => await axios.post('/computers', computer, {headers:headers})

export const deleteComputerRequest = async (id, newstate) => await axios.put('/computers/' + id, newstate, {headers:headers})

export const restoreComputerRequest = async (id, newstate) => await axios.put('/computers/' + id, newstate, {headers:headers})

export const getComputerRequest = async id => await axios.get('/computers/' + id, {headers:headers})

export const updateComputerRequest = async (id, newFields) => await axios.put('/computers/' + id, newFields, {headers:headers})
