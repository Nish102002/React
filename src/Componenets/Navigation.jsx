import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import Employe from './Employe'
import Book from './Book'
import Product from './Product'
import Home from './Home'

function Navigation() {
    return (
        <>
            <div className='container'>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="home">Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="product">Product</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="employe">Employe</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="book">Book</Link>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="product" element={<Product></Product>}></Route>
                <Route path="employe" element={<Employe></Employe>}></Route>
                <Route path="book" element={<Book></Book>}></Route>
            </Routes>
        </>
    )
}

export default Navigation
