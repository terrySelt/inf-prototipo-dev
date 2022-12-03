import toast from 'react-hot-toast'
import '../css/ComputerList.css'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate} from 'react-router-dom'

export function ComputerCard({computer}) {

  const {deleteComputer} = useMyContex()

  const navigate = useNavigate()
    
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='parrafo-rotification-computer'>Seguro quieres eliminar la computadora? <strong>{id}</strong> </p>
        <div className='btn-notification-computer'>
          <button onClick={() => {
            deleteComputer(id)
            toast.dismiss(t.id)
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
    <div className='card-computer'>
      {computer.image && <div className='img-div-computer'><img src={computer.image.url} alt='Imagen URL' /></div>}
      <div className='content-computer'>
        <div className='name-computer'>
          <h2>{computer.code}</h2>
        </div>
        <div className='data-computer'>
          <div className='div-p-computer'>
            <p>Laboratorio</p>
            <p>{computer.lab}</p>
          </div>
          <div className='div-p-computer'>
            <p>Tipo</p>
            <p>{computer.type}</p>
          </div>
          <div className='div-p-computer'>
            <p>Marca</p>
            <p>{computer.brand}</p>
          </div>
          <div className='div-p-computer'>
            <p>Serie</p>
            <p>{computer.serie}</p>
          </div>
          <div className='div-p-computer'>
            <p>Modelo</p>
            <p>{computer.model}</p>
          </div>
          <div className='div-p-computer'>
            <p>Procesador</p>
            <p>{computer.processor}</p>
          </div>
          <div className='div-p-computer'>
            <p>Ram</p>
            <p>{computer.memory}</p>
          </div>
          <div className='div-p-computer'>
            <p>D. duro</p>
            <p>{computer.disk}</p>
          </div>
          <div className='div-p-computer'>
            <p>T. Grafica</p>
            <p>{computer.graphic}</p>
          </div>
          <div className='div-p-computer'>
            <p>S.O.</p>
            <p>{computer.system}</p>
          </div>
          <div className='action-btn-computer'>
            <button onClick={() => navigate(`/computers/${computer._id}`)}>Actualizar</button>
            <button onClick={() => handleDelete(computer._id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
