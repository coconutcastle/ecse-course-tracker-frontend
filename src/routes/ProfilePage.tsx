import { BackButton } from "../components/BackButton";
import { Majors, UserInfo } from "../common/calendar.interface";

interface ProfilePageProps {
  user: UserInfo;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
  return (
    <div className="page-content">
      <div className="title">MAJORS & MINORS</div>
      <BackButton />
      <div className="mt-5">
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Title: </div>
          <div className='course-info-text col-9'>{user.firstName}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Credits: </div>
          <div className='course-info-text col-9'>{user.lastName}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Type: </div>
          <div className='course-info-text col-9'>{user.email}</div>
        </div>
      </div>
    </div>
  )
}