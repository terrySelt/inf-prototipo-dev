import { Link } from "react-router-dom"
import '../css/navigation.css'

export function Navigation() {
  return (
    <div className="nav">
        <nav>
            <ul>
                <li>
                    <Link to='/userlist' className='form-user-regresar'>Usuarios</Link>
                </li>
                <li>
                    <Link to='/lablist' className='form-lab-regresar'>Laboratorios</Link>
                </li>
                <li>
                    <Link to='/ComputerList' className='form-user-regresar'>Computadoras</Link>
                </li>
                <li>
                    <Link to='/FtList' className='form-user-regresar'>Fichas técnicas</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
