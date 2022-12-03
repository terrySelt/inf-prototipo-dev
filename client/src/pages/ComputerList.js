import {useMyContex} from '../context/prototypeContext'
import {Link} from 'react-router-dom'
import {ComputerCard} from '../components/ComputerCard'
import { Navigation } from '../components/Navigation'
import '../css/ComputerList.css'

export function ComputerList() {
    const { computers } =useMyContex()

    if(computers.length === 0) return(
      <div className="not-computers">
        <Navigation />
        <h1>No hay computadoras</h1>
        <Link className="btn-new-computer" to="/ComputerForm">Nueva Computadora</Link>
      </div>
    )

  return (
    <div className='container'>
      <Navigation />
      <div className='container2-computer'>
        {computers.map(computer => (
            <ComputerCard computer={computer} key={computer._id} />
        ))}
      </div>
      <Link className="btn-new-computer" to='/ComputerForm'>Nueva Computadora</Link>
    </div>
  )
}
