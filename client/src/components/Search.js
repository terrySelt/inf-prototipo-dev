import { useMyContex } from '../context/prototypeContext';
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";

export function Search(hola) {
  const { code, setCode } = useMyContex()

  const navigate = useNavigate()

  const searchchart = (e) => {
    setCode(e.target.value)
  }

  return (
    <div className='bg-secondary my-5 w-5/6 h-auto rounded-md lg:w-1/4 lg:p-2 z-0'>
        <Formik
          initialValues={code}
          onSubmit = { async (values,actions) => {
            navigate('/Scanner')
          }}
        >
          
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='m-6'>
            <label htmlFor='code'>Codigo</label>
            <div className='mt-1 relative rounded-sm h-8 mb-2'>
            <Field className='w-full bg-cover' name ='code' placeholder='Busqueda' type='text' onChange={searchchart} value={code}/>
            <ImSearch className='absolute top-2 right-2 text-2xl text-end text-stone-400'/>
            </div>
            <button
              type='submit'  
              className='btn-primary w-full' 
              >
                Scannear 
            </button>
          </Form>
          )}
        </Formik>
    </div>
  )
}
