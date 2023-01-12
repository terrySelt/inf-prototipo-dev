import axios from 'axios'

export const getFtsRequest = async () => await axios.get('/fts')

export const createFtRequest = async (ft) => await axios.post('/fts', ft)

export const deleteFtRequest = async id => await axios.delete('/fts/' +id)

export const getFtRequest = async id => await axios.get('/fts/' +id) 

export const updateFtRequest = async (id, newFiles) => await axios.put('/fts/' +id ,newFiles)

export const getFtsReportes = async (dates) => await axios.post('/ftsrepo', dates)
