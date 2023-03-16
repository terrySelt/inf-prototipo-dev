import { Link } from "react-router-dom"
import { useMyContex } from "../context/prototypeContext"
import { useEffect, useState} from 'react'
import { RiComputerFill, RiHomeSmileFill } from 'react-icons/ri'
import { IoDocumentText } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi'
import '../css/navigation.css'

export function Navigation() {
    const {user, token, getUser} = useMyContex()

    const userconfig = () =>{

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
    <div className="navigation">
        <nav className="nav-user">
            <ul>
                <li>
                    <Link to='/MyAcount' className='navigation-icon'>Mi cuenta</Link>
                </li>
                <li>
                    <Link onClick={closedSesion} to='/' className='navigation-icon'>Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
        <nav className="nav-menu">
            <ul>
                <li>
                    <Link to='/ComputerList' className='navigation-icon'>< RiComputerFill className="icon"/></Link>
                </li>
                <li>
                    <Link to='/lablist' className='navigation-icon'>< RiHomeSmileFill className="icon"/></Link>
                </li>
                <li>
                    <Link to='/Reportes' className='navigation-icon'>< IoDocumentText className="icon"/></Link>
                </li>
                <li>
                    <Link to='/userlist' className='navigation-icon'>< HiUserGroup className="icon"/></Link>
                </li>
                <li>
                    <Link onClick={userconfig} className='navigation-icon'><img className='avatar icon' src={image} alt='imagen del ususario' /></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
