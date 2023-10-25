import { Link } from "react-router-dom"
import { useMyContex } from "../context/prototypeContext"
import { useEffect, useState} from 'react'
import logo from '../assets/images/2.png'

export function NavigationWeb() {
    const {user, token, getUser} = useMyContex()

    const [navuserweb, setNavuserweb] = useState('notshowweb')
    const [navcomputerweb, setNavcomputerweb] = useState('notshowwebcomputer')

    const userconfig = () =>{
        let val = navuserweb
        if(val==="notshowweb"){
            setNavuserweb('nav-userweb')
        }else{
            setNavuserweb('notshowweb')
        }
    }

    const computerconfig = () =>{
        let val = navcomputerweb
        if(val==="notshowwebcomputer"){
            setNavcomputerweb('nav-computerweb')
        }else{
            setNavcomputerweb('notshowwebcomputer')
        }
    }

    const closedSesion = () => {
        document.cookie = `token=${token}; max-age=${0}; path=/; samesite=strict`
    }

    const [image, setImage] = useState(null)

    useEffect(() => {
        (async() => {

          if(user._id){
            const user2 = await getUser(user._id)
            setImage(user2.image.url)
          }
        })()    
        },[getUser,user._id])

  return (
    <div className="w-full h-20 bg-secondary hidden lg:block">
        <nav className={navuserweb}>
            <ul>
                <li className="mb-3">
                    <Link to='/MyAcount' className='text-md text-white'>Mi cuenta</Link>
                </li>
                <li>
                    <Link onClick={closedSesion} to='/' className='text-md text-white'>Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
        <nav className="mx-20">
            <ul className="flex justify-between">
                <div>
                    <div className="h-20" >
                        <img src={logo} alt={logo} className="w-auto h-20"/>
                    </div>
                </div>
                <div className="flex space-x-1">
                    <li className="link">
                        <Link onClick={computerconfig} className="font-semibold tracking-wider relative">Computadoras
                            <nav className={navcomputerweb}>
                                <ul>
                                    <li className="mb-3">
                                        <Link to='/ComputerList' className='text-md text-white'>Computadoras</Link>
                                    </li>
                                    <li>
                                        <Link to='/ComputerListDelete' className='text-md text-rose-500'>Computadoras eliminandas</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to='/lablist' className='font-semibold tracking-wider'>Laboratorio</Link>
                    </li>
                    <li className="link">
                        <Link to='/userlist' className='font-semibold tracking-wider'>Usuarios</Link>
                    </li>
                    <li className="link">
                        <Link onClick={userconfig} className='flex space-x-2 justify-center items-center'><p className="text-white font-semibold tracking-wider">Mi cuenta</p><img className='w-11 h-11 rounded-full' src={image} alt='imagen del ususario' /></Link>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
  )
}
