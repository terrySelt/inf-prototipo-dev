import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import '../css/loginpage.css'

export function LoginPage() {

  const {createLab, users, getLab, updateLab} = useMyContex()

  const navigate = useNavigate()
  const params = useParams()

  const [lab, setLab] = useState({
    name:'',
  })

  useEffect(() => {
    (async() => {
      if(params.id){
        const lab = await getLab(params.id)
        setLab(lab)
      }
    })()
  }, [params.id])

  return (
    <div className='container'>
      <div className='container-form-login'>
        <div className='header-form-login'>
          <img src='2.png' alt='logo'/>
        </div>
        <Formik
          initialValues = {lab}
          validationSchema={Yup.object({
            name: Yup.string().required('El nombre de laboratorio es requerido'),
            responsible: Yup.string()
          })}
          onSubmit = { async (values,actions) => {
            if (params.id){
              await updateLab(params.id, values)
            }else{
              await createLab(values)
            }

            actions.setSubmitting(false)
            navigate('/LabList')
          }}
          enableReinitialize
        >
          
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='form-login'>
            <label htmlFor='name' className='label-form-login'>Email</label>
            <Field name ='name' />
            <ErrorMessage className='errormessage-login' component='p' name='name' />
            <label htmlFor='name' className='label-form-login'>Contraseña</label>
            <Field name ='name' />
            <ErrorMessage className='errormessage-login' component='p' name='name' />
            <button 
              type='submit' 
              className='btn-guardar-login' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-login-icon'/>
              ) : 'Acceder'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
