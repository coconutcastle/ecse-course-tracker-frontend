import { BackButton } from "../components/BackButton";
import { Majors } from "../common/user.interface";

export const ProfilePage = () => {
  console.log(Majors.COMPUTER)
  return (
    <div className="page-content">
      <div className="title">MAJORS & MINORS</div>
      <BackButton />
      <div className="mt-5">

      </div>
    </div>
  )
}