import "./subscribe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function MailList() {
  return (
    <div className="subscribers-container">
      <div className="user-contact">
        <div>
          <div className="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="mail-title">
              {" "}
              Get special discount on your inbox{" "}
            </div>
          </div>

          <div className="mail-input-container">
            <input
              type="text"
              placeholder="Enter Your Email To Subscribe . . ."
            />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="contact-container">
          <div>
            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
          </div>
          <div className="number">
            <h1>
              For any Help You May Call Us At <br /> +91 9742056505
            </h1>
            <h2>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailList;
