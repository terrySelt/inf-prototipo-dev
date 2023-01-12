import '../css/ComputerList.css'
import {Link, useNavigate} from 'react-router-dom'

export function ComputerCard({computer}) {

  const navigate = useNavigate()
    
  return (
    <div className='card-computer'>
      {computer.image && <div className='img-div-computer' ><a className='link-computer' href={computer.image.url} download target='_blank'><img src={computer.image.url} alt='Imagen URL' /></a></div>}
      <div className='content-computer'>
        <div className='name-computer'>
          <div className='carac-computer' onClick={() => navigate(`/ComputerInfoCard/${computer._id}/${computer.code}/${computer.lab}/${computer.model}/${computer.brand}/${computer.processor}/${computer.memory}/${computer.disk}/${computer.graphic}/${computer.system}`)}>
          <h2>{computer.code}</h2>
          <p className='carac-cardcomputer'>Características</p>
          </div>
          <div className='div-button2'>
            <button onClick={() => navigate(`/FtForm/${computer.code}/${computer.lab}/${computer.model}/${computer.brand}`)}>Nueva ficha técnica</button>
            <button onClick={() => navigate(`/FtList/${computer.code}`)}>Historial</button>
          </div>
        </div>
      </div>
    </div>
  )
}
