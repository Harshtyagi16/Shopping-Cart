import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";


const Navbar = ({ items, setItems, products }) => {
  const navigate = useNavigate();
  const addCart = () => {
    navigate("/cart");
  };

  const filterbycategory = (attribute, value) => {
    const filteredProducts = products.filter(
      (item) => item[attribute] === value
    );
    setItems([...filteredProducts]);
  };

  const handleSearch = (name) => {
    const regex = new RegExp(name, "i");
    const filterBySearch = products.filter((item) => regex.test(item.name));
    setItems([...filterBySearch]);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Reset
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle bg-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span
                      className="dropdown-item"
                      href="#"
                      onClick={() => filterbycategory("category", "Hoodie")}
                    >
                      Hoodie
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      href="#"
                      onClick={() => filterbycategory("category", "shirt")}
                    >
                      Shirt
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* <li><a className="dropdown-item" href="#">Jacket</a></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Size
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => filterbycategory("size", "S")}
                    >
                      small
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      href="#"
                      onClick={() => filterbycategory("size", "M")}
                    >
                      Medium
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => filterbycategory("size", "L")}
                    >
                      Large
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Name"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn btn-primary mx-5"
              type="submit"
              onClick={addCart}
            >
              My Cart
            </button>
          </div>
          
        </div>
      </nav>
      <div className="Homeheader">
      <div className='Image' >
    <h4>Image</h4>
    </div>
    <div className='Name' >
    <h4>Name</h4>
    </div>
    
    <h4>Color</h4>
    <div className='Size'>
    <h4>Size</h4>
    </div>
   <div className='Category'>
   <h4>Category</h4>
   </div>
   <div className='Price'>
   <h4>Price</h4>
   </div>
    
    <div className='Stock'>
    <h4>In Stock</h4>
    </div>
   <div className='Buy'>
   <h4>Buy</h4>
   </div>
      </div>
    </div>
  );
};

export default Navbar;
