import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Navigation} from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

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
    <div className='bg-primary w-full h-screen flex flex-col justify-center items-center lg:justify-start'>
      <NavigationWeb />
      <Navigation />
      <div className='bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
        <div className='p-4 pb-0'>
          <Link to='/lablist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Nuevo Laboratorio</h3>
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
            <Form onSubmit={handleSubmit} className='p-4 flex flex-col'>
            <label htmlFor='name'>Laboratorio</label>
            <Field name ='name' />
            <ErrorMessage className='errormessage' component='p' name='name' />
            <label htmlFor='responsible'>Responsable</label>
            <Field name ='responsible' as='select' className='mb-4 rounded-sm h-8 outline-none font-sans' defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Seleccione un auxiliar</option>
              {users.map(user => (
                <option key={user._id}>{user.name}</option>
              ))}
            </Field>
            <ErrorMessage className='errormessage' component='p' name ='responsible' />
            <button 
              type='submit' 
              className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center' 
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 '/>
              ) : 'Save'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
