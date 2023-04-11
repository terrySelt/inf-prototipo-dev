import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/2.png'
import { MdMarkEmailRead } from "react-icons/md";

export function EmailSend() {

  const navigate = useNavigate()

  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
    <div className='container bg-secondary w-5/6 h-auto rounded-md p-4 flex flex-col items-center lg:w-1/4 lg:p-6'>
      <div className='flex justify-center mt-6 mb-2'>
        <img src={logo} alt={logo}/>
      </div>
      <p className='text-white text-center'>Mail enviado, revisa tu correo electrónico para cambiar tu contraseña</p>
      <div className='bg-slate-900 w-24 h-24 flex justify-center items-center rounded-full m-4'>
        <MdMarkEmailRead className='w-16 h-16 text-white'/>
      </div>
      <div className='w-full h-10 mb-6'>
        <button className='btn-primary w-full h-full hover:bg-slate-900 focus:outline-none flex justify-center items-center' onClick={() => navigate("/")}>
          Login            
        </button>
      </div>    
    </div>
  </div>
  )
}
