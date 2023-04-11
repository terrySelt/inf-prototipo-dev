import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import logo from '../assets/images/2.png'
import toast from 'react-hot-toast'

export function ChangePassword() {

    const {changepassword} = useMyContex()

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const notify = (msj) => toast(msj)

  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
      <div className='container bg-secondary w-5/6 h-auto rounded-md lg:w-1/4 lg:p-6'>
        <div className='flex justify-center my-6'>
          <img src={logo} alt={logo}/>
        </div>
        <p className='text-white text-center mx-4 lg:mx-0'>Introduce una nueva contraseña para tu cuenta</p>
        <Formik
          initialValues = {{
            newPassword: '',
            repeatpassword: ''
          }}
          validationSchema={Yup.object({
            newPassword: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo'),
            repeatpassword: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo')
          })}
          onSubmit = { async (values,actions) => {
            if(values.newPassword===values.repeatpassword){
              await changepassword(token, values)
              actions.setSubmitting(false)
              navigate('/PasswordChanged')
            } else{
              notify("Las constraseñas no son iguales")
              actions.setSubmitting(false)
              navigate('/ChangePassword')
            }
            
          }}
          enableReinitialize
        >

          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='my-4 p-4 flex flex-col'>
            <label htmlFor='newPassword'>Contraseña</label>
            <Field name ='newPassword' type='password' />
            <ErrorMessage className='errormessage' component='p' name='newPassword' />
            <label htmlFor='repeatpassword'>Repite la Contraseña</label>
            <Field name ='repeatpassword' type='password' />
            <ErrorMessage className='errormessage' component='p' name='repeatpassword' />
            
            <button 
              type='submit' 
              className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 ' />
              ) : 'Cambiar'}
            </button>
            
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
