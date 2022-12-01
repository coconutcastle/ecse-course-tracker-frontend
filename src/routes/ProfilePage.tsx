import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { Majors, UserInfo, MajorsText, MinorsText } from "../common/calendar.interface";
import { MdCheckCircle } from 'react-icons/md';
import { Field, Form, Formik, ErrorMessage } from 'formik';

interface ProfilePageProps {
  user: UserInfo;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const [newUserInfo, setNewUserInfo] = useState<UserInfo>(user);

  return (
    <div className="page-content">
      <div className="title">USER PROFILE</div>
      <BackButton />
      <div className="mt-5" style={{ width: '50%' }}>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>First Name: </div>
          <div className='course-info-text col-8'>{
            updating ? (
              <input className='text-field' style={{ backgroundColor: 'white', height:'40px' }} value={user.firstName} />
            ) : (
              `${user.firstName}`
            )
          }</div>
        </div>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>Last Name: </div>
          <div className='course-info-text col-8'>{user.lastName}</div>
        </div>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>Email: </div>
          <div className='course-info-text col-8'>{user.email}</div>
        </div>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>Password: </div>
          <div className='course-info-text col-8'>{
            passwordVisible ?
              user.password : '*'.repeat((user.password).length)
          }</div>
        </div>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>Major: </div>
          <div className='course-info-text col-8'>{MajorsText[user.major]}</div>
        </div>
        <div className='row pb-3'>
          <div className='course-info-text fw-bold col-4'>Minor(s): </div>
          <div className='course-info-text col-8'>No Minor</div>
        </div>
        {updating ? (
          <div className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: '40px' }}>
            <button className="landing-button me-2"
              style={{ width: '200px', backgroundColor: 'white', border: '3px solid #8f78a2' }}
              onClick={() => setUpdating(false)}>
              <div className="button-text" style={{ color: '#8f78a2' }} >
                CANCEL
              </div>
            </button>
            <button className="landing-button ms-2" style={{ width: '200px' }}
            onClick={() => {
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
            <button className="landing-button" onClick={() => setUpdating(true)}>
              <div className="button-text">
                UPDATE
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}