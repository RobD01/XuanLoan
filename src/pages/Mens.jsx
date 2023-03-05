import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

const Mens = () => {
  // Images

  const menSuit = [
    [
      "https://images.pexels.com/photos/5520327/pexels-photo-5520327.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/5520289/pexels-photo-5520289.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Mens Fashion</h2>

      {/* Mens Suits */}
      <ItemGrid title="Mens Suit" list={menSuit} />
    </div>
  );
};

export default Mens;
