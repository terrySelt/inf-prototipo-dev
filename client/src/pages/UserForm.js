import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

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
    refStyle.current.className = 'showpassword'
  }

  const passwordvalidation = () => {
    if(!params.id){
      const validation = Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener 6 caracteres como mínimo')
      return validation
    }
  }

  return (
    <div className='bg-primary w-full h-full flex flex-col justify-center items-center lg:justify-start'>
      <NavigationWeb />
      <Navigation />
      <div className='bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
        <div className='p-4 pb-0'>
          <Link to='/userlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Nuevo usuario</h3>
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
              <Form className='p-4 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <Field name='name' />
                <ErrorMessage className='errormessage' component='p' name='name' />
                <label htmlFor='roles'>Estatus</label>
                <Field className='mb-4 rounded-sm h-8 outline-none font-sans' name='roles' as='select' defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Seleccione el tipo de ususario</option>
                  <option value='user'>user</option>
                  <option value='admin'>admin</option>
                </Field>
                <ErrorMessage className='errormessage' component='p' name='roles' />
                <label htmlFor='email'>Email</label>
                <Field name='email' />
                <ErrorMessage className='errormessage' component='p' name='email' />
                <div>
                  {(!params.id) ? 
                  (<div className='w-full'>
                    <label htmlFor='password'>Contraseña</label>
                    <Field className='w-full' name='password'/>
                    <ErrorMessage className='errormessage' component='p' name='password' />             
                  </div>):
                  (<div>
                    <label className='text-blue-900' htmlFor='password' onClick={stylechange}>Cambiar contraseña</label>
                    <div className='passworhidden' ref={refStyle}>
                      <label className='text-blue-800' htmlFor='oldpassword' >Contraseña Actual</label>
                      <Field name='oldpassword'/>
                      <ErrorMessage className='errormessage' component='p' name='oldpassword' />
                      <label className='text-blue-800' htmlFor='newpassword' >Nueva contraseña</label>
                      <Field name='newpassword'/>
                      <ErrorMessage className='errormessage' component='p' name='newpassword' />
                      <label className='text-blue-800' htmlFor='confirmpassword' >Confirmar nueva contraseña</label>
                      <Field name='confirmpassword'/>
                      <ErrorMessage className='errormessage' component='p' name='confirmpassword' />
                    </div>
                  </div>)}
                </div>
                <label htmlFor='image'>Imagen</label>
                <Field className='p-1 h-9 block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' type='file' name='image' onChange={(e) => setFieldValue('image', e.target.files[0])}/>
                <button className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' type='submit' disabled={isSubmitting}>
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 '/>
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
