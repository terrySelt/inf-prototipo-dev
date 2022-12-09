import {useMyContex} from '../context/prototypeContext'
import {Link} from 'react-router-dom'
import {LabCard} from '../components/LabCard'
import {Navigation} from '../components/Navigation'
import '../css/LabList.css'

export function LabList() {
    const { labs } = useMyContex()

    console.log(labs)

    if(labs.length === 0) return (
        <div className="not-labs">
            <Navigation />
            <h1>No hay laboratorios</h1>
            <Link className="btn-new-lab" to="/LabForm">Nuevo Laboratorio</Link>
        </div>
    )

  return (
    <div className='container'>
        <Navigation />
        <div className='container2-lab'>
            {labs.map(lab =>(
                <LabCard lab={lab} key={lab._id}/>
            ))
            }
        </div>
        <Link className='btn-new-lab' to='/LabForm'>Nuevo Laboratorio</Link>
    </div>
  )
}
