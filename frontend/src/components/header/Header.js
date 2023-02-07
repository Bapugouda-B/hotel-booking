import "./header.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
//we get from ->react-date-range npm
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header({type}) {
  // manipulating open and close of react-date-range using state
  const [openDate, setOpenDate] = useState(false);
  // state to manage searching hotels in header input
  const [destination, setDestination] = useState('');
  //state used to manage react-daterange
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //state to manage open and closing the options such as children,adult & room.
  // initially state is false by using onClick function we manipulate open & close
  const [openOptions, setOpenOptions] = useState(false);

  // usestate to manipulate num of selections for adult, children & room
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const navigate= useNavigate()

  // handle function for choosing required number of values by clicking on btns.
  // initially state use prev data which are used as initial State values.
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // this onClick function take us to hotels page, using inbuilt function called useNavigate
  // passing states as a props to list component
const handleSearch=()=>{
  navigate('/hotels', {state:{destination, date, options}} )
}

  return (
    <div className="header">
      {/* conditionally applying css to list compoent using props */}
      <div className={type==='list' ? 'header-container list-mode' : 'header-container'}>
        <div className="header-list">
          <div className="header-items active">
            <FontAwesomeIcon icon={faBed} />
            <span>Book Hotel</span>
          </div>
          <div className="header-items">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Book Taxi</span>
          </div>
          <div className="header-items">
            <FontAwesomeIcon icon={faCar} />
            <span>Rent Car</span>
          </div>
          <div className="header-items">
            <FontAwesomeIcon icon={faPlane} />
            <span>Book Flight</span>
          </div>
          
          {/* <div className="header-items">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div> */}
          
        </div>
        {/* condition for list component using props. (not allow bellow elements in list component)*/}
        { type !== 'list' &&
        <>
        <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
        <p className="header-description">
          Get rewarded for your travels unlock instant savings of 10% or more
          with a free RDbooking account
        </p>
        <button className="header-btn">Sign in / Register</button>

        <div>
          <div className="header-search">
            <div className="header-search-items">
              <FontAwesomeIcon icon={faBed} className="search-box-icon" />
              <input
                type="text"
                placeholder="Search your location"
                className="search-input"
                onChange={e=>setDestination(e.target.value)}
              />
            </div>
            <div className="header-search-items">
              <FontAwesomeIcon icon={faCalendarDay} className="search-box-icon" />
              {/* onClick function to manage opening and closing of date-range by using state */}
              <span
                onClick={() => setOpenDate(!openDate)}
                className="search-text"
              >
                {/* dynamically getting date using state array which we created above */}
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {/* copied from react-date-range and appying states */}
              {/* by clicking on span element, opening and closing operation will happen for choosing Date-range   */}
              {openDate && (
                <DateRange
                  className="calendar"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="header-search-items">
              <FontAwesomeIcon icon={faPerson} className="search-box-icon" />
              {/* onClick function to manage opening and closing of options by using state */}
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="search-text"
              >
                {/* options for dynamically selecting persons and rooms by using state */}
                {`${options.adult} Adult ${options.children} Children ${options.room} Room `}
              </span>
              {/* by clicking on span element, opening and closing operation will happen for selecting required Options */}
              {openOptions && (
                <div className="item-options">
                  <div className="option-item">
                    <span className="select-adult">Adult</span>
                    <div className="option-counter">
                      <button
                        // decrement (-) btn  disable if the adult value is 1 or 0
                        disabled={options.adult <= 1}
                        className="option-counter-btn"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="option-counter-number">
                        {options.adult}
                      </span>
                      <button
                        className="option-counter-btn"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option-item">
                    <span className="select-adult">Children</span>
                    <div className="option-counter">
                      <button
                        // decrement (-) btn  disable if the children value is 0
                        disabled={options.children <= 0}
                        className="option-counter-btn"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="option-counter-number">
                        {options.children}
                      </span>
                      <button
                        className="option-counter-btn"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option-item">
                    <span className="select-adult">Room</span>
                    <div className="option-counter">
                      <button
                        // decrement (-) btn  disable if the room value is 1 or 0.
                        disabled={options.room <= 1}
                        className="option-counter-btn"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="option-counter-number">
                        {options.room}
                      </span>
                      <button
                        className="option-counter-btn"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="header-search-items">
              <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header;
