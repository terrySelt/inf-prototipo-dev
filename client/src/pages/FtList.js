import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function FtList() {
    const { fts} = useMyContex()
    const navigate = useNavigate()
    const params = useParams()

    const code = params.code

    const existe = fts.filter( el => el.code === code )
    
    if(existe.length === 0) return (
        <div className="not-fts">
            <NavigationWeb />
            <Navigation />
            <h1>No hay Fichas técnicas</h1>
            <Link className="btn-new-lab" to="/ComputerList">Regresar</Link>
        </div>
    )

   return (
    <div className='container'>
        <NavigationWeb />
        <Navigation />
        <div className='container2-ft'>
            <div className='header-form-ft'>
            <div className='regresar-ft'>
            <Link to='/computerlist' className='form-ft-regresar'>Regresar</Link>
            </div>
            <div>
            <h3>Fichas técnicas</h3>
            </div>
            </div>
            {existe.map(ft => (<button key={ft._id} className='datetime-ft' onClick={() => navigate(`/ftdate/${ft._id}/${ft.code}/${ft.date_admission}/${ft.lab}/${ft.brand}/${ft.model}/${ft.diagnosis}/${ft.m_preventive}/${ft.m_corrective}/${ft.m_logical}/${ft.disarmed_e}/${ft.cleaning_tm}/${ft.cleaning_ram}/${ft.cleaning_cc}/${ft.cleaning_tv}/${ft.cleaning_fa}/${ft.change_pt}/${ft.cleaning_q}/${ft.cleaning_ld}/${ft.cleaning_tr}/${ft.check_e}/${ft.causes}/${ft.conclusion}/${ft.installation_so}/${ft.installation_drivers}/${ft.installation_oficce}/${ft.activation_oficce}/${ft.installation_utility}/${ft.installation_antivirus}/${ft.installation_as}/${ft.update_so}/${ft.update_drivers}/${ft.update_utility}/${ft.date_departure}/${ft.responsible}`)}>{ft.date_departure}</button>))}
        </div>
    </div>
  ) 
}