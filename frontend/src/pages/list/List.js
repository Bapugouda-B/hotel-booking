import "./list.css";
import Header from "../../components/header/Header.js";
import Navbar from "../../components/navbar/Navbar.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Search from "../../components/searchproduct/Search.js";
import MailList from "../../components/subscribe/Subscribe.js";
import Footer from "../../components/footer/Footer.js";

function List() {
  // useLocation provides all data which we used in header comp in search ele
  const location = useLocation();
  //accessing props data
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState("false");
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search Booking</h1>
            <div className="list-search-item">
              <label>Destination</label>
              {/* here destination we get it from header comp from input ele i,e search location   */}
              <input placeholder={destination} type="text" />
            </div>
            <div className="list-search-item">
              <label>Check-In Date</label>
              {/* getting all search data from header comp using props */}
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} 
              to 
              ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {/* getting Daterange from react-date-range library */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-search-item">
              <label>Select Options</label>
              <div className="options-list">
                <div className="search-option-items">
                  <span className="search-option-text">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="search-option-input" />
                </div>
                <div className="search-option-items">
                  <span className="search-option-text">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="search-option-input" />
                </div>
                <div className="search-option-items">
                  <span className="search-option-text">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="search-option-input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="search-option-items">
                  <span className="search-option-text">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="search-option-input"
                    placeholder={options.children}
                  />
                </div>
                <div className="search-option-items">
                  <span className="search-option-text">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    className="search-option-input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="search-result">
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default List;
