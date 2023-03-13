import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images
import image1 from "../images/ao-dai/1.jpg";
import image2 from "../images/ao-dai/2.jpg";
import image3 from "../images/ao-dai/3.jpg";
import image4 from "../images/ao-dai/4.jpg";
import image5 from "../images/ao-dai/5.jpg";
import image6 from "../images/ao-dai/6.jpg";
import image7 from "../images/ao-dai/7.jpg";

const AoDai = () => {
  // Images
  // const aoDai = [
  //   [
  //     "https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
  //   ],
  //   [
  //     "https://images.pexels.com/photos/3218724/pexels-photo-3218724.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
  //   ],
  //   [
  //     "https://images.pexels.com/photos/11441492/pexels-photo-11441492.png?auto=compress&cs=tinysrgb&w=600",
  //     "Vãi may đồ Vest. Vãi may quần tay",
  //   ],
  // ];

  const aoDai = [
    [image1],
    [image2],
    [image3],
    [image4],
    [image5],
    [image6],
    [image7],
    [
      "https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/3218724/pexels-photo-3218724.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/11441492/pexels-photo-11441492.png?auto=compress&cs=tinysrgb&w=600",
    ],
  ];

  const sunglasses = [
    [
      "https://images.pexels.com/photos/4223655/pexels-photo-4223655.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Women's Fashion</h2>

      {/* Ao Dai */}
      <ItemGrid title="Ao Dai" list={aoDai} />

      {/* Sunglasses */}
      <ItemGrid title="Sunglasses" list={sunglasses} />
    </div>
  );
};

export default AoDai;
