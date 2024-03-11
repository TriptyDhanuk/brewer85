import React, { useState, useEffect } from "react";
import "boxicons";
import "./Home.css";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner4 from "../../images/banner4.jpg";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import noodles from "../../images/noodles.png";
import drinks from "../../images/drinks.png";
import ProductCard from "../ProductCard/ProductCard";
import Wishlist from "../../components/Wishlist";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartIconBadge from "../CartIconBadge";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("selectedProduct", selectedProduct);
  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setSelectedProduct(storedProduct);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedProduct", selectedProduct);
  }, [selectedProduct]);

  const handleProductItemClick = (productName) => {
    setSelectedProduct(productName);
  };

  // useEffect(() => {
  //   const filtered = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchQuery]);

  //search product Category
  useEffect(() => {
    const filterProducts = () => {
      const filtered = [];
      for (const category in products) {
        const categoryProducts = products[category].filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        filtered.push(...categoryProducts);
      }
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const products = {
    Biryani: [
      {
        id: 111,
        image: image1,
        name: "Hydrabadi Biryani",
        price: "100",
        discount: "60% off",
      },
    ],
    IceCream: [
      {
        id: 222,
        image: image2,
        name: "IceCream",
        price: "125",
        discount: "60% off",
      },
    ],
    Pizza: [
      {
        id: 333,
        image: image4,
        name: "Pizza",
        price: "150",
        discount: "60% off",
      },
    ],
    Burger: [
      {
        id: 444,
        image: burger,
        name: "Burger",
        price: "90",
        discount: "60% off",
      },
    ],
    Shakes: [
      {
        id: 555,
        image: shakes,
        name: "Shakes",
        price: "70",
        discount: "60% off",
      },
      // Add more products as needed
    ],
    Chinese: [
      {
        id: 666,
        image: noodles,
        name: "Chinese",
        price: "120",
        discount: "60% off",
      },
      // Add more products as needed
    ],
    Drinks: [
      {
        id: 777,
        image: drinks,
        name: "Drinks",
        price: "55",
        discount: "60% off",
      },
    ],
  };
  const handleImgClick = () => {
    window.location.href = `/details/${products.id}`;
  };

  const settingsMy = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
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

          <div style={{ display: "flex", alignItems: "center" }}>
            <Wishlist style={{ marginRight: "10px" }} />
            <CartIconBadge />
          </div>
        </nav>
      </div>
      <Slider {...settingsMy}>
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
          <img src={banner1} alt="ban1" />
        </div>
        <div className="slider-banner">
          <img src={banner4} className="w-100px h-50" alt="ban2" />
        </div>
        <div className="slider-banner">
          <img src={banner2} className="w-100px h-50" alt="ban3" />
        </div>
      </Slider>

      <div className="top-search">
        <input
          type="text"
          placeholder=" What are you looking for ?"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* <div className="products " style={{ marginLeft: "10px" }}>
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
      </div> */}
      <div className="products" style={{ marginLeft: "10px" }}>
        <h3>All Products</h3>
        <div className="product-category">
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <a href="/menu" className="product-item" key={product.name}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                  onClick={() => handleProductItemClick(product.name)}
                />
                <h4>{product.name}</h4>
              </a>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <h3>Most Popular</h3>
        <Slider {...settings}>
          {Object.keys(products).map((category) =>
            products[category].map((product) => (
              <div className="product-filter" key={product.name}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
            ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
