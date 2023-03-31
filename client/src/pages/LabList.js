import {useMyContex} from '../context/prototypeContext'
import {Link} from 'react-router-dom'
import {LabCard} from '../components/LabCard'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'
import { Head } from '../components/Head'

export function LabList() {
    const { labs } = useMyContex()

    if(labs.length === 0) return (
        <div className="not-labs">
            <Navigation />
            <h1>No hay laboratorios</h1>
            <Link className="btn-new-lab" to="/LabForm">Nuevo Laboratorio</Link>
        </div>
    )

  return (
    <div className='w-full h-screen bg-primary flex flex-col items-center pb-16'>
        <Head />
        <NavigationWeb />
        <Navigation />
        <div className='w-full h-auto items-center bg-secondary flex px-2 space-x-2 py-6 mb-6 overflow-x-auto overscroll-x-contain lg:mt-4'>
            {labs.map(lab =>(
                <LabCard lab={lab} key={lab._id}/>
            ))
            }
        </div>
        <Link className='btn-primary-new' to='/LabForm'>Nuevo Laboratorio</Link>
    </div>
  )
}
