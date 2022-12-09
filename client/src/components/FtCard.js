import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate} from 'react-router-dom'
import '../css/FtList.css'

export function FtCard({ft}) {

  const {deleteFt} = useMyContex()
  const navigate = useNavigate()
  
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='parrafo-rotification-ft'>Estas seguro de eliminar la ficha técnica? <strong>{id}</strong></p>
        <div className='btn-notification-ft'>
          <button onClick={() => { 
            deleteFt(id)
            toast.dismiss(t.id)
            }}>Elminar</button>
          <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ),{
      style: {
        background: "#202020"
      }
    })
  }

  return (
    <div className='card-ft'>
      <div className='data-ft'>
        </div>
          <label>Code:</label>
          <p>{ft.code}</p>
        <div>
        </div>
          <label>Fecha inicio:</label>
          <p>{ft.date_admission}</p>
        <div>
        </div>
          <label>Laboratorio:</label>
          <p>{ft.lab}</p>
        <div>
        </div>
          <label>Marca:</label>
          <p>{ft.brand}</p>
        <div>
        </div>
          <label>Tipo:</label>
          <p>{ft.type}</p>
        <div>
        </div>
          <label>Modelo:</label>
          <p>{ft.model}</p>
        <div>
        </div>
          <label>Diagnostico:</label>
          <p>{ft.diagnosis}</p>
        <div>
      </div>
      <div className='action-btn-ft'>
        <button onClick={() => navigate(`/fts/${ft._id}`)}>Actualizar</button>
        <button onClick={() => handleDelete(ft._id)}>Eliminar</button>
      </div>
    </div>
  )
}
