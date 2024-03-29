import {LoginPage, UserForm, NotFoundPage, UserList, LabForm, LabList, ComputerList, ComputerForm} from "./pages"
import { ComputerListDelete } from "./pages/ComputerListDelete"
import { FtList } from "./pages/FtList"
import { FtListDelete } from "./pages/FtListDelete"
import { FtForm } from "./pages/FtForm"
import { FtDate } from "./pages/FtDate"
import { ComputerInfoCard} from "./pages/ComputerInfoCard"
import { Scanner } from "./pages/Scanner"
import { Reportes } from "./pages/Reportes"
import { MyAcount } from "./pages/MyAcount"
import { RecoveryPassword } from "./pages/RecoveryPassword"
import { EmailSend } from "./pages/EmailSend"
import { ChangePassword } from "./pages/ChangePassword"
import { PasswordChanged } from "./pages/PasswordChanged"
import {Routes, Route} from "react-router-dom"
import { ProtoProvider } from "./context/prototypeContext"
import {Toaster} from 'react-hot-toast'
import './App.css';

function App() {
  return (
    <ProtoProvider>
      <Routes>
        <Route path = '/' element = {<LoginPage />} />
        <Route path='/RecoveryPassword' element = {<RecoveryPassword />} />
        <Route path='/EmailSend' element = {<EmailSend />} />
        <Route path='/ChangePassword' element = {<ChangePassword />} />
        <Route path='/PasswordChanged' element = {<PasswordChanged />} />
        <Route path='/MyAcount' element = {<MyAcount />} />
        <Route path = '/Reportes' element = {<Reportes />} />

        <Route path = 'UserList' element = {<UserList />} />
        <Route path = '/UserForm' element = {<UserForm />} />
        <Route path = '/Users/:id' element = {<UserForm />} />

        <Route path = '/LabList' element = {<LabList />} />
        <Route path = '/LabForm' element = {<LabForm />} />
        <Route path = '/Labs/:id' element = {<LabForm />} />

        <Route path = '/ComputerList' element = {<ComputerList />} />
        <Route path = '/ComputerListDelete' element = {<ComputerListDelete />} />
        <Route path = '/ComputerList/:code' element = {<ComputerList />} />
        <Route path = '/ComputerForm' element = {<ComputerForm />} />
        <Route path = '/Computers/:id' element = {<ComputerForm />} />
        <Route path = '/ComputerInfoCard/:id/:code/:lab/:model/:brand/:processor/:memory/:disk/:graphic/:system/:state' element = {<ComputerInfoCard />} />

        <Route path = '/FtList/:code' element = {<FtList />} />
        <Route path = '/FtListDelete/:code' element = {<FtListDelete />} />
        <Route path = '/FtForm/:code/:lab/:model/:brand' element = {<FtForm />} />
        <Route path = '/Fts/:id' element = {<FtForm />} />
        <Route path = '/FtDate/:id/:code/:date_admission/:lab/:brand/:model/:diagnosis/:m_preventive/:m_corrective/:m_logical/:disarmed_e/:cleaning_tm/:cleaning_ram/:cleaning_cc/:cleaning_tv/:cleaning_fa/:change_pt/:cleaning_q/:cleaning_ld/:cleaning_tr/:check_e/:causes/:conclusion/:installation_so/:installation_drivers/:installation_oficce/:activation_oficce/:installation_utility/:installation_antivirus/:installation_as/:update_so/:update_drivers/:update_utility/:date_departure/:responsible/:state' element = {<FtDate />} />

        <Route path = '/Scanner' element = {<Scanner />} />

        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
      <Toaster />
    </ProtoProvider>
  )
}

export default App
