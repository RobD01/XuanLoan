import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";

const Fashion = () => {
  const socialLink = [
    [
      "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      "https://www.youtube.com/watch?v=aWIRSRMmdN0",
    ],
    [
      "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
      "https://www.instagram.com/xuanloanfabrics/",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Social Media</h2>

      {/* social media */}
      <div class="d-flex justify-content-center">
        {socialLink.map((item) => (
          <a
            href={item[1]}
            target="_blank"
            rel="noreferrer"
            className="flexItem"
          >
            <img src={item[0]} alt={item} width="100%" />
          </a>
        ))}
      </div>

      {/* Participate */}
      <div className="mt-5">
        <h5>
          Submit your photos for a chance to be featured on our Instagram and
          website! Please submission form below:
        </h5>
      </div>
    </div>
  );
};

export default Fashion;
