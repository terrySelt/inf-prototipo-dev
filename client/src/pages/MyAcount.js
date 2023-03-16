import { useNavigate, Link} from 'react-router-dom'
import { useMyContex } from "../context/prototypeContext"
import { useEffect, useState, useRef } from 'react'
import { Navigation } from '../components/Navigation'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import '../css/useraux.css'

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
          console.log(image)
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
      refStyle.current.className = 'showimput-password'
    }

  return (
    <div className="container">
      <Navigation />
      <div className='container-form-useraux'>
        <div className='header-form-computer'>
          <h3>Mi cuenta</h3>
          <Link to='/computerlist' className='form-computer-regresar'>Regresar</Link>
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
            console.log(values)         
            await updateUser(user._id, values)
            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
          >
          {
            ({handleSubmit, setFieldValue, isSubmitting}) => (
              <Form className='form-user' onSubmit={handleSubmit}>
                <div className='div-img-main'>
                  <div className='div-img'>{image ? <img src={preview} alt='Imagen del usuario'/> : <img src={image2} alt='Imagen del usuario'/>}</div>
                    <label htmlFor='image' className='label-form-user' onClick={uploadFiles} >Imagen de perfil <MdModeEdit /></label>
                    <input type='file' name='image' ref={referencia} className='imput-img-myacount' onChange={(e) => {changeImg(e); setFieldValue('image', e.target.files[0])}}/>
                </div>
                <label htmlFor='name' className='label-form-user'>Name</label>
                <Field name='name' />
                <ErrorMessage className='errormessage-user' component='p' name='name' />
                <label htmlFor='roles' className='label-form-user'>Estatus</label>
                <Field className='select-form-user' name='roles' as='select' disabled>
                  <option className='option-form-user' value='user'>user</option>
                  <option className='option-form-user' value='admin'>admin</option>
                </Field>
                <ErrorMessage className='errormessage-user' component='p' name='roles' />
                <label htmlFor='email' className='label-form-user'>Email</label>
                <Field name='email' />
                <ErrorMessage className='errormessage-user' component='p' name='email' />
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
                <button 
                  className='btn-guardar-useraux' 
                  type='submit' 
                  disabled={isSubmitting}
                  >
                    {isSubmitting ? (<AiOutlineLoading3Quarters className='btn-guardar-useraux-icon'/>) : 'Guardar'}
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}
