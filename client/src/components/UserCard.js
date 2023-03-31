import toast from 'react-hot-toast'
import { useMyContex } from '../context/prototypeContext'
import { useNavigate } from 'react-router-dom'

export function UserCard({user}) {

  const {deleteUser} = useMyContex()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white'>Esta seguro de eliminar el usuario? <strong>{id}</strong></p>
        <div className='w-full flex justify-around pt-2'>
          <button className='btn-terceary bg-septimo text-white' onClick={() => {
            deleteUser(id)
            toast.dismiss(t.id)
            }}>Eliminar</button>
          <button className='btn-terceary text-octavo bg-white' onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style:{
        background: "#202020"
      }
    })
  }

  return (
      <div className='bg-white w-48 h-64 relative shadow-2xl rounded-sm flex-none'>
        {user.image && <div className='w-36 h-36 absolute -top-8 left-6 rounded-lg shadow-2xl'><img className='w-full h-full' src={user.image.url} alt='imagen del ususario' /></div>}
        <div className='absolute bottom-0 p-2 w-full rounded-sm'>
          <div className='mb-1'>
            <h2 className='text-center font-bold text-gray-600'>{user.name}</h2>
          </div>
          <div className='text-center text-sm text-gray-500 font-medium'>
            <p className='mb-1'>{(user.roles.length > 1 ) ? "admin" : "user"}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <div className='w-full flex justify-around mt-3'>
              <button className='btn-terceary text-octavo border-2 border-octavo' onClick={() => navigate(`/users/${user._id}`)}>Actualizar</button>
              <button className='btn-terceary bg-septimo text-white' onClick={() => handleDelete(user._id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>  
  )
}
