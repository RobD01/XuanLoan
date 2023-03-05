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
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://cdn.shopify.com/s/files/1/0071/9663/9302/collections/yezi-tea-raw-yunnan-puerh-cake-with-knife_1024x1024_b21d73a9-a0ee-4b48-9b67-5e81d3f15c9d_1600x.jpg?v=1554701325",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://i5.walmartimages.com/asr/10e7ac54-034a-4d23-8091-ebed9d13b6c0.5a678cd7e36190797a0621dc66b67d4a.jpeg",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
    [
      "https://m.media-amazon.com/images/I/81X1biOsyAL.jpg",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://cdn.shopify.com/s/files/1/0071/9663/9302/collections/yezi-tea-raw-yunnan-puerh-cake-with-knife_1024x1024_b21d73a9-a0ee-4b48-9b67-5e81d3f15c9d_1600x.jpg?v=1554701325",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
  ];

  const hair = [
    [
      "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/4498317/pexels-photo-4498317.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/13720328/pexels-photo-13720328.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
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
