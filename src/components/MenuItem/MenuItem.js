import React, { useState, useEffect } from "react";
import "boxicons";
import "../Home/Home.css";
import "./MenuCard";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import searchIcon from "../../images/searchIcon.png";
import ProductCard from "../ProductCard/ProductCard";
import noodles from "../../images/noodles.png";
import drinks from "../../images/drinks.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";

const MenuItem = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    console.log("Stored Product:", storedProduct);
    if (storedProduct) {
      setSelectedProduct(storedProduct);
    }
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    console.log("Stored Product:", storedProduct);
    if (storedProduct) {
      setSelectedProduct(storedProduct);
    }
  }, []);

  const products = {
    Biryani: [
      {
        image: image1,
        name: "Hydrabadi Biryani",
        price: "25",
        discount: "60% off",
      },
    ],
    IceCream: [
      {
        image: image2,
        name: "IceCream",
        price: "25",
        discount: "60% off",
      },
    ],
    Pizza: [
      {
        image: image4,
        name: "Pizza",
        price: "25",
        discount: "60% off",
      },
    ],
    Burger: [
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
    ],
    Shakes: [
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
    ],
    Chinese: [
      {
        image: noodles,
        name: "Chinese",
        price: "25",
        discount: "60% off",
      },
    ],
    Drinks: [
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
    ],
    // Add more products as needed
  };

  const productsMenu = {
    Biryani: [
      {
        id: 1,
        image: image1,
        name: "Kashmiri Biryani",
        price: "25",
        discount: "60% off",
      },
      {
        id: 2,
        image: image1,
        name: "Hydrabadi Biryani",
        price: "25",
        discount: "60% off",
      },
      {
        id: 3,
        image: image1,
        name: "Kolkata Special Biryani",
        price: "25",
        discount: "60% off",
      },
      {
        id: 4,
        image: image1,
        name: "Hydrabadi Biryani",
        price: "25",
        discount: "60% off",
      },
      {
        id: 5,
        image: image1,
        name: "Kashmiri Biryani ",
        price: "25",
        discount: "60% off",
      },
    ],
    IceCream: [
      {
        id: 6,
        image: image2,
        name: "IceCream",
        price: "25",
        discount: "60% off",
      },
      {
        id: 7,
        image: image2,
        name: "IceCream",
        price: "25",
        discount: "60% off",
      },
      {
        id: 8,
        image: image2,
        name: "IceCream",
        price: "25",
        discount: "60% off",
      },
      {
        image: image2,
        name: "IceCream",
        price: "25",
        discount: "60% off",
      },
    ],
    Pizza: [
      {
        image: image4,
        name: "Pizza",
        price: "25",
        discount: "60% off",
      },
      {
        image: image4,
        name: "Pizza",
        price: "25",
        discount: "60% off",
      },
      {
        image: image4,
        name: "Pizza",
        price: "25",
        discount: "60% off",
      },
      {
        image: image4,
        name: "Pizza",
        price: "25",
        discount: "60% off",
      },
    ],
    Burger: [
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
      {
        image: burger,
        name: "Burger",
        price: "25",
        discount: "60% off",
      },
    ],
    Shakes: [
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
      {
        image: shakes,
        name: "Shakes",
        price: "25",
        discount: "60% off",
      },
    ],
    Chinese: [
      {
        image: noodles,
        name: "Chinese",
        price: "25",
        discount: "60% off",
      },
      {
        image: noodles,
        name: "Chinese",
        price: "25",
        discount: "60% off",
      },
      {
        image: noodles,
        name: "Chinese",
        price: "25",
        discount: "60% off",
      },
    ],
    Drinks: [
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
      {
        image: drinks,
        name: "Drinks",
        price: "25",
        discount: "60% off",
      },
    ],
    // Add more products as needed
  };

  const filteredProducts = selectedProduct ? products[selectedProduct] : [];
  console.log("Filtered Products:", filteredProducts);

  const filteredProductsMenu = selectedProduct
    ? productsMenu[selectedProduct]
    : [];
  console.log("Filtered Products:", filteredProducts);

  // Combine filteredProducts and filteredProductsMenu into a single array
  const combinedProducts = [...filteredProducts, ...filteredProductsMenu];
  const handleGoBack = () => {
    window.history.back(); // Go back to the previous page
  };

  // Filter the combined array based on the search query
  const filteredProductsByName = combinedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="body">
      <div className="header">
        <nav className="navbar headNav">
          <div className="logo" onClick={handleGoBack}>
            {" "}
            <box-icon name="arrow-back"></box-icon>
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
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div>
        <h3>Most Popular</h3>
        <div className="product-filter">
          {(searchQuery === "" ? filteredProducts : filteredProductsByName).map(
            (product, index) => (
              // {filteredProducts.map((product, index) => (
              <>
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                  discount={product.discount}
                />
              </>
            )
          )}
          {(searchQuery === ""
            ? filteredProductsMenu
            : filteredProductsByName
          ).map((product, index) => (
            // {filteredProductsMenu.map((product, index) => (
            <MenuCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
              discount={product.discount}
            />
          ))}
        </div>
        {/* <div className="product-filter">
          <h3>search</h3>
          {(searchQuery === ""
            ? filteredProductsMenu
            : filteredProductsByName
          ).map((product, index) => (
            <>
              <MenuCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
              />
            </>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MenuItem;
