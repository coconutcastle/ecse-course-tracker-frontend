import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { BackButton } from '../components/BackButton';
import { UserInfo } from '../common/calendar.interface';
import { EMAIL_PATTERN } from "../common/constants";

interface LoginPageProps {
  setIsLoggedIn: (newLoggedIn: boolean) => void;
  allUsers: UserInfo[]
  setUser: (newUser: UserInfo) => void;
}

interface LoginFormFields {
  email: string;
  password: string;
}

export const LoginPage = ({ setIsLoggedIn, setUser, allUsers }: LoginPageProps) => {
  const navigate = useNavigate();

  const validateFields = (values: LoginFormFields) => {
    const errors: Record<string, string> = {};

    if (values.email.length <= 0) {
      errors['email'] = 'This field cannot be empty!'
    };
    if (values.password.length <= 0) {
      errors['password'] = 'This field cannot be empty!'
    };
    if (values.email.length > 0 && values.password.length > 0) {
      const foundUser = allUsers.find((user: UserInfo) => ((user.email == values.email) && (user.password == values.password)));
      if (!foundUser) {
        errors['email'] = 'Incorrect email or password.';
        errors['password'] = 'Incorrect email or password.';
      } else if (!EMAIL_PATTERN.test(values.email)) {
        errors['email'] = 'Please enter a valid email'
      };
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
          email: '',
          password: ''
        }}
        validate={validateFields}
        onSubmit={(values: LoginFormFields) => {
          const foundUser = allUsers.find((user: UserInfo) => ((user.email == values.email) && (user.password == values.password)));
          if (foundUser) {
            setUser(foundUser);
            setIsLoggedIn(true);
            navigate('/visualizer');
          }
        }}>
        {({ errors, touched }) => (
          <Form className="login-form">
            <Field name='email' type='text' placeholder="Email" className="text-field" />
            <ErrorMessage name="email" className="text-field-error" component="div" />

            <Field name='password' type='text' placeholder="Password" className="text-field" />
            <ErrorMessage name="password" className="text-field-error" component="div" />

            <div className="mt-5">
              <button className="landing-button" type='submit'>
                <div className="button-text">
                  LOGIN
                </div>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}