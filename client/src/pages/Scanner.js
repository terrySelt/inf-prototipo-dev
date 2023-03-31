import QrReader from 'react-qr-scanner'
import { Link, useNavigate } from 'react-router-dom'
import { Head } from '../components/Head'

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
    <div className='bg-primary w-full h-screen flex flex-col justify-start items-center lg:justify-start'>
      <Head />
      <div className='bg-secondary w-5/6 h-auto rounded-md mt-16 mb-16 flex flex-col justify-center items-center lg:w-1/4 lg:p-4 lg:mt-16 lg:mb-10'>
        <div className='p-4 pb-0 w-full'>
          <Link to='/ComputerList' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Scanner</h3>
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
