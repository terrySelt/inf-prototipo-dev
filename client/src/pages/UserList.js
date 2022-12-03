import { useMyContex } from "../context/prototypeContext"
import { Link } from "react-router-dom"
import { UserCard } from "../components/UserCard"
import { Navigation } from "../components/Navigation"
import "../css/UserList.css"

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
    <div className="container">
      <Navigation />
      <div className="container2-user">
        {users.map(user => (
          <UserCard user={user} key={user._id}/>
        ))}
      </div>
      <Link className="btn-new-user" to="/UserForm">Nuevo usuario</Link>
    </div>
  )}
