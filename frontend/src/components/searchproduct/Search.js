import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTaxi} from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="product">
      <div className="product-details">
        <div className="product-ratings">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        <div className="product-detail-texts">
          <span className="product-price">Rs.1200/- </span>
          <span className="product-tax-option">Includes taxes and fees</span>
          <button className="product-button">Check</button>
        </div>
      </div>
      <div className="product-description">
        <h1 className="product-Title">Tower Street Apartment</h1>
        <span className="product-distance">
        <FontAwesomeIcon className="location-icon" icon={faLocationDot} /> 500m away from here</span>
        <span className="product-taxi-option">
        Free airport taxi..<FontAwesomeIcon className="taxi-icon" icon={faTaxi} /></span>
        <span className="product-subtitle">
          Studion Apartment with Air conditioning
        </span>
        <span className="product-includes">
          Entire studio • 1 bathroom • 21m.sq 1 full bed
        </span>
        <span className="cancel-option">Free cancellation</span>
        <span className="product-cancel-option-subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <img
        className="product-img"
        src="https://3.bp.blogspot.com/-R-anorDC1xo/Uq8vZBcCHoI/AAAAAAAABG4/ysi5De2MKaw/s1600/laxmi-ma-008.jpg"
        alt=""
      />
    </div>
  );
}

export default Search;
