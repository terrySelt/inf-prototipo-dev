import axios from 'axios'

const token = document.cookie.replace('token=', '')
const headers = {
    'x-access-token': token
}

export const getLabsRequest = async () => await axios.get('/labs', {headers:headers})

export const createLabRequest = async (lab) => await axios.post('/labs', lab, {headers:headers})

export const deleteLabRequest = async id => await axios.delete('/labs/' +id, {headers:headers})

export const getLabRequest = async id => await axios.get('/labs/' +id, {headers:headers}) 

export const updateLabRequest = async (id, newFiles) => await axios.put('/labs/' +id ,newFiles, {headers:headers})
