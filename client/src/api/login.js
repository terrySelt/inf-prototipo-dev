import axios from 'axios'

export const loginRequest = async (user) => await axios.post('/login', user)