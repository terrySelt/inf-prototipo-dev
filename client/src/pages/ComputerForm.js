import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useMyContex} from '../context/prototypeContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { Navigation } from '../components/Navigation'
import { NavigationWeb} from '../components/NavigationWeb'


export function ComputerForm() {
  const {createComputer, getComputer, labs, updateComputer} = useMyContex()
  const navigate = useNavigate()
  const params = useParams()

  const [computer, setComputer] = useState({
    code: '',
    brand: '',
    processor: '',
    memory: '',
    disk: '',
    graphic: '',
    system: ''
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
    <div className='bg-primary w-full h-auto flex flex-col justify-center items-center'>
      <NavigationWeb />
      <Navigation />
      <div className=' bg-secondary w-5/6 h-auto rounded-md mt-4 mb-16 lg:w-1/4 lg:p-4 lg:mt-4 lg:mb-10'>
        <div className='p-4 pb-0'>
          <Link to='/computerlist' className='w-full text-cuarto flex justify-end font-semibold tracking-wider'>Regresar</Link>
          <h3 className='text-white font-bold tracking-wider'>Nueva Computadora</h3>
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
            <Form className='p-4 flex flex-col' onSubmit={handleSubmit}>
              <label htmlFor='code' >Code</label>
              <Field name='code' />
              <ErrorMessage component='p' className='errormessage' name='code' />
              <label htmlFor='lab'>Laboratorio</label>
              <Field className='mb-4 rounded-sm h-8 outline-none font-sans' name='lab' as='select' defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Seleccione el laboratorio</option>
                {labs.map(lab => (
                  <option key={lab._id}>{lab.name}</option>
                ))}
              </Field>
              <ErrorMessage component='p' className='errormessage' name='lab' />
              <label htmlFor='model' >Modelo</label>
              <Field className='mb-4 rounded-sm h-8 outline-none font-sans' name='model' as='select' defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Selecciona el modelo</option>
                <option>Desktop</option>
                <option>Laptop</option>
              </Field>
              <ErrorMessage component='p' className='errormessage' name='model' />
              <label htmlFor='brand' >Marca</label>
              <Field name='brand' />
              <ErrorMessage component='p' className='errormessage' name='brand' />
              <label htmlFor='processor' >Procesador</label>
              <Field name='processor' />
              <ErrorMessage component='p' className='errormessage' name='processor' />
              <label htmlFor='memory'>Memoria Ram</label>
              <Field name='memory'/>
              <ErrorMessage component='p' className='errormessage' name='memory' />
              <label htmlFor='disk'>Disco Duro</label>
              <Field name='disk' />
              <ErrorMessage component='p' className='errormessage' name='disk' />
              <label htmlFor='graphic'>Tarjeta Grafica</label>
              <Field name='graphic' />
              <ErrorMessage component='p' className='errormessage' name='graphic' />
              <label htmlFor='system'>Sistema Operativo</label>
              <Field name='system' />
              <ErrorMessage component='p' className='errormessage' name='system' />
              <button type='submit' className='btn-primary hover:bg-slate-900 focus:outline-none disabled:bg-terceary flex justify-center'
               disabled={isSubmitting}>
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className='animate-spin w-5 h-5 '/>
                ) : 'Guardar'}
              </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

