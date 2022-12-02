import { useNavigate, useResolvedPath } from "react-router-dom"
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { BackButton } from '../components/BackButton';
import { UserInfo, Majors } from "../common/calendar.interface";
import { EMAIL_PATTERN } from "../common/constants";

interface CreateAccountPageProps {
  setIsLoggedIn: (newLoggedIn: boolean) => void;
  setUser: (newUser: UserInfo) => void;
}

interface CreateAccountFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const CreateAccountPage = ({ setIsLoggedIn, setUser }: CreateAccountPageProps) => {
  const navigate = useNavigate();

  const validateFields = (values: CreateAccountFormFields) => {
    const errors: Record<string, string> = {};

    if (values.firstName.length <= 0) {
      errors['firstName'] = 'This field cannot be empty!'
    };
    if (values.lastName.length <= 0) {
      errors['lastName'] = 'This field cannot be empty!'
    };
    if (values.email.length <= 0) {
      errors['email'] = 'This field cannot be empty!'
    }  else if (!EMAIL_PATTERN.test(values.email)) {
      errors['email'] = 'Please enter a valid email'
    };
    if (values.password.length <= 0) {
      errors['password'] = 'This field cannot be empty!'
    };

    if (Object.keys(errors).length > 0) {
      return errors;
    }
  }

  return (
    <div className="page-content">
      <div className="title">MCGILL UNIVERSITY</div>
      <div className="title" style={{ marginTop: '-30px' }}>ECSE DEGREE VISUALIZER</div>
      <BackButton />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validate={validateFields}
        onSubmit={(values: CreateAccountFormFields) => { 
          setUser({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            major: "NO_MAJOR",
            minor: [],
            semesters: []
          })
          setIsLoggedIn(true);
          navigate('/visualizer');
          }}>

        {({ errors, touched }) => (
          <Form className="login-form">
            <Field name='firstName' type='text' placeholder="First Name" className="text-field" />
            <ErrorMessage name="firstName" className="text-field-error" component="div" />

            <Field name='lastName' type='text' placeholder="Last Name" className="text-field" />
            <ErrorMessage name="lastName" className="text-field-error" component="div" />

            <Field name='email' type='text' placeholder="Email" className="text-field" />
            <ErrorMessage name="email" className="text-field-error" component="div" />

            <Field name='password' type='text' placeholder="Password" className="text-field" />
            <ErrorMessage name="password" className="text-field-error" component="div" />

            <div className="mt-5">
              <button className="landing-button" type='submit'>
                <div className="button-text">
                  CREATE ACCOUNT
                </div>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}