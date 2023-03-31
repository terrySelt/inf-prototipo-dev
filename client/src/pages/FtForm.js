import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function FtForm() {
  const {createFt, getFt, updateFt, users} = useMyContex()

  const navigate = useNavigate()
  const params = useParams()

  const [ft, setFt] = useState({
    code: params.code,
    date_admission: new Date().toLocaleString(),
    lab: params.lab,
    brand: params.brand,
    model: params.model,
    diagnosis: undefined,
    m_preventive: undefined,
    disarmed_e: undefined,
    cleaning_tm: undefined,
    cleaning_ram: undefined,
    cleaning_cc: undefined,
    cleaning_tv: undefined,
    cleaning_fa: undefined,
    change_pt: undefined,
    cleaning_q: undefined,
    cleaning_ld: undefined,
    cleaning_tr: undefined,
    check_e: undefined,
    m_logical: undefined,
    installation_so: undefined,
    installation_drivers: undefined,
    installation_oficce: undefined,
    activation_oficce: undefined,
    installation_utility: undefined,
    installation_antivirus: undefined,
    installation_as: undefined,
    update_so: undefined,
    update_drivers: undefined,
    update_utility: undefined,
    m_corrective: undefined,
    causes: undefined,
    conclusion: undefined,
    date_departure: undefined,
  })

   useEffect(() => {
    (async() => {
      if(params.id){
        const ft = await getFt(params.id)
        setFt(ft)
      }
    })()
  }, [params.id]) 

  return (
    <div className='bg-primary w-full h-auto flex flex-col justify-center items-center'>
      <NavigationWeb />
      <Navigation />
      <div className='bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
        <div className='p-4 pb-0'>
          <Link to='/computerlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Nueva Ficha técnica</h3>
        </div>
        <Formik
          initialValues = {ft}
          validationSchema={Yup.object({
            responsible: Yup.string().required('El responsable es requerido')
          })}
          onSubmit = { async (values,actions) => {
            if (params.id){
              await updateFt(params.id, values)
            }else {
              console.log(values)
              //await createFt(values)
            } 

            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
        >
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='p-4 flex flex-col'>
            <div>
                <label className='text-sm font-medium' htmlFor='code'>Código de la computadora</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='code' disabled/>
                <label className='text-sm font-medium' htmlFor='date_admission'>Fecha de admisión</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='date_admission'/>
                <label className='text-sm font-medium' htmlFor='lab'>Laboratorio</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='lab' disabled/>
                <label className='text-sm font-medium' htmlFor='brand'>Marca</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='brand' disabled/>
                <label className='text-sm font-medium' htmlFor='model'>Model</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='model' disabled/>
                <label className='text-sm font-medium' htmlFor='diagnosis'>Diagnostico</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='diagnosis' />
            </div>
            <div className='mt-2 w-full h-auto flex items-start'>
              <div className='pt-1'>
                <Field className='inp-switch peer' type='checkbox' name="m_preventive" id='m_preventive' />
                <label htmlFor='m_preventive' className='lbl-switch after:absolute after:content-[""] after:rounded-full after:h-5 after:w-5 after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full'></label>
              </div>
              <label className='text-sm font-medium mb-0 ml-4' htmlFor='m_preventive'>Mantenimiento preventivo</label>
            </div>

            <div className='w-full h-auto mt-2'>

              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="disarmed_e" id='disarmed_e'/>
                <label htmlFor='disarmed_e' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Desarmado del equipo</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('disarmed_e') && document.getElementById('disarmed_e').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_tm" id='cleaning_tm'/>
                <label htmlFor='cleaning_tm' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de la tarjeta madre</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_tm') && document.getElementById('cleaning_tm').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_ram" id='cleaning_ram'/>
                <label htmlFor='cleaning_ram' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de la menoria RAM</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_ram') && document.getElementById('cleaning_ram').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_cc" id='cleaning_cc'/>
                <label htmlFor='cleaning_cc' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de cable y conectores</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_cc') && document.getElementById('cleaning_cc').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_tv" id='cleaning_tv'/>
                <label htmlFor='cleaning_tv' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de la tarjeta de video</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_tv') && document.getElementById('cleaning_tv').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_fa" id='cleaning_fa'/>
                <label htmlFor='cleaning_fa' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de la fuente de alimentación</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_fa') && document.getElementById('cleaning_fa').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="change_pt" id='change_pt'/>
                <label htmlFor='change_pt' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Cambio de pasta térmica</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('change_pt') && document.getElementById('change_pt').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_q" id='cleaning_q'/>
                <label htmlFor='cleaning_q' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de coolers</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_q') && document.getElementById('cleaning_q').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_ld" id='cleaning_ld'/>
                <label htmlFor='cleaning_ld' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de lector de DVD</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_ld') && document.getElementById('cleaning_ld').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="cleaning_tr" id='cleaning_tr'/>
                <label htmlFor='cleaning_tr' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de tarjeta de red</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('cleaning_tr') && document.getElementById('cleaning_tr').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <label htmlFor='check_e' className='text-sm font-medium'>Verificación del equipo</label>
              <Field name ='check_e' className='w-full text-sm mb-2 h-7 p-2'/> 

            </div>
        
            <div className='mt-2 w-full h-auto flex items-start'>
              <div className='pt-1'>
                <Field className='inp-switch peer' type='checkbox' name="m_logical" id='m_logical' />
                <label htmlFor='m_logical' className='lbl-switch after:absolute after:content-[""] after:rounded-full after:h-5 after:w-5 after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full'></label>
              </div>
              <label className='text-sm font-medium mb-0 ml-4' htmlFor='m_logical'>Mantenimiento lógico</label>
            </div>
               
            <div className='w-full h-auto mt-2'>
               
            
              <div className='w-full h-auto flex mb-1'>
                <Field className='inp-switch peer' type="checkbox" name="installation_so" id='installation_so'/>
                <label htmlFor='installation_so' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Limpieza de coolers</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_so') && document.getElementById('installation_so').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
            
            </div>           
      

            <button 
              type='submit' 
              className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 '/>
              ) : 'Guardar'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )  
}
