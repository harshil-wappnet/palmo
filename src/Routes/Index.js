import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from '../components/Contact';
import Menu from "../components/Menu";
import Cart from "../components/Cart";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    )
}

export default Index;