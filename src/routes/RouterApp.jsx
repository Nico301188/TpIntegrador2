import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"

import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import About from "../pages/Aboutus"
import Checkout from "../pages/Checkout"

function RouterApp() {
    return (
        <BrowserRouter>
             <NavBar />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/Aboutus" element={<About />} />
            </Routes>
             <Footer />
        </BrowserRouter>
    )
}

export default RouterApp