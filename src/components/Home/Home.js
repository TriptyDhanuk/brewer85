import React, { useState, useEffect } from "react";
// import "boxicons";
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
        name: "Biryani",
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
    arrows: false,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="body px-4">
      <div className="header py-3">
        <nav className="flex flex-wrap">
          <div className="logo">
            <box-icon name="menu"></box-icon>
            <h4 className="">Home</h4>
          </div>

          <div className="flex items-center ml-auto">
            <Wishlist style={{ marginRight: "10px" }} />
            <CartIconBadge />
          </div>
        </nav>
      </div>
      <Slider {...settingsMy} className="mb-3">
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner1}
            className="w-100px h-50 block rounded-lg"
            alt="ban1"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner4}
            className="w-100px h-50 block rounded-lg"
            alt="ban2"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner2}
            className="w-100px h-50 block rounded-lg"
            alt="ban3"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner1}
            className="w-100px h-50 block rounded-lg"
            alt="ban1"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner4}
            className="w-100px h-50 block rounded-lg"
            alt="ban2"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={banner2}
            className="w-100px h-50 block rounded-lg"
            alt="ban3"
          />
        </div>
      </Slider>

      <div className="top-search mb-3">
        <input
          type="text"
          placeholder=" What are you looking for ?"
          className="search-input block w-full py-3 px-4 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-lime-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="products" style={{ marginLeft: "10px" }}>
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          All Products
        </h3>
        <div className="product-category flex flex-wrap">
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <a
                href="/menu"
                className="product-item block mx-auto"
                key={product.name}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage mx-auto mb-3 block"
                  onClick={() => handleProductItemClick(product.name)}
                />
                <h4 className="text-lg font-semibold text-slate-800">
                  {product.name}
                </h4>
              </a>
            ))
          ) : (
            <p className="text-base font-medium text-slate-800">
              No products found
            </p>
          )}
        </div>
      </div>

      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Most Popular
        </h3>
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
