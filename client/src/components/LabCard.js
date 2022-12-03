import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate} from 'react-router-dom'
import '../css/LabList.css'

export function LabCard({lab}) {

  const {deleteLab} = useMyContex()
  const navigate = useNavigate()
  
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='parrafo-rotification-lab'>Estas seguro de eliminar el laboratorio? <strong>{id}</strong></p>
        <div className='btn-notification-lab'>
          <button onClick={() => { 
            deleteLab(id)
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
    <div className='card-lab'>
      <div className='name-lab'>
        <h2>{lab.name}</h2>
      </div>
      <div className='data-lab'>
        <div>
          <p>{lab.quantity}</p>
          <label>Cant. PCs</label>
        </div>
        <div>
          <p>{lab.responsible}</p>
          <label>Responsable</label>
        </div>
      </div>
      <div className='action-btn-lab'>
        <button onClick={() => navigate(`/labs/${lab._id}`)}>Actualizar</button>
        <button onClick={() => handleDelete(lab._id)}>Eliminar</button>
      </div>
    </div>
  )
}


