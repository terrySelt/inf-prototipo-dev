import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function FtListDelete() {

    const { fts} = useMyContex()
    const navigate = useNavigate()
    const params = useParams()

    const code = params.code

    const existe = fts.filter( el => el.code === code )

    const ftdelete = existe.filter(item => item.state === true)

    if(ftdelete.length === 0) return (
        <div className="bg-primary w-full h-screen flex flex-col justify-start items-center">
          <NavigationWeb />
          <Navigation />
          <div className='bg-secondary w-5/6 h-auto rounded-md mt-8 mb-16 p-4 lg:w-1/4 lg:p-4 lg:mt-8 lg:mb-10'>
            <Link className="w-full text-cuarto flex justify-end font-semibold tracking-wider" to="/ComputerList">Regresar</Link>
            <div className='flex justify-between pt-3 pb-1'>
              <p onClick={() => navigate(`/FtList/${code}`)} className='text-white font-bold tracking-wider'>Fichas técnicas</p>
              <button onClick={() => navigate(`/FtListDelete/${code}`)} className='btn-eliminated text-rose-500 border-2 border-rose-500 px-2 tracking-wider'>Eliminadas</button>
            </div>
            <h1 className='text-white font-bold tracking-wider mt-2'>No hay Fichas técnicas</h1>
          </div>
        </div>
    )

  return (
    <div className='bg-primary w-full h-screen flex flex-col justify-start items-center'>
        <NavigationWeb />
        <Navigation />
        <div className='bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 pb-4 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
            <div className='p-4 pb-0 mb-2'>
                <Link to='/computerlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
                <div className='flex justify-between pt-3 pb-1'>
                  <p onClick={() => navigate(`/FtList/${code}`)} className='text-white font-bold tracking-wider'>Fichas técnicas</p>
                  <button onClick={() => navigate(`/FtListDelete/${code}`)} className='btn-eliminated text-rose-500 border-2 border-rose-500 px-2 tracking-wider'>Eliminadas</button>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                {ftdelete.map(ft => (<button key={ft._id} className='p-3 mx-4 my-1 bg-terceary text-white rounded-md font-normal text-sm tracking-wider cursor-pointer' onClick={() => navigate(`/ftdate/${ft._id}/${ft.code}/${ft.date_admission}/${ft.lab}/${ft.brand}/${ft.model}/${ft.diagnosis||"No"}/${ft.m_preventive}/${ft.m_corrective}/${ft.m_logical}/${ft.disarmed_e}/${ft.cleaning_tm}/${ft.cleaning_ram}/${ft.cleaning_cc}/${ft.cleaning_tv}/${ft.cleaning_fa}/${ft.change_pt}/${ft.cleaning_q}/${ft.cleaning_ld}/${ft.cleaning_tr}/${ft.check_e||"No"}/${ft.causes||"No"}/${ft.conclusion||"No"}/${ft.installation_so||"No"}/${ft.installation_drivers||"No"}/${ft.installation_oficce||"No"}/${ft.activation_oficce}/${ft.installation_utility||"No"}/${ft.installation_antivirus||"No"}/${ft.installation_as||"No"}/${ft.update_so}/${ft.update_drivers}/${ft.update_utility}/${ft.date_departure}/${ft.responsible}/${ft.state}`)}>{ft.date_departure}</button>))}
            </div>
        </div>
    </div>
  )
}
