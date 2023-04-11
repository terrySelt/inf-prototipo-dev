import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import { useNavigate } from 'react-router-dom'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import logo from '../assets/images/2.png'

export function RecoveryPassword() {

    const {recovery} = useMyContex()

    const navigate = useNavigate()

  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
      <div className='container bg-secondary w-5/6 h-auto rounded-md lg:w-1/4 lg:p-6'>
        <div className='flex justify-center my-8'>
          <img src={logo} alt={logo}/>
        </div>
        <p className='text-white text-center px-4 lg:px-2'>Si olvidaste tu contraseña, ingresa tu email para cambiar tu contraseña</p>
        <Formik
          initialValues = {{
            email: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('El email es requerido').email('Formato de dirección de correo electrónico no válido')
          })}
          onSubmit = { async (values,actions) => {
            await recovery(values)
            
            actions.setSubmitting(false)
            navigate('/EmailSend')
          }}
          enableReinitialize
        >

          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='my-4 p-4 flex flex-col'>
            <label htmlFor='email'>Email</label>
            <Field name ='email'/>
            <ErrorMessage className='errormessage' component='p' name='email' />

            <button 
              type='submit' 
              className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 ' />
              ) : 'Enviar'}
            </button>
            
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
