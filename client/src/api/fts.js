import axios from 'axios'

const token = document.cookie.replace('token=', '')
const headers = {
    'x-access-token': token
}

export const getFtsRequest = async () => await axios.get('/fts', {headers:headers})

export const createFtRequest = async (ft) => await axios.post('/fts', ft, {headers:headers})

export const deleteFtlogicalRequest = async (id, state) => await axios.put('/fts/delete/' +id, state, {headers:headers})

export const restoreFtlogicalRequest = async (id, state) => await axios.put('/fts/restore/' +id, state, {headers:headers})

export const getFtRequest = async id => await axios.get('/fts/' +id, {headers:headers}) 

export const updateFtRequest = async (id, newFiles) => await axios.put('/fts/update/' +id ,newFiles, {headers:headers})

export const getFtsReportes = async (dates) => await axios.post('/ftsrepo', dates, {headers:headers})
