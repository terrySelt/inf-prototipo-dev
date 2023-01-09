import { Form, Formik } from 'formik'
import { useMyContex } from '../context/prototypeContext';
import {Link} from 'react-router-dom'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/reportes.css'


export function Reportes() {
  const { fts } = useMyContex()

  const [startDateini, setStartDateini] = useState(new Date());
  const [startDateend, setStartDateend] = useState(new Date());

  const download = () => {
    console.log('descargar')
    const today = new Date();
    const now = today.toLocaleString()
    console.log(now)
  }

  return (
    <div className="container">
        <div className="container-form-reportes">
        <div className='header-form-reportes'>
          <h3>Reportes</h3>
          <Link to='/computerlist' className='form-lab-regresar'>Regresar</Link>
        </div>
        <div className='formsearch'>
          <Formik
          initialValues = {[startDateini, startDateend]}
          onSubmit = { async (values,actions) => {
            console.log(values) 
            let valuess = {
              date_admission: values[0],
              date_departure: values[1]
            }
            console.log(valuess)
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
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className='imput-date-reportes'
            />
            <label name='dateend'className='label-form-reportes'>Fecha de inicio</label>
            <DatePicker
            name ='dateend'
            selected={startDateend}
            onChange={(date) => setStartDateend(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
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
              onClick={download}
              className='btn-guardar-reportes' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-reportes-icon'/>
              ) : 'Descargar'}
            </button>
            </div>
          </Form>
          )}
        </Formik>
        </div>
        </div>
        <div className='container2-reportes'>
          <table className='table'>
            <thead>
            <tr>
            <th>Fecha de mantenimiento</th>
            <th>Codigo</th>
            <th>Laboratorio</th>
            <th>Respesponsable</th>
            </tr>
            </thead>

            <tbody>
            {fts.map((item) => (
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