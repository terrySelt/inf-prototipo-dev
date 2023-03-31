import { useNavigate, Link} from 'react-router-dom'
import { useMyContex } from "../context/prototypeContext"
import { useEffect, useState, useRef } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import { Navigation } from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export function MyAcount() {

    const {user, updateUser, getUser } = useMyContex()

    const navigate = useNavigate()
    const referencia = useRef()
    const refStyle = useRef()

    const [useracount, setUseracount] = useState({
      name: '',
      email: '',
      image: null,
      roles: '',
      oldpassword: '',
      newpassword: '',
      confirmpassword: '',
    })
    
    const [image, setImage] = useState(null)

    const [image2, setImage2] = useState(null)
  
    const [preview, setPreview] = useState('')
    
    const uploadFiles = () => {
      referencia.current.click()
    }

      useEffect(() => {
        (async() => {

          if(user._id){
            const user2 = await getUser(user._id)
            setImage2(user2.image.url)
            let roles = null
            const role = user2.roles.find(item => item.name === 'admin')
            if(role){
            roles = 'admin'
            }else {
            roles = 'user'
          }
            const data = {
              name: user2.name,
              email: user2.email,
              roles: roles,
              oldpassword: '',
              newpassword: '',
              confirmpassword: ''
            }
            setUseracount(data)
          }
        })()    
        },[])
      
      useEffect(() => {
        if(image){
          const reader = new FileReader()
          reader.onload = () => {
              setPreview(reader.result.toString())
          }
          reader.readAsDataURL(image)
        }else{
          setPreview('')
        }
      
      },[image])

    const changeImg = (e) => {
      const imgUser = e.target.files[0]
      setImage(imgUser)
    }

    const stylechange = () => {
      refStyle.current.className = 'showpassword'
    }

  return (
    <div className="bg-primary w-full h-full flex flex-col justify-center items-center lg:justify-start">
      <NavigationWeb />
      <Navigation />
      <div className='bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
        <div className='p-4 pb-0'>
          <Link to='/computerlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Mi cuenta</h3>
        </div>
        <Formik
          initialValues={useracount}
          validationSchema={Yup.object({
            name: Yup.string().required('EL nombre es requerido'),
            email: Yup.string().required('EL email es requerido').email('Formato de dirección de correo electrónico no válido'),
            roles: Yup.string().required('EL rol es requerido'),
            oldpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo'),
            newpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo'),
            confirmpassword: Yup.string().min(6, 'La contraseña debe tener 6 caracteres como mínimo')
          })}
          onSubmit={ async (values, actions) => {            
            await updateUser(user._id, values)
            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
          >
          {
            ({handleSubmit, setFieldValue, isSubmitting}) => (
              <Form className='p-4 flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col items-center'>
                  <div className='w-28 h-28'>{image ? <img className='rounded-full' src={preview} alt='Imagen del usuario'/> : <img className='rounded-full' src={image2} alt='Imagen del usuario'/>}</div>
                    <label htmlFor='image' className='mt-2 flex items-center font-medium' onClick={uploadFiles} >Imagen de perfil <MdModeEdit className='ml-2 w-5 h-5'/></label>
                    <input className='hidden' type='file' name='image' ref={referencia} onChange={(e) => {changeImg(e); setFieldValue('image', e.target.files[0])}}/>
                </div>
                <label htmlFor='name'>Name</label>
                <Field name='name' />
                <ErrorMessage className='errormessage' component='p' name='name' />
                <label htmlFor='roles'>Estatus</label>
                <Field className='mb-4 rounded-sm h-8 outline-none font-sans' name='roles' as='select' disabled>
                  <option value='user'>user</option>
                  <option value='admin'>admin</option>
                </Field>
                <ErrorMessage className='errormessage' component='p' name='roles' />
                <label htmlFor='email'>Email</label>
                <Field name='email' />
                <ErrorMessage className='errormessage' component='p' name='email' />
                <label className='text-blue-900' htmlFor='password' onClick={stylechange}>Cambiar contraseña</label>
                <div className='passworhidden' ref={refStyle}>
                  <label className='text-blue-800' htmlFor='oldpassword'>Contraseña Actual</label>
                  <Field name='oldpassword'/>
                  <ErrorMessage className='errormessage' component='p' name='oldpassword' />
                  <label htmlFor='newpassword' className='text-blue-800' >Nueva contraseña</label>
                  <Field name='newpassword'/>
                  <ErrorMessage className='errormessage' component='p' name='newpassword' />
                  <label htmlFor='confirmpassword' className='text-blue-800' >Confirmar nueva contraseña</label>
                  <Field name='confirmpassword'/>
                  <ErrorMessage className='errormessage' component='p' name='confirmpassword' />
                </div>
                <button 
                  className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' 
                  type='submit' 
                  disabled={isSubmitting}
                  >
                    {isSubmitting ? (<AiOutlineLoading3Quarters className='animate-spin w-5 h-5 '/>) : 'Guardar'}
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}
