import axios from 'axios'

export const loginRequest = async (user) => await axios.post('/login', user)

export const recoveryRequest = async (email) => await axios.post('/recovery', email)

export const changepasswordRequest = async (token, newPassword) => await axios.post('/changepassword/' + token , newPassword)