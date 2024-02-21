import React from "react";
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
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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
          <div className="top-search">
            <box-icon name="cart"></box-icon>
          </div>
        </nav>
      </div>
      <div className="slider-container">
        <div className="slider-banner">
          <img src={banner1} alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} alt="ban3" />
        </div>
        <div className="slider-banner">
          <img src={banner1} alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} alt="ban3" />
        </div>
        <div className="slider-banner">
          <img src={banner1} alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} alt="ban3" />
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control  searchbar-longer"
          placeholder="Search Products.."
        />
      </div>
      <div className="products ">
        <h3>All Products</h3>
        <div className="product-category">
          <div class="product-item">
            <img src={image1} alt="image1" class="productImage" />
            <h4>Biryani</h4>
          </div>
          <div class="product-item">
            <img src={image2} alt="image2" class="productImage" />
            <h4>IceCream</h4>
          </div>
          <div class="product-item">
            <img src={image3} alt="image3" class="productImage" />
            <h4>Shakes</h4>
          </div>
          <div class="product-item">
            <img src={image4} alt="image4" class="productImage" />
            <h4>Pizza</h4>
          </div>
          <div class="product-item">
            <img src={image1} alt="image1" class="productImage" />
            <h4>Biryani</h4>
          </div>
          <div class="product-item">
            <img src={image2} alt="image2" class="productImage" />
            <h4>IceCream</h4>
          </div>
          <div class="product-item">
            <img src={image3} alt="image3" class="productImage" />
            <h4>Shakes</h4>
          </div>
          <div class="product-item">
            <img src={image4} alt="image4" class="productImage" />
            <h4>Pizza</h4>
          </div>
        </div>
      </div>
      <div>
        <h3>Most Popular</h3>
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
      </div>
    </div>
  );
};

export default Home;
