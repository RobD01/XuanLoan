import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images
// blanket
import image26 from "../images/blanket/26.jpg";
import image27 from "../images/blanket/27.jpg";
import image28 from "../images/blanket/28.jpg";
import image37 from "../images/blanket/37.jpg";
import image38 from "../images/blanket/38.jpg";

// kids blanket
import image29 from "../images/kids-blanket/29.jpg";
import image30 from "../images/kids-blanket/30.jpg";

// household
import image31 from "../images/house/31.jpg";
import image35 from "../images/house/35.jpg";
import image36 from "../images/house/36.jpg";

// Face Mask
import image15 from "../images/face-mask/15.jpg";
import image16 from "../images/face-mask/16.jpg";
import image17 from "../images/face-mask/17.jpg";

const Products = () => {
  // Images

  const tea = [
    [
      "https://m.media-amazon.com/images/I/81X1biOsyAL.jpg",
      "Green Oil : Eagle Brand",
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

  const blanket = [
    [image26],
    [image27],
    [image28],
    [image29],
    [image30],
    [image37],
    [image38],
  ];

  const house = [[image31], [image35], [image36]];

  const faceMask = [[image15], [image16], [image17]];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Products</h2>

      {/* Green Oil & Tea Products */}

      <ItemGrid title="Green Oil and Tea Products" list={tea} />

      {/* Hair Products */}

      <ItemGrid title="Shampoo and Hair Dye Products" list={hair} />

      {/* Bed Products */}
      <ItemGrid title="Blankets & Pillows" list={blanket} />

      <ItemGrid title="Household Products" list={house} />

      <ItemGrid title="Face Mask" list={faceMask} />
    </div>
  );
};

export default Products;
