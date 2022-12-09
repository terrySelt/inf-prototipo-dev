import axios from 'axios'

export const getUsersRequest = async () => await axios.get('/users')

export const createUserRequest = async (user) => {
    const form = new FormData()

    for(let key in user){
        form.append(key, user[key])
    }

    return await axios.post('/users', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const deleteUserRequest = async id => await axios.delete('/users/' + id)

export const getUserRequest = async id => await axios.get('/users/' + id)

//export const updateUserRequest = async (id, newFields) => await axios.put('/users/' + id, newFields)

export const updateUserRequest = async (id, newFields) => {
    const form = new FormData()

    for(let key in newFields){
        form.append(key, newFields[key])
    }

    return await axios.put('/users/' + id, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })   
}