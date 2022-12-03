import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Navigation} from '../components/Navigation'
import '../css/UserForm.css'

export function UserForm() {
  const {createUser, getUser, updateUser} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    image: null
  })
  
  useEffect(() => {
    (async() => {
      if(params.id){
        const user = await getUser(params.id)
        setUser(user)
      }
    })()
  },[params.id])

  return (
    <div className='container'>
      <Navigation />
      <div className='container-form-user2'>
        <div className='header-form-user'>
          <h3>Nuevo usuario</h3>
          <Link to='/userlist' className='form-user-regresar'>Regresar</Link>
        </div>
        <Formik
          initialValues={user}
          validationSchema={Yup.object({
            name: Yup.string().required('EL nombre es requerido'),
            type: Yup.string().required('EL status es requerido'),
            email: Yup.string().required('EL email es requerido').email('Formato de dirección de correo electrónico no válido'),
            password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo')
          })}
          onSubmit={ async (values, actions) => {
        
            if(params.id){
              await updateUser(params.id, values)
            } else{
              await createUser(values)
            }

            actions.setSubmitting(false)

            navigate('/UserList')
          }}
          enableReinitialize
          >
          {
            ({handleSubmit, setFieldValue, isSubmitting}) => (
              <Form className='form-user' onSubmit={handleSubmit}>

                <label htmlFor='name' className='label-form-user'>Name</label>
                <Field name='name' />
                <ErrorMessage className='errormessage-user' component='p' name='name' />
                <label htmlFor='type' className='label-form-user'>Estatus</label>
                <Field className='select-form-user' name='type' as='select' defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Seleccione el tipo de ususario</option>
                  <option className='option-form-user' value='user'>user</option>
                  <option className='option-form-user' value='admin'>admin</option>
                </Field>
                <ErrorMessage className='errormessage-user' component='p' name='type' />
                <label htmlFor='email' className='label-form-user'>Email</label>
                <Field name='email' />
                <ErrorMessage className='errormessage-user' component='p' name='email' />
                <label htmlFor='password' className='label-form-user'>Contraseña</label>
                <Field name='password' />
                <ErrorMessage className='errormessage-user' component='p' name='password' />
                <label htmlFor='image' className='label-form-user'>Imagen</label>
                <input type='file' name='image' className='input-image-user' onChange={(e) => setFieldValue('image', e.target.files[0])}/>
                <button className='btn-guardar-user' type='submit' disabled={isSubmitting}>
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className='btn-guardar-user-icon'/>
                  ) : 'Save'}
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}
