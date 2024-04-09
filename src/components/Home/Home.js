import React, { useState, useEffect } from "react";
// import "boxicons";
import "./Home.css";
import b2 from "../../images/b2.png";
import p1 from "../../images/p1.jpg";
import b5 from "../../images/b5.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import piz from "../../images/piz.jpg";
import br from "../../images/br.jpg";
import sk from "../../images/sk.jpg";
import bir from "../../images/bir.avif";
import ice1 from "../../images/ice1.avif";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.jpg";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";
import noodles from "../../images/noodles.png";
import dri from "../../images/dri.jpg";
import fullImage from "../../images/food-full-image-01.jpg";
import ProductCard from "../ProductCard/ProductCard";
import TopRated from "../TopRated/TopRated";
import Wishlist from "../../components/Wishlist";
import rollpasta from "../../images/rollpasta.jpg";
import Slider from "react-slick";
import animated1 from "../../images/animated1.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartIconBadge from "../CartIconBadge";
import hamburger from "../../images/hamburger.jpg";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import ice from "../../images/ice.jpg";
import MenuCard from "../../components/MenuItem/MenuCard";
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
        image: noodles,
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

  const gourmet = {
    Pudding: [
      {
        id: 201,
        image: g1,
        name: "Custard Pudding",
        price: "125",
        discount: "60% off",
      },
    ],

    Chenab: [
      {
        id: 202,
        image: g2,
        name: "Chenab",
        price: "90",
        discount: "60% off",
      },
    ],
    PinaColada: [
      {
        id: 203,
        image: g3,
        name: "PinaColada",
        price: "70",
        discount: "60% off",
      },
    ],
    CoffeeLatte: [
      {
        id: 205,
        image: g4,
        name: "CoffeeLatte",
        price: "125",
        discount: "60% off",
      },
    ],

    FruitySoda: [
      {
        id: 206,
        image: g5,
        name: "FruitySoda",
        price: "70",
        discount: "60% off",
      },
    ],

    ChocoVanillaCake: [
      {
        id: 207,
        image: g6,
        name: "ChocoVanillaCake",
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
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    rewind: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const topOne = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rewind: true,
    autoplaySpeed: 7000,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offers = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 396,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1061,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 396,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="body">
      <div className="header py-3 px-4">
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
      <Slider {...settingsMy} className="mb-3 px-4">
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={b2}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban1"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={p1}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban2"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={b5}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban3"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={b2}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban1"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={p1}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban2"
          />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img
            src={b5}
            className="w-100px w-full md:h-[25vh] h-[20vh] object-cover block rounded-lg"
            alt="ban3"
          />
        </div>
      </Slider>

      <div className="px-4">
        <div className="top-search mb-5">
          <input
            type="text"
            placeholder=" What are you looking for ?"
            className="search-input block w-full py-3 px-4 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-lime-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="products mb-10">
          <h3 className="text-xl font-semibold text-slate-800 main_heading mb-3">
            <span>What's on your mind?</span>
          </h3>

          <div className="product-category">
            <Slider {...settings1}>
              {Array.isArray(filteredProducts) &&
              filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <a
                    href="/menu"
                    className="product-item !block !mx-auto"
                    key={product.name}
                  >
                    <div className="w-full h-28 md:h-48 overflow-hidden relative">
                      <div className="w-28 h-28 md:w-48 md:h-48 rounded-full border-4 border-solid border-gray-300 bg-gray-300 relative mx-auto">
                        <div className="w-full h-full rounded-full border-2 border-dotted border-black overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="productImage mx-auto mb-3 block duration-300 w-full h-full object-cover"
                            onClick={() => handleProductItemClick(product.name)}
                          />
                        </div>
                      </div>
                    </div>

                    <h4 className="mt-3 text-md font-semibold text-slate-800">
                      {product.name}
                    </h4>
                  </a>
                ))
              ) : (
                <p className="text-base font-medium text-slate-800">
                  No products found
                </p>
              )}
            </Slider>
          </div>
        </div>

        <div className="mb-10">
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

      {/* <Slider {...offers} className="">
        <div className="slider-banner px-2 "></div>
        <div className="slider-banner px-2 overflow-hidden">
          <img src={banner4} className="w-100px h-50 block " alt="ban2" />
        </div>
        <div className="slider-banner px-2 overflow-hidden">
          <img src={banner2} className="w-100px h-50 block " alt="ban3" />
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
      </Slider> */}
      <div className="p-4 bg-black">
        <h3 className="text-xl font-semibold text-white mb-3 ">
          Today's Special Items
        </h3>
        <div className="relative mb-3">
          {/* Text and button container */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
            <div className="text-center">
              <div className="text-black border-2 border-white p-4 shadow-lg bg-white bg-opacity-75">
                <h1 className="text-3xl font-bold">Grab Your Craving Now</h1>
              </div>

              <div className="">
                <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-3  items-center">
                  Order Now<span className="ml-2">&#8594;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slider */}
          <Slider {...topOne} className="z-0">
            <div className="slider-banner px-2 overflow-hidden">
              <img
                src={ice}
                className="w-50px h-25 block rounded-lg"
                alt="ban3"
              />
            </div>
            <div className="slider-banner px-2 overflow-hidden">
              <img
                src={t1}
                className="w-50px h-25 block rounded-lg"
                alt="ban1"
              />
            </div>
            <div className="slider-banner px-2 overflow-hidden">
              <img
                src={t2}
                className="w-50px h-25 block rounded-lg"
                alt="ban2"
              />
            </div>
            <div className="slider-banner px-2 overflow-hidden">
              <img
                src={rollpasta}
                className="w-50px h-25 block rounded-lg"
                alt="ban3"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Gourmet Collection
        </h3>
        <div className="flex overflow-x-auto">
          {/* <Slider {...settings}> */}
          {Object.keys(gourmet).map((category) =>
            gourmet[category].map((product) => (
              <MenuCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
              />
            ))
          )}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
