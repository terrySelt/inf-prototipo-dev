import { useMyContex } from '../context/prototypeContext';
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import '../css/search.css'

export function Search(hola) {
  const { code, setCode } = useMyContex()

  const navigate = useNavigate()

  const searchchart = (e) => {
    setCode(e.target.value)
  }

  return (
    <div className='container'>
      <div className='container-form-search'>
        <Formik
          initialValues={code}
          onSubmit = { async (values,actions) => {
            navigate('/Scanner')
          }}
        >
          
          {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className='form-search'>
            <label htmlFor='code' className='label-form-search'>Codigo</label>
            <div className='search-div'>
            <Field name ='code' placeholder='Busqueda' type='text' onChange={searchchart} value={code}/>
            <ImSearch className='search-icon'/>
            </div>
            <button
              type='submit'  
              className='btn-guardar-search' 
              >
                Scannear 
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
