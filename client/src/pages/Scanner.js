import QrReader from 'react-qr-scanner'
import '../css/scanner.css'
import { Link, useNavigate } from 'react-router-dom'

export function Scanner() {

  const navigate = useNavigate()

    const delay = 500;

    const previewStyle = {
        height: 220,
        width: 220
    };


    const handleScan = (result) => {
        if (result) {
            navigate(`/ComputerList/${result.text}`)
        }
};

const handleError = (error) => {
  console.log(error);
}; 
  return (
    <div className='container'>
      <div className='container-scanner'>
        <div className='header-scanner'>
          <h3>Scanner</h3>
          <Link to='/ComputerList' className='scanner-regresar'>Regresar</Link>
        </div>
        <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      </div>
    </div>
  )
}
