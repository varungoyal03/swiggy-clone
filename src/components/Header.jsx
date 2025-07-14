import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constanst";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = Object.values(cartItems).reduce((total, curr) => total + curr.quantity, 0);

  return (
    <div className="header flex justify-between items-center p-4 bg-gray-800">
      {/* Logo Container */}
      <div className="logo-container">
        <img src={LOGO_URL} className="logo w-24" alt="logo" />
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul className="flex gap-16 text-white font-semibold text-xl">
          <Link to="/grocery" className="hover:text-gray-400 cursor-pointer">Grocery</Link>
          <Link to="/" className="hover:text-gray-400 cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-gray-400 cursor-pointer">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400 cursor-pointer">Contact Us</Link>
          <Link to="/cart" className="hover:text-gray-400 cursor-pointer">🛒 {cartCount}</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
