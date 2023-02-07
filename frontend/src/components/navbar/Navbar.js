import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">RD Booking.com</span>
        <div className="btns">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
