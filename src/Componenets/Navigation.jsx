import React, { useState, Suspense } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Employe from './Employe';
import Book from './Book';
import Product from './Product';
import Home from './Home';
import EmployeeDetail from './EmployeeDetail';
import PageNotFound from './PageNotFound';
import PropsAsCallBack from './PropsAsCallBack';
import LazyComp from './LazyComp';
import EmployeDetail1 from './EmployeDetail1';

function Navigation() {
  const [txt, setTxt] = useState('');
  const [txt1, setTxt1] = useState('');
  const navigate = useNavigate();

  function rushi(e) {
    e.preventDefault();
    navigate(`/empsearch/${txt}`);
  }

  function rushi1(e) {
    e.preventDefault();
    navigate(`/${txt1}`);
  }

  return (
    <>
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="e">
                    Employe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="book">
                    Book
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="pac">
                    Props As Callback
                  </Link>
                </li>&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link" to="laz">
                    Lazy Loading
                  </Link>
                </li>&nbsp;&nbsp;
              </ul>

              {/* Search by Name */}
              <form className="form-inline my-2 my-lg-0" onSubmit={rushi}>
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Search Employee"
                  aria-label="Search"
                  onChange={(e) => setTxt(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search Employee
                </button>
              </form>

              {/* Search by ID */}
              <form className="form-inline my-2 my-lg-0 ml-3" onSubmit={rushi1}>
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Search Employee by ID"
                  aria-label="Search"
                  onChange={(e) => setTxt1(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search by ID
                </button>
              </form>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="e" element={<Employe />} />
        <Route path="book" element={<Book />} />
        <Route path="/:empid" element={<EmployeeDetail />} />
        <Route path="/empsearch/:empname" element={<EmployeDetail1 />} />
        <Route path="pac" element={<PropsAsCallBack />} />
        <Route path="laz" element={<LazyComp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Navigation;
