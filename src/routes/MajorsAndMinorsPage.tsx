import { BackButton } from "../components/BackButton";

export const MajorsAndMinorsPage = () => {
  return (
    <div className="page-content">
      <div className="title">MAJORS & MINORS</div>
      <BackButton />
      <div className="mt-5">
        <button className="degree-button">
          <div className="button-text">
            VIEW ECSE MAJORS
          </div>
        </button>
        <button className="degree-button">
          <div className="button-text">
            VIEW ECSE MINORS
          </div>
        </button>
        <button className="degree-button">
          <div className="button-text">
            VIEW NON-ECSE MINORS
          </div>
        </button>
      </div>
    </div>
  )
}