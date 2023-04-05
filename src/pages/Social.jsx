import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import Paypal from "../components/Paypal";

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
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Social Media</h2>
      <Paypal price="10.00" description="Suit 1" />

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
          website! Please complete form below:
        </h5>

        <iframe
          title="Social Media Submission"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-8zhMg17CHMGTNpcqu9oDk5QfUdUqCtK17OLL9YCV8flTzQ/viewform?embedded=true"
          width="100%"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Fashion;
