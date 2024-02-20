import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <div className="header">
        <nav className="navbar headNav">
          <div className="logo">
            <div className="d-flex align-items-center">
              <i class="bx bx-menu"></i>
              <h4 className="ms-2 mb-0">Home</h4>
            </div>
          </div>
          <div className="top-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control searchbar"
                placeholder="Search Food Item"
              />

              <button className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
