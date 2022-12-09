import '../css/ComputerList.css'
import {useNavigate} from 'react-router-dom'

export function ComputerCard({computer}) {

  const navigate = useNavigate()
    
  return (
    <div className='card-computer'>
      {computer.image && <div className='img-div-computer' ><img src={computer.image.url} alt='Imagen URL' /></div>}
      <div className='content-computer'>
        <div className='name-computer'>
          <h2  onClick={() => navigate(`/ComputerInfoCard/${computer._id}/${computer.code}/${computer.lab}/${computer.brand}/${computer.serie}/${computer.type}/${computer.model}/${computer.processor}/${computer.memory}/${computer.disk}/${computer.graphic}/${computer.system}`)}>{computer.code}</h2>
          <div className='div-button2'>
            <button onClick={() => navigate(`/FtForm/${computer.code}/${computer.lab}/${computer.brand}/${computer.type}/${computer.model}`)}>Nueva ficha técnica</button>
            <button onClick={() => navigate(`/computersdata/${computer._id}`)}>Historial</button>
          </div>
        </div>
      </div>
    </div>
  )
}
