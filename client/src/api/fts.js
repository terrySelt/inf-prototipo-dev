import axios from 'axios'

const token = document.cookie.replace('token=', '')
const headers = {
    'x-access-token': token
}

export const getFtsRequest = async () => await axios.get('/fts', {headers:headers})

export const createFtRequest = async (ft) => await axios.post('/fts', ft, {headers:headers})

export const deleteFtRequest = async id => await axios.delete('/fts/' +id, {headers:headers})

export const getFtRequest = async id => await axios.get('/fts/' +id, {headers:headers}) 

export const updateFtRequest = async (id, newFiles) => await axios.put('/fts/' +id ,newFiles, {headers:headers})

export const getFtsReportes = async (dates) => await axios.post('/ftsrepo', dates, {headers:headers})
