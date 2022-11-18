import { BackButton } from "../components/BackButton";


export const MajorsAndMinorsPage = () => {
  return (
    <div className="pageContent">
      <div className="title">MAJORS & MINORS</div>
      <BackButton />
      <div className="mt-5">
        <button className="degreeButton">
          <div className="buttonText">
            VIEW ECSE MAJORS
          </div>
        </button>
        <button className="degreeButton">
          <div className="buttonText">
            VIEW ECSE MINORS
          </div>
        </button>
        <button className="degreeButton">
          <div className="buttonText">
            VIEW NON-ECSE MINORS
          </div>
        </button>
      </div>
    </div>
  )
}