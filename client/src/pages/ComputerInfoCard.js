import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function ComputerInfoCard() {

  const {deleteComputer} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()

  const id = params.id

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white'>Seguro quieres eliminar la computadora? <strong>{id}</strong> </p>
        <div className='w-full flex justify-around pt-2'>
          <button className='btn-terceary bg-septimo text-white' onClick={() => {
            deleteComputer(id)
            toast.dismiss(t.id)
            navigate('/computerlist')
            }}>Eliminar</button>
          <button className='btn-terceary text-octavo bg-white' onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: '#202020'
      }
    })
  }
  return (
    <div className="bg-primary w-full h-screen flex flex-col justify-start items-center">
      <NavigationWeb />
      <Navigation />
      <div className="bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/3 lg:p-4 lg:mt-8 lg:mb-10">
        <div className='p-4 pb-0'>
          <Link to='/ComputerList' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Caracteristicas</h3>
        </div>
        <div className='p-4 text-white text-sm font-light'>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Codigo:</p>
            <p className='w-1/2 h-auto'>{params.code}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Laboratorio:</p>
            <p className='w-1/2 h-auto'>{params.lab}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Modelo:</p>
            <p className='w-1/2 h-auto'>{params.model}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Marca:</p>
            <p className='w-1/2 h-auto'>{params.brand}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Procesador:</p>
            <p className='w-1/2 h-auto'>{params.processor}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Ram:</p>
            <p className='w-1/2 h-auto'>{params.memory}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Disco duro:</p>
            <p className='w-1/2 h-auto'>{params.disk}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Tarjeta Grafica:</p>
            <p className='w-1/2 h-auto'>{params.graphic}</p>
          </div>
          <div className='flex border-b p-1 mb-2'>
            <p className='w-1/2 h-auto'>Sistema Operativo:</p>
            <p className='w-1/2 h-auto'>{params.system}</p>
          </div>
          <div className='w-full flex justify-around mt-3'>
            <button className='btn-terceary bg-terceary text-octavo border-2 border-octavo' onClick={() => navigate(`/computers/${id}`)}>Actualizar</button>
            <button className='btn-terceary bg-septimo text-white' onClick={() => handleDelete(id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
