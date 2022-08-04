import './ErrorMessage.scss';

import error from "../../assets/images/icon/error.svg";

const ErrorMessage = () => {
  return (
    <div className="error-message-container">
    <div className="container">
      <div className="error-message">
        <img className="error-message__img" src={error} alt="error" />
        <span className="error-message__text">Something went wrong</span>
      </div>
    </div>
  </div>
  )
}

export default ErrorMessage;