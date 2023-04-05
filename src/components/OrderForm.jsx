import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navigation from "./Navbar";
import ItemGrid from "./ItemGrid";
import ItemGridLink from "./ItemGridLink";
import "../style/font.css";
import "../style/main.css";
import "../style/orderForm.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Paypal from "../components/Paypal";

// Mens Suit
import suit3 from "../images/mens-suit/3.jpg";
import suit6 from "../images/mens-suit/6.jpg";
import suit9 from "../images/mens-suit/9.jpg";
import suit11 from "../images/mens-suit/11.jpg";

const OrderForm = (props) => {
  const { id } = useParams();

  let navigate = useNavigate();
  const handleExit = () => {
    navigate(-1);
  };

  const menSuit = [
    { image: suit3, id: 1, text: "Waistcoat, Black", price: 20 },
    { image: suit6, id: 2, text: "Vest, Black, Striped", price: 40 },
    { image: suit9, id: 3, text: "Vest, Navy Blue", price: 40 },
    { image: suit11, id: 4, text: "Waistcoat, Beige", price: 20 },
  ];

  const item = menSuit.find((x) => x.id == id);

  const { image, text, price } = item;

  return (
    <div className="container">
      <Navigation />
      <div className="text-center">
        <h2>Order Form</h2>

        <div className="orderTitle text-center">
          <h3>{text}</h3>
          <h3>$ {price}</h3>
          <Paypal price={price} description={text} />
          <div className="d-grid">
            <Button onClick={handleExit} variant="secondary" size="lg">
              Exit
            </Button>
          </div>
        </div>

        <div className="orderImage text-center">
          <LazyLoadImage
            src={image}
            alt={id}
            className="gridImage"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
