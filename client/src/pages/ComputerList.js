import {useMyContex} from '../context/prototypeContext'
import {Link, useParams} from 'react-router-dom'
import {ComputerCard} from '../components/ComputerCard'
import { Navigation } from '../components/Navigation'
import { Search } from '../components/Search'




import '../css/ComputerList.css'

export function ComputerList() {

    const { computers, code} = useMyContex()
    const params = useParams()

    const codescann = params.code

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
    let res = []
    if(codescann){
      const res2 = computers.find(item => item.code === codescann)
      res.push(res2)
      results = res
    }

  return (
    <div className='container'>
      <Navigation />
        <Link className="btn-new-computer" to='/ComputerForm'>Nueva Computadora</Link>
      <div className='container2-computer'>
        {results.map(computer => (
            <ComputerCard computer={computer} key={computer._id} />
        ))}
      </div>
      <Search />
    </div>
  )
}
