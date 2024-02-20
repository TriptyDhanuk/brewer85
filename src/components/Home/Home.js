import React from "react";

const Home = () => {
  return (
    <div className="body">
      <div className="header">
        <nav className="navbar navbar-light headNav px-3 d-flex align-items-center">
          <div className="logo">
            <div className="d-flex align-items-center">
              <i class="bx bx-menu"></i>
              <h4 className="ms-2 mb-0">Home</h4>
            </div>
          </div>
          <div className="ms-auto top-search">
            <div className="input-group ms-auto nowrap">
              <input
                type="text"
                className="form-control searchbar"
                placeholder="Search Food Item"
                style={{ borderColor: "white" }}
              />

              <button
                className="btn btn-outline-secondary"
                style={{ color: "white" }}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
