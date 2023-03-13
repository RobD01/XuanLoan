import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

const Products = () => {
  // Images

  const misc = [
    [
      "https://m.media-amazon.com/images/I/81X1biOsyAL.jpg",
      "Green Oil : Eagle Brand",
    ],
    [
      "https://cdn.shopify.com/s/files/1/0071/9663/9302/collections/yezi-tea-raw-yunnan-puerh-cake-with-knife_1024x1024_b21d73a9-a0ee-4b48-9b67-5e81d3f15c9d_1600x.jpg?v=1554701325",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://i5.walmartimages.com/asr/10e7ac54-034a-4d23-8091-ebed9d13b6c0.5a678cd7e36190797a0621dc66b67d4a.jpeg",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  const hair = [
    [
      "https://loverscare.com/img/L/LOVERCARE-Shower-Cream-ROSEHIP.jpg",
      `Lovercare Shower Cream`,
    ],
    [
      "https://i5.walmartimages.com/asr/36219979-091b-4d06-81a0-1604b1cfcc7a.58f484eec7c1f40c0d11c81331b22374.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "Lovercare Body Lotion",
    ],
    [
      "https://loverscare.com/img/L/c40.png",
      "Lovers Hair Colouring Shampoo: 1 : Natural Black",
    ],
    [
      "https://loverscare.com/img/L/c41.png",
      "Lovers Hair Colouring Shampoo: 3 : Dark Brown",
    ],
    [
      "https://loverscare.com/img/L/c38.png",
      "Lovers Hair Colouring Shampoo: 4.5 : Chestnut Brown",
    ],
  ];

  const house = [
    [
      "https://i.ebayimg.com/images/g/UxMAAOSwKcxfz35q/s-l500.jpg",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "http://cdn.shopify.com/s/files/1/0549/5413/1685/products/snugglify-cute-body-pillows-collection-745912.jpg?v=1636151375",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://m.media-amazon.com/images/I/81+6YRB8iOL._AC_SR1840,1472_.jpg",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Products</h2>

      {/* Misc Products */}

      <ItemGrid title="Green Oil and Tea Products" list={misc} />

      {/* Hair Products */}

      <ItemGrid title="Shampoo and Hair Dye Products" list={hair} />

      {/* Bed Products */}
      <ItemGrid title="Pillow Blanket and Household Products" list={house} />
    </div>
  );
};

export default Products;
