import React, { useState } from 'react'
import { Link,Routes,Route, useNavigate } from 'react-router-dom'
import Employe from './Employe'
import Book from './Book'
import Product from './Product'
const lazy=React.lazy(()=>import('./component/Emp1'))
import Home from './Home'
import EmployeeDetail from './EmployeeDetail'
import PageNotFound from './PageNotFound'
import PropsAsCallBack from './PropsAsCallBack'
import LazyComp from './LazyComp'

function Navigation() {

    const [status,setStatus]=useState(true)

    const [txt,setTxt] = useState() 
    const navigate = useNavigate()

    function rushi() {
        navigate(`/${txt}`)
    }
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
                                    <Link class="nav-link" to="e">Employe</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="book">Book</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="pac">Props As Callback</Link>
                                </li>
                                 <li class="nav-item">
                                    <Link class="nav-link" to="laz">Lazy Loading </Link>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search Employee" aria-label="Search" onChange={(e) => setTxt(e.target.value)} />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={rushi}>Search Employee</button>
                            </form>
                        </div>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="product" element={<Product></Product>}></Route>
                <Route path="e" element={<Employe></Employe>}></Route>
                <Route path="book" element={<Book></Book>}></Route>
                <Route path="e/:empid" element={<EmployeeDetail></EmployeeDetail>}></Route>
                <Route path="e/:empname" element={<EmployeDetail1></EmployeDetail1>}></Route>
                <Route path="pac" element={<PropsAsCallBack></PropsAsCallBack>}></Route>
                <Route path="laz" element={<LazyComp></LazyComp>}></Route>
                
                <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </>
    )
}

export default Navigation
