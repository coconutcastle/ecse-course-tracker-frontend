import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
    className="backButton"
    onClick={() => { navigate(-1) }}>
      <div className="buttonText" style={{ marginRight: '20px' }}>{'< <'}</div>
      <div className="buttonText">BACK</div>
    </button>
  )
}