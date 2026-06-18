import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>amazon</h2>
        </div>

        <div className="search-box">
          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
          />

          <button>🔍</button>
        </div>

        <div className="nav-right">
          <select className="language">
            <option>EN</option>
            <option>HI</option>
          </select>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <div className="sub-nav">
        <a href="#">Today's Deals</a>
        <a href="#">Electronics</a>
        <a href="#">Fashion</a>
        <a href="#">Mobiles</a>
        <a href="#">Accessories</a>
      </div>
    </>
  );
}

export default Navbar;
