import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function FtDate() {

    const {deleteFt, restoreFt} = useMyContex()
    const navigate = useNavigate()
    const params = useParams()

    const id = params.id

    let state = params.state
    
    let newstate = {}
    if(state === 'false'){
      newstate = {
        state: true
      }
    }else{
      newstate = {
        state: false
      }
    }

    const handleDelete = (id) => {
      toast((t) => (
        <div>
          {state === 'false' ? <p className='text-white'>Seguro quieres eliminar la ficha técnica? <strong>{id}</strong> </p>:
          <p className='text-white'>Seguro quieres restaurar la ficha técnica? <strong>{id}</strong> </p>
          }
          <div className='w-full flex justify-around pt-2'>
            {state === 'false' ? <button className='btn-terceary bg-septimo text-white' onClick={() => {
              deleteFt(id, newstate)
              toast.dismiss(t.id)
              navigate('/computerlist')
              }}>Eliminar</button>:
            <button className='btn-terceary bg-septimo text-white' onClick={() => {
              restoreFt(id, newstate)
              toast.dismiss(t.id)
              navigate('/computerlist')
              }}>Restaurar</button>
              }
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
      <div className="bg-primary w-full h-auto flex flex-col justify-start items-center">
        <NavigationWeb />
        <Navigation />
        <div className="bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-2/4 lg:p-4 lg:mt-8 lg:mb-10">
          <div className='p-4 pb-0'>
            <Link to='/ComputerList' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
              <h3 className='text-white font-bold tracking-wider'>Caracteristicas</h3>
          </div>
          <div className='p-4 text-white text-sm font-light'>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Codigo:</p>
              <p className='w-1/2 h-auto'>{params.code}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>fecha de admision:</p>
              <p className='w-1/2 h-auto'>{params.date_admission}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Laboratorio:</p>
              <p className='w-1/2 h-auto'>{params.lab}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Marca:</p>
              <p className='w-1/2 h-auto'>{params.brand}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Modelo:</p>
              <p className='w-1/2 h-auto'>{params.model}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Diagnostico:</p>
              <p className='w-1/2 h-auto'>{params.diagnosis}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Mantenimiento preventivo:</p>
              <p className='w-1/2 h-auto'>{params.m_preventive}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Desaramdo del equipo:</p>
              <p className='w-1/2 h-auto'>{params.disarmed_e}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de la tarjeta madre:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_tm}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpueza de la memoria RAM:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_ram}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de clables y conectores:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_cc}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de la tarjeta de video:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_tv}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de la fuente de alimentación:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_fa}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Cambio de pasta térmica:</p>
              <p className='w-1/2 h-auto'>{params.change_pt}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de coolers:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_q}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza del lector de DVD:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_ld}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Limpieza de la tarjeta de red:</p>
              <p className='w-1/2 h-auto'>{params.cleaning_tr}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Verificación del equipo:</p>
              <p className='w-1/2 h-auto'>{params.check_e}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Mantenimiento lógico:</p>
              <p className='w-1/2 h-auto'>{params.m_logical}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación del S.O.:</p>
              <p className='w-1/2 h-auto'>{params.installation_so}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de drivers:</p>
              <p className='w-1/2 h-auto'>{params.installation_drivers}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de office:</p>
              <p className='w-1/2 h-auto'>{params.installation_oficce}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Activación de office:</p>
              <p className='w-1/2 h-auto'>{params.activation_oficce}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de utilitarios:</p>
              <p className='w-1/2 h-auto'>{params.installation_utility}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de drivers:</p>
              <p className='w-1/2 h-auto'>{params.installation_drivers}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de office:</p>
              <p className='w-1/2 h-auto'>{params.installation_oficce}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Activación de office:</p>
              <p className='w-1/2 h-auto'>{params.activation_oficce}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de utilitarios:</p>
              <p className='w-1/2 h-auto'>{params.installation_utility}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de antivirus:</p>
              <p className='w-1/2 h-auto'>{params.installation_antivirus}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Instalación de software de aplicación:</p>
              <p className='w-1/2 h-auto'>{params.installation_as}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Actualización del S.O.:</p>
              <p className='w-1/2 h-auto'>{params.update_so}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Actualización de drivers:</p>
              <p className='w-1/2 h-auto'>{params.update_drivers}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Actualización de utilitarios:</p>
              <p className='w-1/2 h-auto'>{params.update_utility}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Mantenimiento correctivo:</p>
              <p className='w-1/2 h-auto'>{params.m_corrective}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Causas:</p>
              <p className='w-1/2 h-auto'>{params.causes}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Conclusion:</p>
              <p className='w-1/2 h-auto'>{params.conclusion}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Fecha de salida:</p>
              <p className='w-1/2 h-auto'>{params.date_departure}</p>
            </div>
            <div className='flex border-b p-1 mb-2 space-x-2'>
              <p className='w-1/2 h-auto'>Responsable:</p>
              <p className='w-1/2 h-auto'>{params.responsible}</p>
            </div>
            <div className='w-full flex justify-around mt-3'>
              <button className='btn-terceary bg-terceary text-octavo border-2 border-octavo' onClick={() => navigate(`/Fts/${id}`)}>Actualizar</button>
              {state === 'false' ? <button className='btn-terceary bg-septimo text-white' onClick={() => handleDelete(id)}>Eliminar</button>:
              <button className='btn-terceary bg-septimo text-white' onClick={() => handleDelete(id)}>Resturar</button>
              }
            </div>
          </div>
        </div>
      </div>
    )  
}
