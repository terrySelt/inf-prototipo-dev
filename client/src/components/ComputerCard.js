import {useNavigate} from 'react-router-dom'

export function ComputerCard({computer}) {

  const navigate = useNavigate()
    
  return (
    <div className='bg-white w-48 h-60 relative shadow-2xl rounded-sm flex-none'>
      {computer.image && <div className='w-36 h-36 absolute -top-8 left-6 rounded-lg shadow-2xl' ><a href={computer.image.url} download target='_blank'><img src={computer.image.url} alt='Imagen URL' className='w-full h-full'/></a></div>}
      <div className='absolute bottom-0 p-2 rounded-lg'>
          <div className='space-y-1 mb-3' onClick={() => navigate(`/ComputerInfoCard/${computer._id}/${computer.code}/${computer.lab}/${computer.model}/${computer.brand}/${computer.processor}/${computer.memory}/${computer.disk}/${computer.graphic}/${computer.system}/${computer.state}`)}>
          <h2 className='text-center font-bold text-gray-600'>{computer.code}</h2>
          <p className='text-center text-sm text-gray-500 font-semibold'>Características</p>
          </div>
          <div className='flex space-x-1'>
            <button className='btn-secondary' onClick={() => navigate(`/FtForm/${computer.code}/${computer.lab}/${computer.model}/${computer.brand}`)}>Nueva ficha técnica</button>
            <button className='btn-secondary' onClick={() => navigate(`/FtList/${computer.code}`)}>Historial</button>
          </div>
      </div>
    </div>
  )
}
