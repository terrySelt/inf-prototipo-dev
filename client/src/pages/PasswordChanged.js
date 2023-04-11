import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/2.png'

export function PasswordChanged() {

    const navigate = useNavigate()

  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
    <div className='container bg-secondary w-5/6 h-auto rounded-md p-4 flex flex-col items-center lg:w-1/4 lg:p-6'>
      <div className='flex justify-center mt-6 mb-2'>
        <img src={logo} alt={logo}/>
      </div>
      <p className='text-white text-center my-4'>Contraseña cambiada, ya puedes ingresar a la aplicación con tu nueva contraseña</p>
      <div className='w-full h-10 mb-6'>
        <button className='btn-primary w-full h-full hover:bg-slate-900 focus:outline-none flex justify-center items-center' onClick={() => navigate("/")}>
          Login            
        </button>
      </div>    
    </div>
  </div>
  )
}
