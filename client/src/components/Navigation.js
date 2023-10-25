import { Link } from "react-router-dom"
import { useMyContex } from "../context/prototypeContext"
import { useEffect, useState} from 'react'
import { RiComputerFill, RiHomeSmileFill } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi'
import '../css/style.css'

export function Navigation() {
    const {user, token, getUser} = useMyContex()

    const [navusernavigation, setNavusernavigation] = useState('notshownavigation')

    const [navcomputernavigation, setNavcomputernavigation] = useState('notshownavigationcomputer')

    const userconfig = () =>{
        let val = navusernavigation
        if(val==="notshownavigation"){
            setNavusernavigation('nav-usernavigation')
        }else{
            setNavusernavigation('notshownavigation')
        }
    }

    const computerconfig = () =>{
        let val = navcomputernavigation
        if(val==="notshownavigationcomputer"){
            setNavcomputernavigation('nav-computernavigation')
        }else{
            setNavcomputernavigation('notshownavigationcomputer')
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
    <div className="fixed bottom-0 w-full h-auto z-10 lg:hidden">
        <nav className={navcomputernavigation}>
            <ul>
                <li>
                    <Link to='/ComputerList' className='text-md text-white'>Computadoras</Link>
                </li>
                <li>
                    <Link  to='/ComputerListDelete' className='text-md text-rose-500'>Computadoras eliminandas</Link>
                </li>
            </ul>
        </nav>
        <nav className={navusernavigation}>
            <ul>
                <li>
                    <Link to='/MyAcount' className='text-md text-white'>Mi cuenta</Link>
                </li>
                <li>
                    <Link onClick={closedSesion} to='/' className='text-md text-white'>Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
        <nav className="p-1 bg-sky-900 w-full">
            <ul className="flex justify-around items-center text-white tpn font-semibold">
                <li>
                    <Link onClick={computerconfig} className='flex flex-col justify-center items-center'>< RiComputerFill className="w-6 h-6"/><p>Computadoras</p></Link>
                </li>
                <li>
                    <Link to='/lablist' className='flex flex-col justify-center items-center'>< RiHomeSmileFill className="w-6 h-6"/><p>Laboratorios</p></Link>
                </li>
                <li>
                    <Link to='/userlist' className='flex flex-col justify-center items-center'>< HiUserGroup className="w-6 h-6"/><p>Usuarios</p></Link>
                </li>
                <li>
                    <Link onClick={userconfig} className='flex flex-col justify-center items-center'><img className='w-6 h-6 rounded-full' src={image} alt='imagen del ususario' /><p>Mi cuenta</p></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
