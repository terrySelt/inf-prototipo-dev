import { useMyContex } from "../context/prototypeContext"
import { Link } from "react-router-dom"
import { UserCard } from "../components/UserCard"
import { Navigation } from "../components/Navigation"
import { NavigationWeb } from '../components/NavigationWeb'
import { Head } from "../components/Head"

export function UserList() {
  
  const { users } = useMyContex()

  if(users.length === 0) return(
    <div className="not-users">
      <Navigation />
      <h1>No hay ususarios</h1>
      <Link className="btn-new-user" to="/UserForm">Nuevo usuario</Link>
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
