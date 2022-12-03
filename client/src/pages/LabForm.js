import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Navigation} from '../components/Navigation'
import '../css/LabForm.css'

export function LabForm() {

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
      <Navigation />
      <div className='container-form-lab2'>
        <div className='header-form-lab'>
          <h3>Nuevo Laboratorio</h3>
          <Link to='/lablist' className='form-lab-regresar'>Regresar</Link>
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
            <Form onSubmit={handleSubmit} className='form-lab'>
            <label htmlFor='name' className='label-form-lab'>Laboratorio</label>
            <Field name ='name' />
            <ErrorMessage className='errormessage-lab' component='p' name='name' />
            <label htmlFor='responsible' className='label-form-lab'>Responsable</label>
            <Field name ='responsible' as='select' className='select-form-lab' defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Seleccione un auxiliar</option>
              {users.map(user => (
                <option key={user._id}>{user.name}</option>
              ))}
            </Field>
            <ErrorMessage className='errormessage-lab' component='p' name ='responsible' />
            <button 
              type='submit' 
              className='btn-guardar-lab' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-laboratorio-icon'/>
              ) : 'Save'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
