import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Themes from "../../components/themes/Themes.js";
import Property from "../../components/properties/Property.js";
import Tophomes from "../../components/Tophomes/Tophomes.js";
import Subscribe from "../../components/subscribe/Subscribe.js";
import Footer from "../../components/footer/Footer.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Themes />
        <h1 className="title">
          Browser by propery type
        </h1>
        <Property/>
        <h1 className="title">
          Browser by propery type
        </h1>
        <Tophomes/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
