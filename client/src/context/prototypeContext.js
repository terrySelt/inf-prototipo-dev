import {useState, createContext, useContext, useEffect} from 'react'
import toast from 'react-hot-toast'

import { createComputerRequest, deleteComputerRequest, getComputerRequest, getComputersRequest, updateComputerRequest } from '../api/computers'
import { createLabRequest, deleteLabRequest, getLabRequest, getLabsRequest, updateLabRequest } from '../api/labs'
import { getUsersRequest, createUserRequest, deleteUserRequest, getUserRequest, updateUserRequest } from '../api/users'
import { getFtsRequest, createFtRequest, deleteFtRequest, getFtRequest, updateFtRequest, getFtsReportes} from '../api/fts' 
import { loginRequest } from '../api/login'

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
    }

    const deleteComputer = async (id) => {  
        const res = await deleteComputerRequest(id)
        if(res.status === 204) {
            setComputers(computers.filter((computer) => computer._id !==id))
            await getLabs()
        }
    }
    
    const getComputer = async (id) => {
        const res = await getComputerRequest(id)
        return res.data
    }
    
    const updateComputer = async(id, computer) => {
        const res = await updateComputerRequest(id, computer)
        setComputers(computers.map((computer) => (computer._id===id ? res.data : computer)))
    }

    //Fts------------------------------------------------------------------------
        
    const [fts, setFts] = useState([])

    const getFts = async () => {
        const res = await getFtsRequest()
        setFts(res.data)
    }
    
    const createFt = async (ft) => {
        const res = await createFtRequest(ft)
        setFts([...fts, res.data])
    }
    
    const deleteFt = async id => {
        const res = await deleteFtRequest(id)
        if (res.status === 204) {
            setFts(labs.filter((ft) => ft._id !==id ))
        }
    }
    
    const getFt = async id => {
        const res = await getFtRequest(id)
        return res.data
    }
    
    const updateFt = async(id, lab) => {
        const res = await updateFtRequest(id, lab)
        setFts(fts.map((ft) => (ft._id === id ? res.data : ft)))
    }

    /*----search---------------------------------------------------------------------*/

    const [code, setCode] = useState('')

    /*-------reportes----------------------------------------------------------------*/

    const [repo, setRepo] = useState([])
    const getReportes = async(dates) => {
        const res = await getFtsReportes(dates)
        setRepo(res.data)
        
    }

    /*-----------------login-------------------------------------------------------- */

    const [user, setUser] = useState('')
    const [token, setToken] = useState(null)

    const login = async (user) => {
        try {
            const res = await loginRequest(user)

            if(res.status !== 200) throw 'no funciona'

            const token = res.data.token
            document.cookie = `token=${token}; max-age=${3600*24}; path=/; samesite=strict`
            console.log(document.cookie)

            setUser(res.data.userFound)
            setToken(token)
            
            console.log(res)

        } catch (error) {
            notify("No autorizado")
            throw error
        }
        
        //setFts([...fts, res.data])
    }

    useEffect(() => {
        getUsers()
        getLabs()
        getComputers()
        getFts()
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
        updateComputer,
        fts,
        getFts,
        createFt,
        deleteFt,
        getFt,
        updateFt,
        code,
        setCode,
        repo,
        getReportes,
        user,
        token,
        login
        }}>
            {children}
        </protoContext.Provider>
}