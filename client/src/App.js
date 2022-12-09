import {LoginPage, UserForm, NotFoundPage, UserList, LabForm, LabList, ComputerList, ComputerForm} from "./pages"
import { FtList } from "./pages/FtList"
import { FtForm } from "./pages/FtForm"
import { ComputerInfoCard} from "./pages/ComputerInfoCard"
import {Routes, Route} from "react-router-dom"
import { ProtoProvider } from "./context/prototypeContext"
import {Toaster} from 'react-hot-toast'
import './App.css';

function App() {
  return (
    <ProtoProvider>
      <Routes>
        <Route path = '/' element = {<LoginPage />} />

        <Route path = 'UserList' element = {<UserList />} />
        <Route path = '/UserForm' element = {<UserForm />} />
        <Route path = '/Users/:id' element = {<UserForm />} />

        <Route path = '/LabList' element = {<LabList />} />
        <Route path = '/LabForm' element = {<LabForm />} />
        <Route path = '/Labs/:id' element = {<LabForm />} />

        <Route path = '/ComputerList' element = {<ComputerList />} />
        <Route path = '/ComputerForm' element = {<ComputerForm />} />
        <Route path = '/Computers/:id' element = {<ComputerForm />} />
        <Route path = '/ComputerInfoCard/:id/:code/:lab/:brand/:serie/:type/:model/:processor/:memory/:disk/:graphic/:system' element = {<ComputerInfoCard />} />

        <Route path = '/FtList' element = {<FtList />} />
        <Route path = '/FtForm/:code/:lab/:brand/:type/:model' element = {<FtForm />} />
        <Route path = '/Fts/:id' element = {<FtForm />} />

        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
      <Toaster />
    </ProtoProvider>
  )
}

export default App
