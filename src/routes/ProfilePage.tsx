import { BackButton } from "../components/BackButton";
import { Majors, UserInfo, MajorsText, MinorsText } from "../common/calendar.interface";

interface ProfilePageProps {
  user: UserInfo;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
  return (
    <div className="page-content">
      <div className="title">USER PROFILE</div>
      <BackButton />
      <div className="mt-5">
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-5'>First Name: </div>
          <div className='course-info-text col-7'>{user.firstName}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-5'>Last Name: </div>
          <div className='course-info-text col-7'>{user.lastName}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-5'>Email: </div>
          <div className='course-info-text col-7'>{user.email}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-5'>Major: </div>
          <div className='course-info-text col-7'>{MajorsText[user.major]}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-5'>Minor(s): </div>
          <div className='course-info-text col-7'>No Minor</div>
        </div>
      </div>
    </div>
  )
}