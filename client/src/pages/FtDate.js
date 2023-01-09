import '../css/ftdate.css'
import toast from 'react-hot-toast'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Navigation} from '../components/Navigation'

export function FtDate() {

    const {deleteFt} = useMyContex()
    const navigate = useNavigate()
    const params = useParams()

    const id = params.id
    const handleDelete = (id) => {
      toast((t) => (
        <div>
          <p className='parrafo-rotification-ftdate'>Seguro quieres eliminar la ficha técnica? <strong>{id}</strong> </p>
          <div className='btn-notification-ftdate'>
            <button onClick={() => {
              deleteFt(id)
              toast.dismiss(t.id)
              navigate('/computerlist')
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
      <div className="container">
        <Navigation />
        <div className="containerftdate">
          <div className='header-ftdate'>
            <div className='regresar-ftdate'>
            <Link to='/ComputerList' className='ftdate-regresar'>Regresar</Link>
            </div>
            <div>
              <h3>Caracteristicas</h3>
            </div>
          </div>
          <div className='data-computer-ftdate'>
            <div className='div-p-ftdate'>
              <p>Codigo</p>
              <p>{params.code}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>fecha de admision</p>
              <p>{params.date_admission}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Laboratorio</p>
              <p>{params.lab}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Marca</p>
              <p>{params.brand}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Modelo</p>
              <p>{params.model}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Diagnostico</p>
              <p>{params.diagnosis}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Mantenimiento preventivo</p>
              <p>{params.m_preventive}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Desaramdo del equipo</p>
              <p>{params.disarmed_e}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de la tarjeta madre</p>
              <p>{params.cleaning_tm}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpueza de la memoria RAM</p>
              <p>{params.cleaning_ram}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de clables y conectores</p>
              <p>{params.cleaning_cc}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de la tarjeta de video</p>
              <p>{params.cleaning_tv}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de la fuente de alimentación</p>
              <p>{params.cleaning_fa}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Cambio de pasta térmica</p>
              <p>{params.change_pt}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de coolers</p>
              <p>{params.cleaning_q}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza del lector de DVD</p>
              <p>{params.cleaning_ld}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Limpieza de la tarjeta de red</p>
              <p>{params.cleaning_tr}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Verificación del equipo</p>
              <p>{params.check_e}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Mantenimiento lógico</p>
              <p>{params.m_logical}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación del S.O.</p>
              <p>{params.installation_so}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de drivers</p>
              <p>{params.installation_drivers}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de office</p>
              <p>{params.installation_oficce}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Activación de office</p>
              <p>{params.activation_oficce}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de utilitarios</p>
              <p>{params.installation_utility}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de drivers</p>
              <p>{params.installation_drivers}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de office</p>
              <p>{params.installation_oficce}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Activación de office</p>
              <p>{params.activation_oficce}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de utilitarios</p>
              <p>{params.installation_utility}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de antivirus</p>
              <p>{params.installation_antivirus}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Instalación de software de aplicación</p>
              <p>{params.installation_as}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Actualización del S.O.</p>
              <p>{params.update_so}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Actualización de drivers</p>
              <p>{params.update_drivers}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Actualización de utilitarios</p>
              <p>{params.update_utility}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Mantenimiento correctivo</p>
              <p>{params.m_corrective}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Causas</p>
              <p>{params.causes}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Conclusion</p>
              <p>{params.conclusion}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Fecha de salida</p>
              <p>{params.date_departure}</p>
            </div>
            <div className='div-p-ftdate'>
              <p>Responsable</p>
              <p>{params.responsible}</p>
            </div>
            <div className='action-btn-ftdate'>
              <button onClick={() => navigate(`/Fts/${id}`)}>Actualizar</button>
              <button onClick={() => handleDelete(id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    )  
}
