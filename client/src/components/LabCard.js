import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate} from 'react-router-dom'

export function LabCard({lab}) {

  const {deleteLab} = useMyContex()
  const navigate = useNavigate()
  
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white'>Estas seguro de eliminar el laboratorio? <strong>{id}</strong></p>
        <div className='w-full flex justify-around pt-2'>
          <button className='btn-terceary bg-septimo text-white' onClick={() => { 
            deleteLab(id)
            toast.dismiss(t.id)
            }}>Elminar</button>
          <button className='btn-terceary text-octavo bg-white' onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ),{
      style: {
        background: "#202020"
      }
    })
  }

  return (
    <div className='bg-white w-48 h-auto relative shadow-2xl rounded-sm flex-none p-2'>
      <div className='w-full flex justify-center'>
        <h2 className='font-black'>{lab.name}</h2>
      </div>
      <div className='flex'>
        <div className='w-1/2 h-24 flex flex-col justify-end'>
          <p className='text-center text-sm'>{lab.quantity}</p>
          <label className='text-black text-sm'>Cant. PCs</label>
        </div>
        <div className='w-1/2 h-24 flex flex-col justify-end'>
          <p className='text-center text-sm'>{lab.responsible}</p>
          <label className='text-black text-sm'>Responsable</label>
        </div>
      </div>
      <div className='w-full flex justify-around'>
        <button className='btn-terceary text-octavo border-2 border-octavo' onClick={() => navigate(`/labs/${lab._id}`)}>Actualizar</button>
        <button className='btn-terceary bg-septimo text-white' onClick={() => handleDelete(lab._id)}>Eliminar</button>
      </div>
    </div>
  )
}


