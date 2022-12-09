import {useMyContex} from '../context/prototypeContext'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import '../css/FtList.css'

export function FtList() {
    const { fts } = useMyContex()
    const navigate = useNavigate()

    if(fts.length === 0) return (
        <div className="not-fts">
            <Navigation />
            <h1>No hay Fichas técnicas</h1>
            <Link className="btn-new-lab" to="/LabForm">Nuevo ficha técnica</Link>
        </div>
    )

  return (
    <div className='container'>
        <Navigation />
        <div className='container2-ft'>
            {fts.map(ft => (<button key={ft._id} className='datetime-ft' onClick={() => navigate(`/fts/${ft._id}`)}>{ft.date_departure}</button>))}
        </div>
        <Link className='btn-new-lab' to='/FtForm'>Nueva ficha técnica</Link>
    </div>
  )
}