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
    //date_admission: new Date().toLocaleString(),
    date_admission: new Date(Date.now()),
    lab: params.lab,
    brand: params.brand,
    model: params.model,
    diagnosis: '',
    m_preventive: false,
    disarmed_e: false,
    cleaning_tm: false,
    cleaning_ram: false,
    cleaning_cc: false,
    cleaning_tv: false,
    cleaning_fa: false,
    change_pt: false,
    cleaning_q: false,
    cleaning_ld: false,
    cleaning_tr: false,
    check_e: '',
    m_logical: false,
    installation_so: '',
    installation_drivers: '',
    installation_oficce: '',
    activation_oficce: false,
    installation_utility: '',
    installation_antivirus: '',
    installation_as: '',
    update_so: false,
    update_drivers: false,
    update_utility: false,
    m_corrective: false,
    causes: '',
    conclusion: '',
    date_departure: '',
    installation_so1: false,
    installation_drivers1: false,
    installation_oficce1: false,
    installation_utility1: false,
    installation_antivirus1: false,
    installation_as1: false
  })
  
  useEffect(() => {
    (async() => {
      if(params.id){

        const ft = await getFt(params.id)
        setFt(ft)

        if(ft.m_preventive===true){
          setFtstyle('ftvisivility')
          setFtstyle2('ftvisivility2')
        }else{
          setFtstyle('ftnovisivility')
          setFtstyle2('ftnovisivility')
        }
  
        if(ft.m_logical===true){
          setFtstyle3('ftvisivility')
        }else{
          setFtstyle3('ftnovisivility')
        }

        if(ft.m_corrective===true){
          setFtstyle4('ftvisivility3')
        }else{
          setFtstyle4('ftnovisivility')
        }

        if(ft.installation_so1===true){
          setFtlogic('ftlogicv')  
        }else{
          setFtlogic('ftnovisivility')
        }
        
        if(ft.installation_drivers1===true){
          setFtlogic2('ftlogicv')  
        }else{
          setFtlogic2('ftnovisivility')
        }

        if(ft.installation_oficce1===true){
          setFtlogic3('ftlogicv')  
        }else{
          setFtlogic3('ftnovisivility')
        }

        if(ft.installation_utility1===true){
          setFtlogic4('ftlogicv')  
        }else{
          setFtlogic4('ftnovisivility')
        }

        if(ft.installation_antivirus1===true){
          setFtlogic5('ftlogicv')  
        }else{
          setFtlogic5('ftnovisivility')
        }
        
        if(ft.installation_as1===true){
          setFtlogic6('ftlogicv')  
        }else{
          setFtlogic6('ftnovisivility')
        }
        
      }
    })()
  }, [params.id, getFt])
  
  const [ftstyle, setFtstyle] = useState('ftnovisivility')
  const [ftstyle2, setFtstyle2] = useState('ftnovisivility')
  const [ftstyle3, setFtstyle3] = useState('ftnovisivility')
  const [ftstyle4, setFtstyle4] = useState('ftnovisivility')
  const [ftlogic, setFtlogic] = useState('ftnovisivility')  
  const [ftlogic2, setFtlogic2] = useState('ftnovisivility') 
  const [ftlogic3, setFtlogic3] = useState('ftnovisivility')  
  const [ftlogic4, setFtlogic4] = useState('ftnovisivility')  
  const [ftlogic5, setFtlogic5] = useState('ftnovisivility')  
  const [ftlogic6, setFtlogic6] = useState('ftnovisivility')
  
  const ftshow = () => {
    let val = ftstyle
    if(val === 'ftnovisivility'){
        setFtstyle('ftvisivility')
        setFtstyle2('ftvisivility2')
    }else{
        setFtstyle('ftnovisivility')
        setFtstyle2('ftnovisivility')
    }
  }

  const ftshow3 = () => {
    let val = ftstyle3
    if(val === 'ftnovisivility'){
        setFtstyle3('ftvisivility')
    }else{
        setFtstyle3('ftnovisivility')
    }
  }

  const ftshow4 = () => {
    let val = ftstyle4
    if(val === 'ftnovisivility'){
        setFtstyle4('ftvisivility3')
    }else{
        setFtstyle4('ftnovisivility')
    }
  }

  const ftshowlogical = () => {
    let val = ftlogic
    if(val === 'ftnovisivility'){
        setFtlogic('ftlogicv')
    }else{
        setFtlogic('ftnovisivility')
    }
  }

  const ftshowlogical2 = () => {
    let val = ftlogic2
    if(val === 'ftnovisivility'){
        setFtlogic2('ftlogicv')
    }else{
        setFtlogic2('ftnovisivility')
    }
  }

  const ftshowlogical3 = () => {
    let val = ftlogic3
    if(val === 'ftnovisivility'){
        setFtlogic3('ftlogicv')
    }else{
        setFtlogic3('ftnovisivility')
    }
  }

  const ftshowlogical4 = () => {
    let val = ftlogic4
    if(val === 'ftnovisivility'){
        setFtlogic4('ftlogicv')
    }else{
        setFtlogic4('ftnovisivility')
    }
  }

  const ftshowlogical5 = () => {
    let val = ftlogic5
    if(val === 'ftnovisivility'){
        setFtlogic5('ftlogicv')
    }else{
        setFtlogic5('ftnovisivility')
    }
  }

  const ftshowlogical6 = () => {
    let val = ftlogic6
    if(val === 'ftnovisivility'){
        setFtlogic6('ftlogicv')
    }else{
        setFtlogic6('ftnovisivility')
    }
  }

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
            //values.date_departure = new Date().toLocaleString()
            values.date_departure = new Date(Date.now())

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
            <Form onSubmit={handleSubmit} className='p-4 flex flex-col'>
            <div className='w-full h-auto'>
                <label className='text-sm font-medium' htmlFor='code'>Código de la computadora</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='code' disabled/>
                <label className='text-sm font-medium' htmlFor='date_admission'>Fecha de admisión</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='date_admission' disabled/>
                <label className='text-sm font-medium' htmlFor='lab'>Laboratorio</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='lab' disabled/>
                <label className='text-sm font-medium' htmlFor='brand'>Marca</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='brand' disabled/>
                <label className='text-sm font-medium' htmlFor='model'>Model</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='model' disabled/>
                <label className='text-sm font-medium' htmlFor='diagnosis'>Diagnostico</label>
                <Field className='w-full text-sm mb-2 h-7 p-2' name ='diagnosis' />
            </div>
            <div className='mt-2 w-full h-auto flex items-start' >
              <div className='pt-1'>
                <Field className='inp-switch peer' type='checkbox' name="m_preventive" id='m_preventive' />
                <label htmlFor='m_preventive' onClick={ftshow} className='lbl-switch after:absolute after:content-[""] after:rounded-full after:h-5 after:w-5 after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full'></label>
              </div>
              <label className='text-sm font-medium mb-0 ml-4' htmlFor='m_preventive' onClick={ftshow}>Mantenimiento preventivo</label>
            </div>

            <div className='w-full h-auto mt-2'>

              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle}>
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
              <div className={ftstyle2}>
                <label htmlFor='check_e' className='text-sm font-medium'>Verificación del equipo</label>
                <Field name ='check_e' className='w-full text-sm mb-2 h-7 p-2'/> 
              </div>

            </div>
        
            <div className='mt-2 w-full h-auto flex items-start'>
              <div className='pt-1'>
                <Field className='inp-switch peer' type='checkbox' name="m_logical" id='m_logical' />
                <label htmlFor='m_logical' onClick={ftshow3} className='lbl-switch after:absolute after:content-[""] after:rounded-full after:h-5 after:w-5 after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full'></label>
              </div>
              <label className='text-sm font-medium mb-0 ml-4' htmlFor='m_logical' onClick={ftshow3}>Mantenimiento lógico</label>
            </div>
               
            <div className='w-full h-auto mt-2'>
               
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_so1" id='installation_so1'/>
                <label htmlFor='installation_so1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación del sistema operativo</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_so1') && document.getElementById('installation_so1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic}>
                <label htmlFor='installation_so' className='inline-block leading-snug mt-1 text-sm font-medium'>Que sistema operativo y que versión?</label>
                <Field name ='installation_so' id='installation_so' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>    
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_drivers1" id='installation_drivers1'/>
                <label htmlFor='installation_drivers1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical2}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación de drivers</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_drivers1') && document.getElementById('installation_drivers1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic2}>
                <label htmlFor='installation_drivers' className='inline-block leading-snug mt-1 text-sm font-medium'>Que versión?</label>
                <Field name ='installation_drivers' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_oficce1" id='installation_oficce1'/>
                <label htmlFor='installation_oficce1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical3}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación de office</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_oficce1') && document.getElementById('installation_oficce1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic3}>
                <label htmlFor='installation_oficce' className='inline-block leading-snug mt-1 text-sm font-medium'>Que version?</label>
                <Field name ='installation_oficce' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="activation_oficce" id='activation_oficce'/>
                <label htmlFor='activation_oficce' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Activación de office</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('activation_oficce') && document.getElementById('activation_oficce').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>  
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_utility1" id='installation_utility1'/>
                <label htmlFor='installation_utility1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical4}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación de utilitarios</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_utility1') && document.getElementById('installation_utility1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic4}>
                <label htmlFor='installation_utility' className='inline-block leading-snug mt-1 text-sm font-medium'>Que version?</label>
                <Field name ='installation_utility' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_antivirus1" id='installation_antivirus1'/>
                <label htmlFor='installation_antivirus1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical5}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación de antivirus</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_antivirus1') && document.getElementById('installation_antivirus1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic5}>
                <label htmlFor='installation_antivirus' className='inline-block leading-snug mt-1 text-sm font-medium'>Que antivirus?</label>
                <Field name ='installation_antivirus' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="installation_as1" id='installation_as1'/>
                <label htmlFor='installation_as1' className='lbl-but peer-checked:bg-blue-600' onClick={ftshowlogical6}>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Instalación de software de aplicación</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('installation_as1') && document.getElementById('installation_as1').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftlogic6}>
                <label htmlFor='installation_as' className='inline-block leading-snug mt-1 text-sm font-medium'>Cuales?</label>
                <Field name ='installation_as' className='w-full text-sm mb-2 h-7 p-2'/>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="update_so" id='update_so'/>
                <label htmlFor='update_so' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Actualización del sistema operativo</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('update_so') && document.getElementById('update_so').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="update_drivers" id='update_drivers'/>
                <label htmlFor='update_drivers' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Actualización de drivers</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('update_drivers') && document.getElementById('update_drivers').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>
              <div className={ftstyle3}>
                <Field className='inp-switch peer' type="checkbox" name="update_utility" id='update_utility'/>
                <label htmlFor='update_utility' className='lbl-but peer-checked:bg-blue-600'>
                  <div className='flex w-full h-full'>
                    <p className='text-sm pl-2 font-medium w-5/6 h-full flex items-center leading-tight'>Actualización de utilitarios</p>
                    <div className='w-1/6 h-full flex items-center justify-end pr-2'>
                      {(document.getElementById('update_utility') && document.getElementById('update_utility').checked) ? <BsFillCheckCircleFill className='text-white'/> : <BsFillCircleFill className='text-white'/>}         
                    </div>
                  </div>
                </label>
              </div>

            </div>

            <div className='mt-2 w-full h-auto flex items-start'>
              <div className='pt-1'>
                <Field className='inp-switch peer' type='checkbox' name="m_corrective" id='m_corrective' />
                <label htmlFor='m_corrective' onClick={ftshow4} className='lbl-switch after:absolute after:content-[""] after:rounded-full after:h-5 after:w-5 after:bg-white after:top-[2px] after:left-[2px] after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full'></label>
              </div>
              <label className='text-sm font-medium mb-0 ml-4' htmlFor='m_corrective' onClick={ftshow4}>Mantenimiento correctivo</label>
            </div>
            
            <div className={ftstyle4}>
              <label htmlFor='causes' className='text-sm font-medium'>Causas</label>
              <Field name ='causes' className='w-full text-sm mb-2 h-7 p-2'/>
              <label htmlFor='conclusion' className='text-sm font-medium'>conclusión</label>
              <Field name ='conclusion' className='w-full text-sm mb-2 h-7 p-2'/> 
            </div>
      
            <label htmlFor='date_departure' className='text-sm font-medium'>Fecha de salida</label>
            <Field name='date_departure' placeholder='fecha actual' disabled className='w-full text-sm mb-2 h-7 p-2' /> 
            <label htmlFor='responsible' className='text-sm font-medium'>Responsable del trabajo</label>
            <Field name ='responsible' as='select' className='mb-4 rounded-sm h-7 outline-none font-sans text-sm mt-1' defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Seleccione un auxiliar</option>
              {users.map(user => (
                <option key={user._id}>{user.name}</option>
              ))}
            </Field>
            <ErrorMessage className='errormessage' component='p' name='responsible' />

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
