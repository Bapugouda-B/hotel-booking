import "./hotels.css";
import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/subscribe/Subscribe.js";
import Footer from "../../components/footer/Footer.js";
import { useState } from "react";

function Hotels() {
  //state to manage slider manupulation using img index numbers.
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const hotelimages = [
    {
      src: "https://assets.gqindia.com/photos/5cdc67400f4cc0731ddb149a/master/pass/rambagh-palace-jaipur1.jpg",
    },
    {
      src: "https://wallpapercave.com/wp/wp3598837.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.DDYGhFqUNR5rc1TtT2Vh-wHaE8?pid=ImgDet&w=474&h=316&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.8DPg9PsSLLPjYT0QqY6qbwHaEK?pid=ImgDet&w=474&h=266&rs=1",
    },
    {
      src: "https://www.whatsappimages.in/wp-content/uploads/2022/08/HD-New-hotel-Images-2.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/fd/43/tropical-pool.jpg",
    },
  ];

  //when we click on image it opens perticular img with the help of index number (managed by useState)
  const handleOpen = (index) => {
    setSlideIndex(index);
    setOpen(true);
  };

  // onClick function for sliding imgs to left & right side.
  const handleMovement = (direction) => {
    let newSliderIndex;

    if (direction === "left") {
      newSliderIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSliderIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(newSliderIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close-slider"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="slider-arrow"
              onClick={() => handleMovement("left")}
            />

            <div className="slider-wrapper">
              <img
                className="slider-image"
                src={hotelimages[slideIndex].src}
                alt=""
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="slider-arrow"
              onClick={() => handleMovement("right")}
            />
          </div>
        )}
        <div className="hotel-details-wrapper">
          <button className="book-hotel">Book Now</button>
          <h1 className="hotel-title">Grand Hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotel-distance">
            Excellent location - 500 m Away From Center
          </span>
          <span className="hotel-Price">
            Book a stay over $114 at thise property and get a free airport taxi
          </span>
          <div className="hotel-images">
            {hotelimages.map((photo, index) => (
              <div className="hotel-img-wrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=""
                  className="hotel-image"
                />
              </div>
            ))}
          </div>
          <div className="hotel-summery">
            <div className="hotel-price-details">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Locate in the real heart of Krakow, this propery has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> <small>(for 9 nights)</small>
              </h2>
              <button>Book Now</button>
            </div>
            <div className="hotel-summery-content">
              <h1 className="hotel-title">Stay in the heart of Krakow</h1>
              <p className="hotel-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                tenetur iusto dolorem, beatae omnis et velit quaerat voluptas
                voluptates amet doloremque ducimus, explicabo esse. Qui
                obcaecati voluptate necessitatibus sint id. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa, consectetur rerum.
                Saepe est provident quam dolore autem quo, tempore vel obcaecati
                unde? Quaerat tenetur repellendus reprehenderit soluta vitae,
                praesentium asperiores.
              </p>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotels;
