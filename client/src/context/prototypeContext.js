import {useState, createContext, useContext, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { createComputerRequest, deleteComputerRequest, getComputerRequest, getComputersRequest, updateComputerRequest } from '../api/computers'
import { createLabRequest, deleteLabRequest, getLabRequest, getLabsRequest, updateLabRequest } from '../api/labs'
import { getUsersRequest, createUserRequest, deleteUserRequest, getUserRequest, updateUserRequest } from '../api/users'

const notify = (msj) => toast(msj)

const protoContext = createContext()

export const useMyContex = () => {
    const context = useContext(protoContext)
    return context
}

export const ProtoProvider = ({children}) => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await getUsersRequest()
        setUsers(res.data)
    }

    const createUser = async (user) => {
        const existe = users.find( el => el.name === user.name )
        if(!existe){
            const res = await createUserRequest(user)
            setUsers([...users, res.data])
        } else {
            console.log('No seas pendejo, ya existe la categoria')
            notify('Ya existe la categoria')
        }
    }

    const deleteUser = async (id) => {
        const res = await deleteUserRequest(id)
        if(res.status === 204) {
            setUsers(users.filter((user) => user._id !== id))
        }
    }

    const getUser = async (id) => {
        const res = await getUserRequest(id)
        return res.data
    }

    const updateUser = async(id, user) => {
        const res = await updateUserRequest(id, user)
        setUsers(users.map((user) => (user._id===id ? res.data : user)))
    }
    //Labs------------------------------------------------------------------------

    const [labs, setLabs] = useState([])

    const getLabs = async () => {
        const res = await getLabsRequest()
        setLabs(res.data)
    }

    const createLab = async (lab) => {
        const res = await createLabRequest(lab)
        setLabs([...labs, res.data])
    }

    const deleteLab = async id => {
        const res = await deleteLabRequest(id)
        if (res.status === 204) {
            setLabs(labs.filter((lab) => lab._id !==id ))
        }
    }

    const getLab = async id => {
        const res = await getLabRequest(id)
        return res.data
    }

    const updateLab = async(id, lab) => {
        const res = await updateLabRequest(id, lab)
        setLabs(labs.map((lab) => (lab._id === id ? res.data : lab)))
    }

    //computers----------------------------------------------------------------------------------------

    const [computers, setComputers] = useState([])

    const getComputers = async () => {
        const res = await getComputersRequest()
        setComputers(res.data)
    }

    const createComputer = async (computer) => {

        const existe = computers.find( el => el.code === computer.code )

        if(!existe){
            const res = await createComputerRequest(computer)
            setComputers([...computers, res.data])
            await getLabs()
        } else {
            notify('Ya existe la computadora')
        }

        //const lab = labs.find(el =>el.name === computer.lab)
        //console.log(lab)
        //const id = lab.id
        //let cant = lab.quantity
        //let cant2 = cant + 1
        //lab.quantity = cant2
        //console.log(lab)
        //const newlab = await updateLabRequest(id, lab)
        //console.log(newlab)
    }

    const deleteComputer = async (id) => {  
        const res = await deleteComputerRequest(id)
        if(res.status ===204) {
            setComputers(computers.filter((computer) => computer._id !==id))
        }
    }

    
    const getComputer = async (id) => {
        const res = await getComputerRequest(id)
        return res.data
    }
    
    const updateComputer = async(id, computer) => {
        const res = await updateComputerRequest(id, computer)
        setUsers(computers.map((computer) => (computer._id===id ? res.data : computer)))
    }

    useEffect(() => {
        getUsers()
        getLabs()
        getComputers()
      }, [])

    return <protoContext.Provider value={{
        users,
        getUsers,
        createUser,
        deleteUser,
        getUser,
        updateUser,
        labs,
        getLabs,
        createLab,
        deleteLab,
        getLab,
        updateLab,
        computers,
        getComputers,
        createComputer,
        deleteComputer,
        getComputer,
        updateComputer
        }}>
            {children}
        </protoContext.Provider>
}