import "../css/ComputerInfoCard.css"
import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Navigation} from '../components/Navigation'

export function ComputerInfoCard() {

  const {deleteComputer} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()

  const id = params.id

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='parrafo-rotification-ic'>Seguro quieres eliminar la computadora? <strong>{id}</strong> </p>
        <div className='btn-notification-ic'>
          <button onClick={() => {
            deleteComputer(id)
            toast.dismiss(t.id)
            navigate('/computerlist')
            }}>Eliminar</button>
          <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: '#202020'
      }
    })
  }
  return (
    <div className="container">
      <Navigation />
      <div className="containercic">
        <div className='header-ic'>
          <div className='regresar-ic'>
          <Link to='/ComputerList' className='ic-regresar'>Regresar</Link>
          </div>
          <div>
            <h3>Caracteristicas</h3>
          </div>
        </div>
        <div className='data-computer-ic'>
          <div className='div-p-ic'>
            <p>Codigo</p>
            <p>{params.code}</p>
          </div>
          <div className='div-p-ic'>
            <p>Laboratorio</p>
            <p>{params.lab}</p>
          </div>
          <div className='div-p-ic'>
            <p>Tipo</p>
            <p>{params.type}</p>
          </div>
          <div className='div-p-ic'>
            <p>Marca</p>
            <p>{params.brand}</p>
          </div>
          <div className='div-p-ic'>
            <p>Serie</p>
            <p>{params.serie}</p>
          </div>
          <div className='div-p-ic'>
            <p>Modelo</p>
            <p>{params.model}</p>
          </div>
          <div className='div-p-ic'>
            <p>Procesador</p>
            <p>{params.processor}</p>
          </div>
          <div className='div-p-ic'>
            <p>Ram</p>
            <p>{params.memory}</p>
          </div>
          <div className='div-p-ic'>
            <p>D. duro</p>
            <p>{params.disk}</p>
          </div>
          <div className='div-p-ic'>
            <p>T. Grafica</p>
            <p>{params.graphic}</p>
          </div>
          <div className='div-p-ic'>
            <p>S.O.</p>
            <p>{params.system}</p>
          </div>
          <div className='action-btn-ic'>
            <button onClick={() => navigate(`/computers/${id}`)}>Actualizar</button>
            <button onClick={() => handleDelete(id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
