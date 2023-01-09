import { useMyContex } from '../context/prototypeContext';
import {Formik, Form, Field} from 'formik'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { ImSearch } from "react-icons/im";
import '../css/search.css'

export function Search() {
  const { code, setCode } = useMyContex()

  const searchchart = (e) => {
    setCode(e.target.value)
  }

  return (
    <div className='container'>
      <div className='container-form-search'>
        <Formik
          initialValues={code}
          onSubmit = { async (values,actions) => {
            console.log(values)
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
              disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters className='btn-guardar-search-icon'/>
              ) : 'Escanear'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
