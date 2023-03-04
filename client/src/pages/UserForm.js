import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Navigation} from '../components/Navigation'
import '../css/UserForm.css'

export function UserForm() {
  const {createUser, getUser, updateUser} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()
  const refStyle = useRef()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
  })
  
  useEffect(() => {
    (async() => {
      if(params.id){
        const user = await getUser(params.id)
        let roles = null
        const role = user.roles.find(item => item.name === 'admin')
        if(role){
        roles = 'admin'
        }else {
        roles = 'user'
      }
        const data = {
          name: user.name,
          email: user.email,
          roles: roles,
          image: null,
          oldpassword: '',
          newpassword: '',
          confirmpassword: ''
        }
        setUser(data)
      }
    })()
  },[params.id])

  const stylechange = () => {
    refStyle.current.className = 'showimput-password'
  }

  const passwordvalidation = () => {
    if(!params.id){
      const validation = Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo')
      return validation
    }
  }

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
            roles: Yup.string().required('EL status es requerido'),
            email: Yup.string().required('EL email es requerido').email('Formato de dirección de correo electrónico no válido'),
            password: passwordvalidation(),
            oldpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo'),
            newpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo'),
            confirmpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo')
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
                <label htmlFor='roles' className='label-form-user'>Estatus</label>
                <Field className='select-form-user' name='roles' as='select' defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Seleccione el tipo de ususario</option>
                  <option className='option-form-user' value='user'>user</option>
                  <option className='option-form-user' value='admin'>admin</option>
                </Field>
                <ErrorMessage className='errormessage-user' component='p' name='roles' />
                <label htmlFor='email' className='label-form-user'>Email</label>
                <Field name='email' />
                <ErrorMessage className='errormessage-user' component='p' name='email' />
                <div>
                  {(!params.id) ? 
                  (<div>
                    <label htmlFor='password' className='label-form-user'>Contraseña</label>
                    <Field name='password' className='password-register'/>
                    <ErrorMessage className='errormessage-user' component='p' name='password' />             
                  </div>):
                  (<div>
                    <label htmlFor='password' className='label-password' onClick={stylechange}>Cambiar contraseña</label>
                    <div className='password-myacount' ref={refStyle}>
                      <label htmlFor='oldpassword' className='label-form-user-password' >Contraseña Actual</label>
                      <Field name='oldpassword' className='notimput-password'/>
                      <ErrorMessage className='errormessage-user' component='p' name='oldpassword' />
                      <label htmlFor='newpassword' className='label-form-user-password' >Nueva contraseña</label>
                      <Field name='newpassword' className='notimput-password'/>
                      <ErrorMessage className='errormessage-user' component='p' name='newpassword' />
                      <label htmlFor='confirmpassword' className='label-form-user-password' >Confirmar nueva contraseña</label>
                      <Field name='confirmpassword' className='notimput-password'/>
                      <ErrorMessage className='errormessage-user' component='p' name='confirmpassword' />
                    </div>
                  </div>)}
                </div>
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
