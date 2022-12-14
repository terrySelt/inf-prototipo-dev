import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import {Navigation} from '../components/Navigation'
import '../css/FtForm.css'

import React from 'react'

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

  const [style, setStyle] = useState('btn-prevent-ft')
  const changeStyle = () =>{
    let val = style
    if(val==='btn-prevent-ft'){
      setStyle('btn-prevent-ft2')
      changeiconfalse()
      changeicontrue()
    }else{
      setStyle('btn-prevent-ft')
      changeiconfalse()
      changeicontrue()
    }
  }
  const [styleicontrue, setStyleiccontrue] = useState('icon-check-true')
  const changeicontrue = () =>{
    let val = styleicontrue
    if(val==='icon-check-true'){
      setStyleiccontrue('icon-check-true2')
    }else{
      setStyleiccontrue('icon-check-true')
    }
  }
  const [styleiconfalse, setStyleicconfalse] = useState('icon-check-false')
  const changeiconfalse = () =>{
    let val=styleiconfalse
    if(val==='icon-check-false'){
      setStyleicconfalse('icon-check-false2')
    }else{
      setStyleicconfalse('icon-check-false')
    }
  }

  return (
    <div className='container'>
      <Navigation />
      <div className='container-form-ft2'>
        <div className='header-form-ft'>
          <div className='regresar-ft'>
          <Link to='/computerlist' className='form-ft-regresar'>Regresar</Link>
          </div>
          <div>
          <h3>Nueva Ficha t??cnica</h3>
          </div>
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
              await createFt(values)
            } 

            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
        >
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='form-ft'>
            <div className='data-ft'>
                <label htmlFor='code' className='label-form-ft'>C??digo de la computadora</label>
                <Field name ='code' disabled/>
                <label htmlFor='date_admission' className='label-form-ft'>Fecha de date_admission</label>
                <Field name ='date_admission'/>
                <label htmlFor='lab' className='label-form-ft'>Laboratorio</label>
                <Field name ='lab' disabled/>
                <label htmlFor='brand' className='label-form-ft'>Marca</label>
                <Field name ='brand' disabled/>
                <label htmlFor='model' className='label-form-ft'>Model</label>
                <Field name ='model' disabled/>
                <label htmlFor='diagnosis' className='label-form-ft'>Diagnostico</label>
                <Field name ='diagnosis' />
            </div>
            <div className='div-prevent-ft'>
              <label className='label-form-ft'>Mantenimiento preventivo
              <Field type="checkbox" name="m_preventive" />
              </label>
              <div className='div-prevent-button-ft'>
                <label className={style}>
                <Field type="checkbox" name="disarmed_e" className='check' onClick={changeStyle}/>
                <p>Desarmado del equipo</p>
                <div className='div-iconsft'>
                <BsFillCheckCircleFill className={styleicontrue}/>
                <BsFillCircleFill className={styleiconfalse}/>
                </div>
                </label>
                <label className={style}>
                <Field type="checkbox" name="cleaning_tm" className='check' onClick={changeStyle}/>
                <p>Limpieza de la tarjeta madre</p>
                <div className='div-iconsft'>
                <BsFillCheckCircleFill className={styleicontrue}/>
                <BsFillCircleFill className={styleiconfalse}/>
                </div>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_ram" className='check'/>
                <p>Limpieza de la menoria RAM</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_cc" className='check'/>
                <p>Limpieza de cable y conectores</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_tv" className='check'/>
                <p>Limpieza de la tarjeta de video</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_fa" className='check'/>
                <p>Limpieza de la fuente de alimentaci??n</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="change_pt" className='check'/>
                <p>Cambio de pasta t??rmica</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_q" className='check'/>
                <p>Limpieza de coolers</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_ld" className='check'/>
                <p>Limpieza de lector de DVD</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label className='btn-prevent-ft'>
                <Field type="checkbox" name="cleaning_tr" className='check'/>
                <p>Limpieza de tarjeta de red</p><BsFillCheckCircleFill className='icon-check-true'/><BsFillCircleFill className='icon-check-false'/>
                </label>
                <label htmlFor='check_e' className='label-form-ft'>Verificaci??n del equipo</label>
                <Field name ='check_e' className='prevent-input'/>
              </div>
            </div>
            <div className='div-logical-ft'>
              <label className='label-form-ft'>Mantenimiento l??gico
              <Field type="checkbox" name="m_logical" />
              </label>
              <div>
                <label htmlFor='installation_so' className='label-form-ft'>Instalaci??n del sistema operativo</label>
                <Field name ='installation_so' />
                <label htmlFor='installation_drivers' className='label-form-ft'>Instalaci??n de drivers</label>
                <Field name ='installation_drivers' />
                <label htmlFor='installation_oficce' className='label-form-ft'>Instalaci??n de office</label>
                <Field name ='installation_oficce' />
                <label htmlFor='activation_oficce' className='label-form-ft'>Activac??n de office</label>
                <Field name ='activation_oficce' />
                <label htmlFor='installation_utility' className='label-form-ft'>Instalaci??n de utilitarios</label>
                <Field name ='installation_utility' />
                <label htmlFor='installation_antivirus' className='label-form-ft'>Instalaci??n de antivirus</label>
                <Field name ='installation_antivirus' />
                <label htmlFor='installation_as' className='label-form-ft'>Instalaci??n de software de aplicaci??n</label>
                <Field name ='installation_as' />
                <label htmlFor='update_so' className='label-form-ft'>Actualizaci??n del sistema operativo</label>
                <Field name ='update_so' />
                <label htmlFor='update_drivers' className='label-form-ft'>Actualizaci??n de drivers</label>
                <Field name ='update_drivers' />
                <label htmlFor='update_utility' className='label-form-ft'>Actualizaci??n de utilitarios</label>
                <Field name ='update_utility' />
              </div>
            </div>
            <div className='div-corrective-ft'>
              <label className='label-form-ft'>Mantenimiento correctivo
              <Field type="checkbox" name="m_corrective" />
              </label>
              <div>
                <label htmlFor='causes' className='label-form-ft'>Causas</label>
                <Field name ='causes' />
                <label htmlFor='conclusion' className='label-form-ft'>Conclusion</label>
                <Field name ='conclusion' />
              </div>
            </div>
            <label htmlFor='date_departure' className='label-form-ft'>Fecha de salida</label>
            <Field name ='date_departure'  placeholder='fecha actual' disabled/>
            <label htmlFor='responsible' className='label-form-ft'>Responsable del trabajo</label>
            <Field name ='responsible' as='select' className='select-form-ft' defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Seleccione un auxiliar</option>
              {users.map(user => (
                <option key={user._id}>{user.name}</option>
              ))}
            </Field>
            <ErrorMessage className='errormessage-ft' component='p' name='responsible' />
            <button 
              type='submit' 
              className='btn-guardar-ft' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-ft-icon'/>
              ) : 'Guardar'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )  
}
