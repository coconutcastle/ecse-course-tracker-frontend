import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { Majors, UserInfo, MajorsText, MinorsText, Minors } from "../common/calendar.interface";
import { MdCheckCircle, MdOutlineRemoveRedEye } from 'react-icons/md';
import { BsEyeSlash } from 'react-icons/bs';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Field, Form, Formik, ErrorMessage } from 'formik';



interface ProfilePageProps {
  user: UserInfo;
}

interface ProfileFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  major: Majors;
  minor: Minors[];
}

const MenuProps = {
  PaperProps: {
    sx: {
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "#c6b6d3"
      },
      "& .MuiMenuItem-root:hover": {
        backgroundColor: "#c6b6d3"
      },
      "& .MuiMenuItem-root.Mui-selected:hover": {
        backgroundColor: "#c6b6d3"
      }
    }
  }
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const [newUserInfo, setNewUserInfo] = useState<ProfileFormFields>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    major: user.major,
    minor: user.minor
  });

  const validateFields = (values: ProfileFormFields) => {
    const errors: Record<string, string> = {};

    if (values.firstName.length <= 0) {
      errors['firstName'] = 'This field cannot be empty!'
    };
    if (values.lastName.length <= 0) {
      errors['lastName'] = 'This field cannot be empty!'
    };
    if (values.email.length <= 0) {
      errors['email'] = 'This field cannot be empty!'
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
      <div className="title">USER PROFILE</div>
      <BackButton />
      <div className="mt-5" style={{ width: '50%' }}>
        <Formik
          validate={validateFields}
          initialValues={newUserInfo}
          onSubmit={(values: ProfileFormFields) => {
            const check = document.getElementById("save-confirmation-check");
            if (check) {
              check.style.opacity = '100%';
              setTimeout(() => {
                check.style.opacity = '0%';
                setNewUserInfo(values);
                setUpdating(false);
              }, 2000);
            };
          }}>
          {({ errors, values, setFieldValue }) => (
            <Form>
              <div className='d-flex flex-row align-items-baseline pb-3'>
                <div className='course-info-text fw-bold col-4'>First Name: </div>
                <div className='course-info-text col-8'>{
                  updating ? (
                    <Field name='firstName' type='text' placeholder="First Name" className='text-field' style={{ backgroundColor: 'white', height: '40px' }} />
                  ) : (`${newUserInfo.firstName}`)
                }</div>
              </div>
              <div className='d-flex flex-row align-items-baseline pb-3'>
                <div className='course-info-text fw-bold col-4'>Last Name: </div>
                <div className='course-info-text col-8'>{
                  updating ? (
                    <Field name='lastName' type='text' placeholder="Last Name" className='text-field' style={{ backgroundColor: 'white', height: '40px' }} />
                  ) : (`${newUserInfo.lastName}`)
                }</div>
              </div>
              <div className='d-flex flex-row align-items-baseline pb-3'>
                <div className='course-info-text fw-bold col-4'>Email: </div>
                <div className='course-info-text col-8'>{
                  updating ? (
                    <Field name='email' type='text' placeholder="Email" className='text-field' style={{ backgroundColor: 'white', height: '40px' }} />
                  ) : (`${newUserInfo.email}`)
                }</div>
              </div>
              <div className='d-flex flex-row align-items-baseline pb-3'>
                <div className='course-info-text fw-bold col-4'>Password: </div>
                <div className='course-info-text col-6'>{
                  passwordVisible ?
                    newUserInfo.password : '*'.repeat((user.password).length)
                }</div>
                {passwordVisible ?
                  <button style={{ backgroundColor: 'white', border: 'none' }} onClick={() => setPasswordVisible(false)} >
                    <BsEyeSlash style={{ height: '20px', width: '20px' }} />
                  </button> :
                  <button style={{ backgroundColor: 'white', border: 'none' }} onClick={() => setPasswordVisible(true)}>
                    <MdOutlineRemoveRedEye style={{ height: '20px', width: '20px' }} />
                  </button>}
              </div>
              <div className='row pb-3'>
                <div className='course-info-text fw-bold col-4'>Major: </div>
                <div className='course-info-text col-8'>{
                  updating ? (
                    <Field name='major' as='select' >
                      {Object.keys(MajorsText).map((major: string, index) =>
                        <option value={major} key={index}>{MajorsText[major as Majors]}</option>)}
                    </Field>
                  ) : MajorsText[newUserInfo.major]}</div>
              </div>
              <div className='row pb-3'>
                <div className='course-info-text fw-bold col-4'>Minor(s): </div>
                <div className='course-info-text col-8'>{
                  updating ? (
                    <Select
                      multiple
                      value={values.minor}
                      onChange={(event: SelectChangeEvent<typeof values.minor>, newValue) => {
                        const { target: { value }, } = event;
                        setFieldValue('minor', value);
                      }}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => 'Minors'}
                      // MenuProps={MenuProps}
                      sx={{
                        "&:hover": {
                          "&& fieldset": {
                            border: '3px solid #8f78a2'
                          }
                        },
                        "& fieldset": {
                          border: '3px solid #8f78a2'
                        },
                        "& .MuiSelect": {
                          borderWidth: '3px' 
                        }
                      }}
                    >
                      {Object.keys(MinorsText).map((minor: string, index) => (
                        <MenuItem key={index} value={minor}>
                          <Checkbox checked={(values.minor).includes(minor as Minors)} />
                          <ListItemText primary={minor} />
                        </MenuItem>
                      ))}
                    </Select>
                  ) : ((newUserInfo.minor).map((minor: string, index) => <div key={index}>{MinorsText[minor as Minors]}</div>))
                }</div>
              </div>
              {updating ? (
                <div className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: '40px' }}>
                  <button className="landing-button me-2"
                    type='button'
                    style={{ width: '200px', backgroundColor: 'white', border: '3px solid #8f78a2' }}
                    onClick={() => setUpdating(false)}>
                    <div className="button-text" style={{ color: '#8f78a2' }} >
                      CANCEL
                    </div>
                  </button>
                  <button className="landing-button ms-2" type='submit' style={{ width: '200px' }}
                    onClick={() => {
                      console.log('clicked')
                      const check = document.getElementById("save-confirmation-check");
                      if (check) {
                        check.style.opacity = '100%';
                        setTimeout(() => {
                          check.style.opacity = '0%';
                          setUpdating(false);
                        }, 2000);
                      };
                    }}>
                    <div className="button-text">
                      SAVE
                    </div>
                  </button>
                  <MdCheckCircle
                    id="save-confirmation-check"
                    style={{ opacity: '0%' }}
                  />
                </div>
              ) : (
                <div className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: '40px' }}>
                  <button className="landing-button" type='button' onClick={() => setUpdating(true)}>
                    <div className="button-text">
                      UPDATE
                    </div>
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}