import {useMyContex} from '../context/prototypeContext'
import {Link, useParams} from 'react-router-dom'
import {ComputerCard} from '../components/ComputerCard'
import { Navigation } from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'
import { Head } from '../components/Head'
import { Search } from '../components/Search'

export function ComputerList() {

    const { computers, code} = useMyContex()
    const params = useParams()

    const codescann = params.code

    const compnotdelete = computers.filter(item => item.state === false)

    if(compnotdelete.length === 0) return(
      <div className="bg-primary w-full h-screen flex flex-col justify-start items-center">
        <Head />
        <NavigationWeb />
        <Navigation />
        <div className='w-full h-screen flex flex-col justify-around items-center'>
          <h1 className='text-white font-bold text-xl'>No hay computadoras</h1>
          <Link className="btn-primary-new" to="/ComputerForm">Nueva Computadora</Link>
        </div>
      </div>
    )

    let results = []

    if(!code){
      results = compnotdelete
    }else{
          results = compnotdelete.filter(item => item.code.toString().toLowerCase().includes(code.toLowerCase()))
    }
    let res = []
    if(codescann){
      const res2 = compnotdelete.find(item => item.code === codescann)
      res.push(res2)
      results = res
    }

  return (
    <div className='w-full h-auto bg-primary flex flex-col items-center pb-16'>
      <Head />
      <NavigationWeb />
      <Navigation />
      <div className='w-full h-auto items-center bg-secondary flex px-2 space-x-2 pt-11 pb-4 overflow-x-auto overscroll-x-contain lg:mt-4'>
        {results.map(computer => (
          <ComputerCard computer={computer} key={computer._id} />
          ))}
      </div>
      <Search />
        <Link className="btn-primary-new" to='/ComputerForm'>Nueva Computadora</Link>
    </div>
  )
}
