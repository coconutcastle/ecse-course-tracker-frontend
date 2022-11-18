import { useNavigate } from "react-router-dom"
import { Field, Form, Formik, ErrorMessage } from 'formik';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pageContent">
      <div className="title">MCGILL UNIVERSITY</div>
      <div className="title" style={{ marginTop: '-30px' }}>ECSE DEGREE VISUALIZER</div>
      <div className="titleSecondary">LOGIN</div>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      onSubmit={() => {}}>
        <Form>
          <Field name='firstName' type='text' />
          <Field name='lastName' type='text' />
          <Field name='email' type='text' />
          <Field name='password' type='text' />

          <div className="mt-5">
            <button className="landingButton" type='submit'>
              <div className="buttonText">
                LOGIN
              </div>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}