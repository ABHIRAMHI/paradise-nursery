import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
} from './CartSlice.jsx';
import Navbar from './Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    // Router fallback
  }

  // Helper to parse numeric cost from string (e.g., "$18" -> 18) or number
  const getNumericCost = (item) => {
    if (typeof item.price === 'number' && !isNaN(item.price)) {
      return item.price;
    }
    if (typeof item.cost === 'string') {
      const parsed = parseFloat(item.cost.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    if (typeof item.cost === 'number') {
      return item.cost;
    }
    return 0;
  };

  // Calculate total amount across all items
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += getNumericCost(item) * (item.quantity || 1);
    });
    return total;
  };

  // Calculate line total for a single item
  const calculateTotalCost = (item) => {
    return getNumericCost(item) * (item.quantity || 1);
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        id: item.id,
        quantity: (item.quantity || 1) + 1,
      })
    );
  };

  // Decrement item quantity (removes if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name || item.id));
    }
  };

  // Delete item from cart
  const handleDelete = (item) => {
    dispatch(removeItem(item.name || item.id));
  };

  // Continue shopping handler
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping();
    } else if (navigate) {
      navigate('/plants');
    }
  };

  // Checkout handler displaying Coming Soon alert
  const handleCheckoutShopping = (e) => {
    if (e) e.preventDefault();
    alert('Coming Soon! Thank you for your interest in Paradise Nursery.');
  };

  return (
    <div className="cart-page-wrapper">
      {/* Reusable navigation bar */}
      <Navbar
        onNavigateHome={() => (navigate ? navigate('/') : null)}
        onNavigatePlants={handleContinueShopping}
        onNavigateCart={() => (navigate ? navigate('/cart') : null)}
      />

      {/* Main shopping cart container with REQUIRED exact class "cart-container" */}
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <div className="empty-cart-icon">🌱</div>
            <h2>Your cart is currently empty</h2>
            <p>
              Explore our diverse nursery collection of air-purifying, aromatic, and
              low-maintenance plants to bring fresh life into your space!
            </p>
            <button
              type="button"
              className="continue-shopping-btn empty-cart-btn"
              onClick={handleContinueShopping}
            >
              <ShoppingBag size={18} /> Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-total-amount">
              <h2>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id || item.name} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80';
                    }}
                  />

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="cart-item-cost">
                      Unit Price: <strong>{item.cost}</strong>
                    </div>

                    <div className="cart-item-quantity">
                      <button
                        type="button"
                        className="cart-item-button cart-item-button-dec"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="cart-item-quantity-value">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="cart-item-button cart-item-button-inc"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="cart-item-total">
                      Total: <strong>${calculateTotalCost(item).toFixed(2)}</strong>
                    </div>

                    <button
                      type="button"
                      className="cart-item-delete"
                      onClick={() => handleDelete(item)}
                      aria-label={`Delete ${item.name} from cart`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-action-buttons">
              <button
                type="button"
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                <ArrowLeft size={16} /> Continue Shopping
              </button>

              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckoutShopping}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
