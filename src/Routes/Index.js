import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from '../components/Contact';
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Protected from "./Protected";
import Profile from "../components/Profile";
const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="menu" element={<Menu />} /> */}
            {/* <Route path="cart" element={<Cart />} /> */}
            {/* Protected routes */}
            <Route
                path="/menu"
                element={<Protected Component={Menu} />}
            />
            <Route
                path="/cart"
                element={<Protected Component={Cart} />}
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Protected Component={Profile} />} />
        </Routes>
    )
}

export default Index;
