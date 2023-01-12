import { Form, Formik } from 'formik'
import { useMyContex } from '../context/prototypeContext';
import {Link} from 'react-router-dom'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { useDownloadExcel } from 'react-export-table-to-excel';
import "react-datepicker/dist/react-datepicker.css";
import {Navigation} from '../components/Navigation'
import '../css/reportes.css'


export function Reportes() {
  const { repo, getReportes } = useMyContex()

  const [startDateini, setStartDateini] = useState(new Date());
  const [startDateend, setStartDateend] = useState(new Date());

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Reporte de mantenimiento',
    sheet: 'Users'
  })

  return (
    <div className="container">
      <Navigation />
        <div className="container-form-reportes">
        <div className='header-form-reportes'>
          <h3>Reportes</h3>
          <Link to='/computerlist' className='form-lab-regresar'>Regresar</Link>
        </div>
        <div className='formsearch'>
          <Formik
          initialValues = {[startDateini, startDateend]}
          onSubmit = { async (values,actions) => {
            let valuess = {
              date_departure_ini: values[0].toISOString(),
              date_departure_end: values[1].toISOString()
            }
            await getReportes(valuess)
          }}
          enableReinitialize
        >
          
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='form-reportes'>
            <label name='dateini' className='label-form-reportes'>Fecha de inicio</label>
            <DatePicker
            name='dateini'
            selected={startDateini}
            onChange={(date) => setStartDateini(date)}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            className='imput-date-reportes'
            />
            <label name='dateend'className='label-form-reportes'>Fecha de inicio</label>
            <DatePicker
            name ='dateend'
            selected={startDateend}
            onChange={(date) => setStartDateend(date)}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            className='imput-date-reportes'
            />
            <div className='button-reportes'>
            <button 
              type='submit' 
              className='btn-guardar-reportes' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-reportes-icon'/>
              ) : 'Filtrar'}
            </button>
            <button
              type='button' 
              onClick={onDownload}
              className='btn-guardar-reportes'>
                Exportar excel
            </button>
            </div>
          </Form>
          )}
        </Formik>
        </div>
        </div>
        <div className='container2-reportes'>
          <table className='table' ref={tableRef}>
            <thead>
            <tr>
            <th>Fecha de mantenimiento</th>
            <th>Codigo</th>
            <th>Laboratorio</th>
            <th>Responsable</th>
            </tr>
            </thead>

            <tbody>
            {repo.map((item) => (
              <tr key={item._id}>
                <td>{new Date(item.date_departure).toLocaleString()}</td>
                <td>{item.code}</td>
                <td>{item.lab}</td>
                <td>{item.responsible}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
    </div>
  )
}