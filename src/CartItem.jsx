import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
} from './CartSlice.jsx';
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Leaf,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const subtotal = useSelector(selectTotalAmount);

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      // If decrementing from 1, confirm or remove
      dispatch(removeItem(item.id));
    }
  };

  const handleManualQuantityChange = (item, newQuantityStr) => {
    const val = parseInt(newQuantityStr, 10);
    if (!isNaN(val) && val > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: val }));
    } else if (newQuantityStr === '' || val <= 0) {
      // User typed 0 or emptied box: if 0, remove
      if (val === 0) {
        dispatch(removeItem(item.id));
      }
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const shippingCost = subtotal > 50 || subtotal === 0 ? 0 : 7.99;
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page-container">
        {/* Top Navigation / Breadcrumbs */}
        <div className="cart-header-row">
          <div>
            <h1 className="cart-title">Your Plant Cart</h1>
            <p className="cart-subtitle">
              {totalQuantity > 0
                ? `You have ${totalQuantity} ${totalQuantity === 1 ? 'plant' : 'plants'} ready for potting & shipment.`
                : 'Review your selected nursery greenery.'}
            </p>
          </div>

          <button
            type="button"
            className="btn-continue-shopping-top"
            onClick={onContinueShopping}
          >
            <ArrowLeft size={16} /> Continue Shopping
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="empty-cart-card">
            <div className="empty-cart-illustration">
              <Leaf size={64} className="leaf-anim" />
            </div>
            <h2>Your plant basket is empty</h2>
            <p>
              Bring life, fresher oxygen, and lush natural tranquility to your home or office.
              Browse our diverse collection of hardy nursery plants today!
            </p>
            <button
              type="button"
              className="btn-primary btn-large"
              onClick={onContinueShopping}
            >
              <ShoppingBag size={20} /> Browse Greenery
            </button>
          </div>
        ) : (
          /* Active Cart with Items */
          <div className="cart-layout-grid">
            {/* Items Column */}
            <div className="cart-items-column">
              <div className="cart-table-card">
                <div className="cart-table-header">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Line Total</span>
                  <span>Action</span>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => {
                    const lineTotal = item.price * item.quantity;
                    return (
                      <div key={item.id} className="cart-item-row">
                        {/* Product Info */}
                        <div className="cart-item-info">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-thumb"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80';
                            }}
                          />
                          <div className="cart-item-details">
                            <span className="cart-item-category">{item.category}</span>
                            <h4 className="cart-item-name">{item.name}</h4>
                            <p className="cart-item-unit-mobile">
                              Unit Price: ${Number(item.price).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Unit Price (Desktop) */}
                        <div className="cart-item-price-col">
                          ${Number(item.price).toFixed(2)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="cart-item-qty-col">
                          <div className="qty-control-group">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => handleDecrement(item)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus size={14} />
                            </button>
                            <input
                              type="number"
                              min="1"
                              className="qty-input"
                              value={item.quantity}
                              onChange={(e) =>
                                handleManualQuantityChange(item, e.target.value)
                              }
                              aria-label={`Quantity of ${item.name}`}
                            />
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => handleIncrement(item)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Line Total */}
                        <div className="cart-item-total-col">
                          <span className="line-total-amount">
                            ${lineTotal.toFixed(2)}
                          </span>
                        </div>

                        {/* Remove Action */}
                        <div className="cart-item-action-col">
                          <button
                            type="button"
                            className="btn-remove-item"
                            onClick={() => handleRemove(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Shopping Guarantee Badges */}
              <div className="cart-trust-badges">
                <div className="trust-badge">
                  <Truck size={20} className="trust-icon" />
                  <div>
                    <strong>Secure Nursery Transport</strong>
                    <p>Specially cushioned recyclable plant packaging</p>
                  </div>
                </div>
                <div className="trust-badge">
                  <ShieldCheck size={20} className="trust-icon" />
                  <div>
                    <strong>30-Day Plant Guarantee</strong>
                    <p>Free replacement if plants do not arrive vibrant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <aside className="cart-summary-sidebar">
              <div className="order-summary-card">
                <h3 className="summary-title">Order Summary</h3>

                <div className="summary-row">
                  <span>Total Plant Units:</span>
                  <strong>{totalQuantity}</strong>
                </div>

                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Eco-Packaging & Shipping:</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="free-shipping-tag">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                {shippingCost > 0 && (
                  <p className="free-shipping-note">
                    Add ${(50 - subtotal).toFixed(2)} more to qualify for <strong>FREE shipping</strong>!
                  </p>
                )}

                <div className="summary-divider"></div>

                <div className="summary-total-row">
                  <span>Grand Total:</span>
                  <span className="grand-total-amount">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  id="checkout-button"
                  className="btn-primary btn-checkout"
                  onClick={() => setCheckoutModalOpen(true)}
                >
                  Proceed to Checkout
                </button>

                <button
                  type="button"
                  className="btn-secondary btn-continue-shopping-block"
                  onClick={onContinueShopping}
                >
                  <ArrowLeft size={16} /> Continue Shopping
                </button>

                <div className="demo-notice-tag">
                  ℹ️ Demo Checkout mode enabled for testing.
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Demo Checkout Modal */}
        {checkoutModalOpen && (
          <div className="modal-backdrop" onClick={() => setCheckoutModalOpen(false)}>
            <div
              className="checkout-modal-content"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-checkout-title"
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setCheckoutModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="modal-icon-wrap">
                <CheckCircle2 size={48} className="modal-check-icon" />
              </div>

              <h2 id="demo-checkout-title">Order Preview (Demo Mode)</h2>
              <p className="modal-description">
                Thank you for choosing <strong>Paradise Nursery</strong>! In this demo environment,
                no actual payment is processed.
              </p>

              <div className="modal-summary-box">
                <div className="modal-line">
                  <span>Selected Plants:</span>
                  <strong>{totalQuantity} items</strong>
                </div>
                <div className="modal-line">
                  <span>Estimated Total:</span>
                  <strong>${grandTotal.toFixed(2)}</strong>
                </div>
                <div className="modal-line">
                  <span>Packaging:</span>
                  <span>100% Recyclable Nursery Box</span>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-primary btn-large"
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    onContinueShopping();
                  }}
                >
                  Done & Continue Browsing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
