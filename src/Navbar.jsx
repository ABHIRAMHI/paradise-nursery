import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice.jsx';
import { Leaf, ShoppingCart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ onNavigateHome, onNavigatePlants, onNavigateCart }) {
  const totalQuantity = useSelector(selectTotalQuantity);
  let location = null;
  let navigate = null;

  try {
    location = useLocation();
    navigate = useNavigate();
  } catch (e) {
    // Graceful fallback if rendered outside Router context in test suites
  }

  const handleHomeClick = (e) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    } else if (navigate) {
      e.preventDefault();
      navigate('/');
    }
  };

  const handlePlantsClick = (e) => {
    if (onNavigatePlants) {
      e.preventDefault();
      onNavigatePlants();
    } else if (navigate) {
      e.preventDefault();
      navigate('/plants');
    }
  };

  const handleCartClick = (e) => {
    if (onNavigateCart) {
      e.preventDefault();
      onNavigateCart();
    } else if (navigate) {
      e.preventDefault();
      navigate('/cart');
    }
  };

  const currentPath = location ? location.pathname : '';

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        {/* Brand Link */}
        <a
          href="/"
          className="navbar-brand"
          onClick={handleHomeClick}
          aria-label="Paradise Nursery Home"
        >
          <div className="brand-logo-icon">
            <Leaf size={22} className="leaf-brand-icon" />
          </div>
          <div className="brand-titles">
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-motto">Where Greenery Meets Soul</span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a
            href="/"
            className={`nav-link-item ${currentPath === '/' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            Home
          </a>
          <a
            href="/plants"
            className={`nav-link-item ${currentPath === '/plants' ? 'active' : ''}`}
            onClick={handlePlantsClick}
          >
            Plants
          </a>
          <a
            href="/cart"
            id="nav-cart-btn"
            className={`nav-cart-link ${currentPath === '/cart' ? 'active' : ''}`}
            onClick={handleCartClick}
            aria-label={`Shopping Cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-container">
              <ShoppingCart size={22} className="cart-svg-icon" />
              <span className="cart-count-badge" id="cart-count-badge">
                {totalQuantity}
              </span>
            </div>
            <span className="cart-nav-text">Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
