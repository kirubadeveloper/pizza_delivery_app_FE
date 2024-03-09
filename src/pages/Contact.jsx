import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOne from "../assets/images/shop2.jpg";
import imgTwo from "../assets/images/shop1.jpg";
import imgThree from "../assets/images/shop3.jpg";
import imgFour from "../assets/images/shop4.jpg";
import imgFive from "../assets/images/shop5.jpg";

const Contact = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    horizontal: true,
    horizontalSwiping: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div
      className="contact"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="mini-carousel"
        style={{ width: "90%", maxWidth: "600px", padding: "20px" }}
      >
        <Slider {...settings}>
          <div>
            <img src={imgThree} alt="shop1" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={imgFour} alt="shop1" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={imgTwo} alt="shop1" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={imgFive} alt="shop1" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={imgOne} alt="shop1" style={{ width: "100%" }} />
          </div>
        </Slider>
      </div>
      <div
        className="restaurant-details"
        style={{ width: "90%", maxWidth: "600px", padding: "20px" }}
      >
        <div
          className="restaurant-card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Bon Appétit
          </h3>
          <p
            style={{ marginBottom: "10px", fontSize: "16px", color: "#888888" }}
          >
            Description of the restaurant Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p
            style={{ marginBottom: "10px", fontSize: "16px", color: "#888888" }}
          >
            Address: 123 Street, Pondicherry, India
          </p>
          <p
            style={{ marginBottom: "10px", fontSize: "16px", color: "#888888" }}
          >
            Phone: +91 1234567890
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Visit Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom arrow components for the mini-carousel
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ left: "-2px", zIndex: "1", width: "20px", height: "20px" }}
    >
      &lt;
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ right: "-2px", zIndex: "1" }}
    >
      &gt;
    </div>
  );
};

export default Contact;
