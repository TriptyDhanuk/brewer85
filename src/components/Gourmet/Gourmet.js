import React, { useState, useEffect } from "react";
import "boxicons";
import "../Home/Home.css";
import ProductCard from "../ProductCard/ProductCard";
import MenuCard from "../MenuItem/MenuCard";
import CartIconBadge from "../CartIconBadge";
import Wishlist from "../../components/Wishlist";
import { Container } from "react-floating-action-button";
import ViewCart from "../CartButton/ViewCart";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.jpg";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";

const Gourmet = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredProductsByName = Object.values(gourmet)
    .flat()
    .filter((product) => product.name.toLowerCase().includes(searchQuery));

  return (
    <div className="body px-4">
      {/* Your existing header JSX */}
      <div className="top-search mb-3">
        <input
          type="text"
          placeholder=" What are you looking for ?"
          className="search-input block w-full py-3 px-4 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-lime-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Gourmet Products
        </h3>
        <div className="product-filter flex flex-wrap sm:-mx-[0.625rem] gap-y-5">
          {filteredProductsByName.map((product) => (
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
          ))}
        </div>
      </div>
      <Container>
        <ViewCart />
      </Container>
    </div>
  );
};

export default Gourmet;
