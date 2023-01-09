import {useMyContex} from '../context/prototypeContext'
import {Link} from 'react-router-dom'
import {ComputerCard} from '../components/ComputerCard'
import { Navigation } from '../components/Navigation'
import { Search } from '../components/Search'
import '../css/ComputerList.css'

export function ComputerList() {
    const { computers, code } = useMyContex()

    if(computers.length === 0) return(
      <div className="not-computers">
        <Navigation />
        <h1>No hay computadoras</h1>
        <Link className="btn-new-computer" to="/ComputerForm">Nueva Computadora</Link>
      </div>
    )

    let results = []

    if(!code){
      results = computers
    }else{
          results = computers.filter(item => item.code.toString().toLowerCase().includes(code.toLowerCase()))
    }

  return (
    <div className='container'>
      <Navigation />
      <div className='container2-computer'>
        {results.map(computer => (
            <ComputerCard computer={computer} key={computer._id} />
        ))}
      </div>
      <Link className="btn-new-computer" to='/ComputerForm'>Nueva Computadora</Link>
      <Search />
    </div>
  )
}
