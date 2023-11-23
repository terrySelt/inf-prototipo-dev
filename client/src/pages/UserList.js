import { useMyContex } from "../context/prototypeContext"
import { Link } from "react-router-dom"
import { UserCard } from "../components/UserCard"
import { Navigation } from "../components/Navigation"
import { NavigationWeb } from '../components/NavigationWeb'
import { Head } from "../components/Head"

export function UserList() {
  
  const { users } = useMyContex()

  if(users.length === 0) return(
    <div className="bg-primary w-full h-screen flex flex-col justify-start items-center">
      <Head />
      <NavigationWeb />
      <Navigation />
      <div className='w-full h-screen flex flex-col justify-around items-center'>
        <h1 className='text-white font-bold text-xl'>No hay ususarios</h1>
        <Link className="btn-primary-new" to="/UserForm">Nuevo usuario</Link>
      </div>
    </div>
  )

  return (
    <div className="w-full h-screen bg-primary flex flex-col items-center pb-16" key={1}>
      <Head />
      <NavigationWeb />
      <Navigation />
      <div className="w-full h-auto items-center bg-secondary flex px-2 space-x-2 py-6 pt-14 mb-6 overflow-x-auto overscroll-x-contain lg:mt-4">
        {users.map(user => (
          <UserCard user={user} key={user._id}/>
        ))}
      </div>
      <Link className="btn-primary-new" to="/UserForm">Nuevo usuario</Link>
    </div>
  )}
