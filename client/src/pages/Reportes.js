import { Form, Formik } from 'formik'
import { useMyContex } from '../context/prototypeContext';
import {Link} from 'react-router-dom'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { useDownloadExcel } from 'react-export-table-to-excel';
import "react-datepicker/dist/react-datepicker.css";
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb';

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
    <div className="bg-primary w-full h-screen flex flex-col justify-center items-center lg:justify-start">
      <NavigationWeb />
      <Navigation />
        <div className="bg-secondary w-5/6 h-auto rounded-md mt-4 mb-6 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-6">
        <div className='p-4 pb-0'>
          <Link to='/computerlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
        </div>
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
            <Form onSubmit={handleSubmit} className='p-4 pt-0 flex flex-col'>
            <label name='dateini'>Fecha de inicio</label>
            <DatePicker
            name='dateini'
            selected={startDateini}
            onChange={(date) => setStartDateini(date)}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            className='w-full'
            />
            <label name='dateend'>Fecha de inicio</label>
            <DatePicker
            name ='dateend'
            selected={startDateend}
            onChange={(date) => setStartDateend(date)}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            className='w-full'
            />
            <div className='flex justify-around items-center'>
            <button 
              type='submit' 
              className='btn-primary w-24 h-16 hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center items-center lg:w-28' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='animate-spin w-5 h-5'/>
              ) : 'Filtrar'}
            </button>
            <button
              type='button' 
              onClick={onDownload}
              className='btn-primary w-24 h-16 lg:w-28'>
                Exportar excel
            </button>
            </div>
          </Form>
          )}
        </Formik>
        </div>
        <div className='w-full h-auto items-center bg-terceary flex px-2 py-6 space-x-2 mb-16 overflow-x-auto overscroll-x-contain overflow-y-hidden justify-center lg:mt-4'>
          <table className='table-auto text-white border-collapse border border-slate-500 flex-none' ref={tableRef}>
            <thead className=' bg-slate-800'>
            <tr>
            <th className='border border-slate-600 p-3'>Fecha de mantenimiento</th>
            <th className='border border-slate-600 p-3'>Codigo</th>
            <th className='border border-slate-600 p-3'>Laboratorio</th>
            <th className='border border-slate-600 p-3'>Responsable</th>
            </tr>
            </thead>

            <tbody className='bg-slate-900'>
            {repo.map((item) => (
              <tr key={item._id}>
                <td className='border border-slate-700 p-3'>{new Date(item.date_departure).toLocaleString()}</td>
                <td className='border border-slate-700 p-3'>{item.code}</td>
                <td className='border border-slate-700 p-3'>{item.lab}</td>
                <td className='border border-slate-700 p-3'>{item.responsible}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
    </div>
  )
}