import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
    className="back-button"
    onClick={() => { navigate(-1) }}>
      <div className="button-text" style={{ marginRight: '20px' }}>{'< <'}</div>
      <div className="button-text">BACK</div>
    </button>
  )
}