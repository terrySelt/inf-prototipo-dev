import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import '../css/loginpage.css'

export function LoginPage() {

  const {login} = useMyContex()

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='container-form-login'>
        <div className='header-form-login'>
          <img src='2.png' alt='logo'/>
        </div>
        <Formik
          initialValues = {{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('EL email es requerido').email('Formato de dirección de correo electrónico no válido'),
            password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo')
          })}
          onSubmit = { async (values,actions) => {
            await login(values)
            
            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
        >

          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='form-login'>
            <label htmlFor='email' className='label-form-login'>Email</label>
            <Field name ='email' />
            <ErrorMessage className='errormessage-login' component='p' name='email' />
            <label htmlFor='password' className='label-form-login'>Contraseña</label>
            <Field name ='password' type='password'/>
            <ErrorMessage className='errormessage-login' component='p' name='password' />
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
