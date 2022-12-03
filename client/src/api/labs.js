import axios from 'axios'

export const getLabsRequest = async () => await axios.get('/labs')

export const createLabRequest = async (lab) => await axios.post('/labs', lab)

export const deleteLabRequest = async id => await axios.delete('/labs/' +id)

export const getLabRequest = async id => await axios.get('/labs/' +id) 

export const updateLabRequest = async (id, newFiles) => await axios.put('/labs/' +id ,newFiles)
