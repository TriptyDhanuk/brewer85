import React, { useState } from "react";
import "boxicons";
import "../Home/Home.css";
import "./MenuCard";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import searchIcon from "../../images/searchIcon.png";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";

const MenuItem = () => {
  return (
    <div className="body">
      <div className="header">
        <nav className="navbar headNav">
          <div className="logo">
            <a href="/home">
              {" "}
              <box-icon name="arrow-back"></box-icon>
            </a>

            <h4 className="">Menu Item</h4>
          </div>
          <box-icon name="cart"></box-icon>
        </nav>
      </div>

      <div className="top-search">
        <input
          type="text"
          placeholder=" What are you looking for ?"
          className="search-input"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "400px",
            height: "52px",
            backgroundColor: "#e7e7e7",
            backgroundImage: { searchIcon },
            borderRadius: "7px",
            paddingLeft: "20px",
          }}
        />
      </div>

      <div>
        <h3>Most Popular</h3>
        {/* <Slider {...settings}> */}
        <div className="product-filter">
          <ProductCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
          <MenuCard image={image4} name="Pizza" price="25" discount="60% off" />
          <MenuCard
            image={image2}
            name="IceCream"
            price="25"
            discount="60% off"
          />
          <ProductCard
            image={burger}
            name="Veg Burger"
            price="25"
            discount="60% off"
          />
          <MenuCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
        </div>
        <div className="product-filter">
          <ProductCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
          <MenuCard image={image4} name="Pizza" price="25" discount="60% off" />
          <MenuCard
            image={image2}
            name="IceCream"
            price="25"
            discount="60% off"
          />
          <ProductCard
            image={burger}
            name="Veg Burger"
            price="25"
            discount="60% off"
          />
          <MenuCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
        </div>
        <div className="product-filter">
          <ProductCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
          <MenuCard image={image4} name="Pizza" price="25" discount="60% off" />
          <MenuCard
            image={image2}
            name="IceCream"
            price="25"
            discount="60% off"
          />
          <ProductCard
            image={burger}
            name="Veg Burger"
            price="25"
            discount="60% off"
          />
          <MenuCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
        </div>
        <div className="product-filter">
          <ProductCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
          <MenuCard image={image4} name="Pizza" price="25" discount="60% off" />
          <MenuCard
            image={image2}
            name="IceCream"
            price="25"
            discount="60% off"
          />
          <ProductCard
            image={burger}
            name="Veg Burger"
            price="25"
            discount="60% off"
          />
          <MenuCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default MenuItem;
