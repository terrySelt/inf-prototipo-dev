import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { Navigation } from '../components/Navigation'
import '../css/ComputerForm.css'


export function ComputerForm() {
  const {createComputer, getComputer, labs, updateComputer} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()

  const [computer, setComputer] = useState({
    code: '',
    brand: undefined,
    processor: undefined,
    memory: undefined,
    disk: undefined,
    graphic: undefined,
    system: undefined
  })

  useEffect(() => {
    ( async () => {
      if(params.id){
        const computer = await getComputer(params.id)
        setComputer(computer)
      }
    })()
  }, [params.id])

  return (
    <div className='container'>
      <Navigation />
      <div className='container-form-computer2'>
        <div className='header-form-computer'>
          <h3>Nueva Computadora</h3>
          <Link to='/computerlist' className='form-computer-regresar'>Regresar</Link>
        </div>
        <Formik
          initialValues={computer}
          validationSchema={Yup.object({
            code: Yup.string().required("EL codigo es requerido"),
            lab: Yup.string().required("EL laboratorio es requerido"),
            model: Yup.string().required("EL modelo es requerido"),
            brand: Yup.string().required("La marca es requerida"),
            processor: Yup.string().required("EL procesador es requerido"),
            memory: Yup.string().required("La memoria es requerida"),
            disk: Yup.string().required("El disco duro es requerido"),
            graphic: Yup.string().required("La targeta grafica es requerida"),
            system: Yup.string().required("EL sistema operativo es requerido")
          })}
          onSubmit={ async (values, actions) =>{
            if (params.id){
              await updateComputer(params.id, values)
            }else{
              await createComputer(values)
            }

            actions.setSubmitting(false)
            navigate('/ComputerList')
          }}
          enableReinitialize
          >
          {({handleSubmit, isSubmitting}) => (
            <Form className='form-computer' onSubmit={handleSubmit}>
              <label htmlFor='code' className='label-form-computer'>Code</label>
              <Field name='code' />
              <ErrorMessage component='p' className='errormessage-computer' name='code' />
              <label htmlFor='lab' className='label-form-computer'>Laboratorio</label>
              <Field name='lab' as='select' className='select-form-computer' defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Seleccione el laboratorio</option>
                {labs.map(lab => (
                  <option key={lab._id}>{lab.name}</option>
                ))}
              </Field>
              <ErrorMessage component='p' className='errormessage-computer' name='lab' />
              <label htmlFor='model' className='label-form-computer'>Modelo</label>
              <Field name='model' as='select' className='select-form-computer' defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Selecciona el modelo</option>
                <option>Desktop</option>
                <option>Laptop</option>
              </Field>
              <ErrorMessage component='p' className='errormessage-computer' name='model' />
              <label htmlFor='brand' className='label-form-computer'>Marca</label>
              <Field name='brand' />
              <ErrorMessage component='p' className='errormessage-computer' name='brand' />
              <label htmlFor='processor' className='label-form-computer'>Procesador</label>
              <Field name='processor' />
              <ErrorMessage component='p' className='errormessage-computer' name='processor' />
              <label htmlFor='memory' className='label-form-computer'>Memoria Ram</label>
              <Field name='memory'/>
              <ErrorMessage component='p' className='errormessage-computer' name='memory' />
              <label htmlFor='disk' className='label-form-computer'>Disco Duro</label>
              <Field name='disk' />
              <ErrorMessage component='p' className='errormessage-computer' name='disk' />
              <label htmlFor='graphic' className='label-form-computer'>Tarjeta Grafica</label>
              <Field name='graphic' />
              <ErrorMessage component='p' className='errormessage-computer' name='graphic' />
              <label htmlFor='system' className='label-form-computer'>Sistema Operativo</label>
              <Field name='system' />
              <ErrorMessage component='p' className='errormessage-computer' name='system' />
              <button type='submit' className='btn-guardar-computer' disabled={isSubmitting}>
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className='btn-guardar-computer-icon'/>
                ) : 'Save'}
              </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

