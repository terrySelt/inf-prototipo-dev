import toast from 'react-hot-toast'
import { useMyContex } from '../context/prototypeContext'
import { useNavigate } from 'react-router-dom'
import '../css/UserList.css'

export function UserCard({user}) {

  const {deleteUser} = useMyContex()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='parrafo-rotification-user'>Esta seguro de eliminar el usuario? <strong>{id}</strong></p>
        <div className='btn-notification-user'>
          <button onClick={() => {
            deleteUser(id)
            toast.dismiss(t.id)
            }}>Eliminar</button>
          <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style:{
        background: "#202020"
      }
    })
  }
  return (
      <div className='card-user'>
        {user.image && <div className='img-div-user'><img src={user.image.url} alt='joder' /></div>}
        <div className='content-user'>
          <div className='name-user'>
            <h2>{user.name}</h2>
          </div>
          <div className='data-user'>
            <p>{user.type}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <div className='action-btn-user'>
              <button onClick={() => navigate(`/users/${user._id}`)}>Actualizar</button>
              <button onClick={() => handleDelete(user._id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>  
  )
}
