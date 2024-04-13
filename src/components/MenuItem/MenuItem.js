import React, { useState, useEffect } from "react";
import "boxicons";
import "../Home/Home.css";
import "./MenuCard";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image4 from "../../images/image4.png";
import burger from "../../images/burger.png";
import shakes from "../../images/shakes.png";
import ProductCard from "../ProductCard/ProductCard";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.jpg";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";
import piz from "../../images/pizza.jpg";
import br from "../../images/br.jpg";
import sk from "../../images/sk.jpg";
import bir from "../../images/bir.avif";
import ice1 from "../../images/ice1.avif";
import dri from "../../images/dri.jpg";
import fullImage from "../../images/food-full-image-01.jpg";
import chinese from "../../images/chinese.jpg";
import drinks from "../../images/drinks.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";
import CartIconBadge from "../CartIconBadge";
import Wishlist from "../../components/Wishlist";
import { Container } from "react-floating-action-button";
import ViewCart from "../CartButton/ViewCart";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const MenuItem = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  // useEffect(() => {
  //   const storedProduct = localStorage.getItem("selectedProduct");
  //   console.log("Stored Product:", storedProduct);
  //   if (storedProduct) {
  //     setSelectedProduct(storedProduct);
  //   }
  // }, []);

  const products = {
    CoffeeLatte: [
      {
        id: 205,
        image: g4,
        name: "CoffeeLatte",
        price: "125",
        discount: "60% off",
      },
    ],
    Biryani: [
      {
        id: 111,
        image: bir,
        name: "Biryani",
        price: "100",
        discount: "60% off",
      },
    ],
    IceCream: [
      {
        id: 222,
        image: ice1,
        name: "IceCream",
        price: "125",
        discount: "60% off",
      },
    ],
    Pizza: [
      {
        id: 333,
        image: piz,
        name: "Pizza",
        price: "150",
        discount: "60% off",
      },
    ],
    Burger: [
      {
        id: 444,
        image: br,
        name: "Burger",
        price: "90",
        discount: "60% off",
      },
    ],
    Shakes: [
      {
        id: 555,
        image: sk,
        name: "Shakes",
        price: "70",
        discount: "60% off",
      },
    ],
    Chinese: [
      {
        id: 666,
        image: chinese,
        name: "Chinese",
        price: "120",
        discount: "60% off",
      },
    ],
    Drinks: [
      {
        id: 777,
        image: dri,
        name: "Drinks",
        price: "55",
        discount: "60% off",
      },
    ],
  };
  const productsMenu = {
    CoffeeLatte: [
      {
        id: 206,
        image: g4,
        name: "CoffeeLatte206",
        price: "125",
        discount: "60% off",
      },
      {
        id: 212,
        image: g4,
        name: "CoffeeLatte212",
        price: "125",
        discount: "60% off",
      },
      {
        id: 213,
        image: g4,
        name: "CoffeeLatte213",
        price: "125",
        discount: "60% off",
      },
      {
        id: 214,
        image: g4,
        name: "CoffeeLatte214",
        price: "125",
        discount: "60% off",
      },
      {
        id: 215,
        image: g4,
        name: "CoffeeLatte215",
        price: "125",
        discount: "60% off",
      },
    ],
    Biryani: [
      {
        id: 1,
        image: bir,
        name: "Kashmiri Biryani",
        price: "125",
        discount: "60% off",
      },
      {
        id: 2,
        image: bir,
        name: "Hydrabadi Biryani",
        price: "170",
        discount: "60% off",
      },
      {
        id: 3,
        image: bir,
        name: "Kolkata Special Biryani",
        price: "100",
        discount: "60% off",
      },
      {
        id: 4,
        image: bir,
        name: "Hydrabadi Biryani 2",
        price: "175",
        discount: "60% off",
      },
      {
        id: 5,
        image: bir,
        name: "Kashmiri Biryani ",
        price: "250",
        discount: "60% off",
      },
      {
        id: 6,
        image: bir,
        name: "Kashmiri Salad Biryani ",
        price: "520",
        discount: "40% off",
      },
      // Add more items as needed
    ],
    IceCream: [
      {
        id: 6,
        image: ice1,
        name: "IceCream",
        price: "70",
        discount: "60% off",
      },
      {
        id: 7,
        image: ice1,
        name: "IceCream 1",
        price: "75",
        discount: "60% off",
      },
      {
        id: 8,
        image: ice1,
        name: "IceCream 2",
        price: "80",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Pizza: [
      {
        id: 9,
        image: piz,
        name: "Pizza",
        price: "250",
        discount: "60% off",
      },
      {
        id: 10,
        image: piz,
        name: "Pizza 1",
        price: "200",
        discount: "60% off",
      },
      {
        id: 11,
        image: piz,
        name: "Pizza 2",
        price: "180",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Burger: [
      {
        id: 12,
        image: br,
        name: "Burger",
        price: "90",
        discount: "60% off",
      },
      {
        id: 13,
        image: br,
        name: "Burger 1",
        price: "110",
        discount: "60% off",
      },
      {
        id: 14,
        image: br,
        name: "Burger 2",
        price: "130",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Shakes: [
      {
        id: 15,
        image: sk,
        name: "Shakes",
        price: "75",
        discount: "60% off",
      },
      {
        id: 16,
        image: sk,
        name: "Shakes 1",
        price: "100",
        discount: "60% off",
      },
      {
        id: 17,
        image: sk,
        name: "Shakes 2",
        price: "110",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Chinese: [
      {
        id: 18,
        image: chinese,
        name: "Chinese",
        price: "125",
        discount: "60% off",
      },
      {
        id: 19,
        image: chinese,
        name: "Chinese 1",
        price: "165",
        discount: "60% off",
      },
      {
        id: 20,
        image: chinese,
        name: "Chinese 2",
        price: "155",
        discount: "60% off",
      },
      // Add more items as needed
    ],
    Drinks: [
      {
        id: 21,
        image: dri,
        name: "Drinks",
        price: "30",
        discount: "60% off",
      },
      {
        id: 22,
        image: dri,
        name: "Drinks 1",
        price: "45",
        discount: "60% off",
      },
      {
        id: 23,
        image: dri,
        name: "Drinks 2",
        price: "50",
        discount: "60% off",
      },
    ],
  };

  const filteredProducts = selectedProduct ? products[selectedProduct] : [];
  console.log("Filtered Products:", filteredProducts);

  const filteredProductsMenu = selectedProduct
    ? productsMenu[selectedProduct]
    : [];
  console.log("Filtered Products:", filteredProducts);

  const combinedProducts = [...filteredProducts, ...filteredProductsMenu];
  const handleGoBack = () => {
    window.history.back();
  };

  const filteredProductsByName = combinedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const handleProductItemClick = (productName) => {
    setSelectedProduct(productName);
    toggleSidebarClose();
    console.log("Selected product:", productName);
  };
  const toggleSidebarClose = () => {
    setIsSidebarOpen(false);
    console.log(isSidebarOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <div
      className={`body mb-24 sidebar ${
        isSidebarOpen ? "open" : ""
      } [&>.main-nav>.nav-box]:-translate-x-64 [&.open>.main-nav>.nav-box]:translate-x-0 [&.open>.main-nav>.overlay]:opacity-50 [&.open>.main-nav>.overlay]:visible [&.open]:overflow-hidden [&.open]:fixed [&.open]:inset-0`}
    >
      <div className="main-nav relative z-[25]">
        <div className="nav-box fixed w-64 top-0 left-0 bottom-0 bg-white duration-300 z-30">
          <div
            className="logo absolute top-3 -right-10"
            onClick={toggleSidebar}
          >
            <box-icon name="menu"></box-icon>
          </div>

          {/* sidebar */}
          <nav>
            <ul className="my-5">
            <Link to="/home"><li><img src={Logo} alt="Logo" className='w-20 h-20 mx-auto mb-5 object-cover rounded-full' /></li></Link>
            
                
              {Object.keys(products).map((category) => (
                <li key={category}>
                  <ul>
                    {products[category].map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleProductItemClick(product.name)}
                        className="cursor-pointer"
                      >

                          <Link  to={`/menu`} className="block py-2 px-4 font-lg font-semibold text-gray-700 hover:text-lime-500"
                          key={product.name} >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="overlay fixed inset-0 bg-black opacity-0 duration-300 invisible"
          onClick={toggleSidebarClose}
        ></div>
      </div>
      <div className="header py-3 px-4 bg-white sticky top-0 z-[20]">
        <div className="flex flex-wrap">
          <div className="mx-auto px-4 text-center">
            <h4 className="font-bold">Menu Item</h4>
          </div>

          <div className="flex items-center absolute right-5">
            <Wishlist style={{ marginRight: "10px" }} />
            <CartIconBadge />
          </div>
        </div>
      </div>

      <div className="top-search mb-3 md:px-4 pt-4 px-3">
        <input
          type="text"
          placeholder=" What are you looking for ?"
          className="search-input block w-full py-3 px-4 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-lime-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-3 md:px-4 px-3">
          Most Popular
        </h3>
        <div className="product-filter flex flex-wrap sm:-mx-[0.625rem] gap-y-5 md:px-4">
          {(searchQuery === "" ? filteredProducts : filteredProductsByName).map(
            (product) => (
              <div
                key={product.id}
                className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full"
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
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
        <ViewCart />
    </div>
  );
};

export default MenuItem;
