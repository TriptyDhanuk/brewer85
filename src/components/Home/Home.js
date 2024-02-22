import React, { useState, useEffect } from "react";
import "boxicons";
import "./Home.css";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner4 from "../../images/banner4.jpg";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import noodles from "../../images/noodles.png";
import drinks from "../../images/drinks.png";
import ProductCard from "../ProductCard/ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("selectedProduct", selectedProduct);
  useEffect(() => {
    // Load selected product from localStorage on component mount
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setSelectedProduct(storedProduct);
    }
  }, []);

  useEffect(() => {
    // Save selected product to localStorage whenever it changes
    localStorage.setItem("selectedProduct", selectedProduct);
  }, [selectedProduct]);

  const handleProductItemClick = (productName) => {
    setSelectedProduct(productName);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // useEffect(() => {
  //   const filtered = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // const MySettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 3,
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="body">
      <div className="header">
        <nav className="navbar headNav">
          <div className="logo">
            <box-icon name="menu"></box-icon>
            <h4 className="">Home</h4>
          </div>
          <box-icon name="cart"></box-icon>
        </nav>
      </div>
      {/* <Slider {...settings}> */}
      <div className="slider-container">
        <div className="slider-banner">
          <img src={banner1} alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} className="w-100px h-50" alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} className="w-100px h-50" alt="ban3" />
        </div>
        <div className="slider-banner">
          <img src={banner1} className="w-100px h-50" alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} className="w-100px h-50" alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} className="w-100px h-50" alt="ban3" />
        </div>
        <div className="slider-banner">
          <img src={banner1} className="w-100px h-50" alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} className="w-100px h-50" alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} className="w-100px h-50" alt="ban3" />
        </div>
      </div>
      {/* </Slider> */}
      <div className="top-search">
        <input
          type="text"
          placeholder=" Search Products..."
          className="search-input bg-[#fffg] "
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "400px",
            height: "52px",
            // backgroundColor: "lightgrey",
            borderRadius: "7px",
            paddingLeft: "20px",
          }}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="products ">
        <h3>All Products</h3>
        <div className="product-category">
          <a href="/menu" class="product-item">
            <img
              src={image1}
              alt="image1"
              class="productImage"
              onClick={() => handleProductItemClick("Biryani")}
            />
            <h4>Biryani</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={image2}
              alt="image2"
              class="productImage"
              onClick={() => handleProductItemClick("IceCream")}
            />
            <h4>IceCream</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={burger}
              alt="image3"
              class="productImage"
              onClick={() => handleProductItemClick("Burger")}
            />
            <h4>Burger</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={image4}
              alt="image4"
              class="productImage"
              onClick={() => handleProductItemClick("Pizza")}
            />
            <h4>Pizza</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={shakes}
              alt="image1"
              class="productImage"
              onClick={() => handleProductItemClick("Shakes")}
            />
            <h4>Shakes & Juices</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={noodles}
              alt="image2"
              class="productImage"
              onClick={() => handleProductItemClick("Chinese")}
            />
            <h4>Chinese</h4>
          </a>
          <a href="/menu" class="product-item">
            <img
              src={drinks}
              alt="image3"
              class="productImage"
              onClick={() => handleProductItemClick("Drinks")}
            />
            <h4>Drinks</h4>
          </a>
        </div>
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
          <ProductCard
            image={image4}
            name="Pizza"
            price="25"
            discount="60% off"
          />
          <ProductCard
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
          <ProductCard
            image={image1}
            name="Hydrabadi Biryani"
            price="25"
            discount="60% off"
          />
          <ProductCard
            image={image4}
            name="Pizza"
            price="25"
            discount="60% off"
          />
          <ProductCard
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
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Home;
