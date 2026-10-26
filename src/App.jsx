import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import Navbar from './Navbar.jsx';
import './App.css';
import { ArrowRight, Sparkles, Leaf, ShieldCheck, Truck } from 'lucide-react';

// Landing Page Component with REQUIRED exact class ".background-image" and exact heading "Welcome to Paradise Nursery"
export function LandingPage({ onGetStarted }) {
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    // Router fallback
  }

  const handleStart = () => {
    if (onGetStarted) {
      onGetStarted();
    } else if (navigate) {
      navigate('/plants');
    }
  };

  return (
    <div className="background-image">
      {/* Top Navbar */}
      <Navbar
        onNavigateHome={() => (navigate ? navigate('/') : null)}
        onNavigatePlants={handleStart}
        onNavigateCart={() => (navigate ? navigate('/cart') : null)}
      />

      <div className="landing-hero-overlay">
        <div className="landing-hero-content">
          <div className="landing-badge">
            <Sparkles size={16} /> Certified Greenery Sanctuary
          </div>

          {/* REQUIRED exact visible heading */}
          <h1 className="landing-title">Welcome to Paradise Nursery</h1>

          <p className="landing-description">
            Where Greenery Meets Soul. Explore our curated sanctuary of air-purifying,
            aromatic, medicinal, and low-maintenance nursery plants cultivated to bring
            enduring calm, clean air, and lush living beauty into your space.
          </p>

          <div className="landing-actions">
            <button
              type="button"
              id="get-started-button"
              className="get-started-btn"
              onClick={handleStart}
              aria-label="Get Started with Paradise Nursery plants"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="landing-perks">
            <div className="perk">
              <Truck size={18} />
              <span>Safe Nursery Transit</span>
            </div>
            <div className="perk-divider">•</div>
            <div className="perk">
              <ShieldCheck size={18} />
              <span>30-Day Plant Guarantee</span>
            </div>
            <div className="perk-divider">•</div>
            <div className="perk">
              <Leaf size={18} />
              <span>100% Organic Soil Potted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded About Us Section on Landing Page */}
      <div className="landing-about-wrapper">
        <AboutUs onExplorePlants={handleStart} />
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Leaf size={22} className="footer-leaf" />
              <span>Paradise Nursery</span>
            </div>
            <p className="footer-tagline">
              Delivering vitality, tranquility, and natural health directly to your doorstep.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => { e.preventDefault(); if (navigate) navigate('/'); }}>Home</a></li>
              <li><a href="/plants" onClick={(e) => { e.preventDefault(); handleStart(); }}>Plants</a></li>
              <li><a href="/cart" onClick={(e) => { e.preventDefault(); if (navigate) navigate('/cart'); }}>Cart</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links">
              <li>Air-Purifying Plants</li>
              <li>Aromatic Fragrant Plants</li>
              <li>Medicinal Plants</li>
              <li>Low-Maintenance Plants</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Paradise Nursery (e-plantShopping). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    // Router fallback
  }

  const handleGetStarted = () => {
    setShowProductList(true);
    if (navigate) {
      navigate('/plants');
    }
  };

  return (
    <div className="app-root">
      <Routes>
        <Route
          path="/"
          element={
            showProductList ? (
              <ProductList
                onNavigateHome={() => {
                  setShowProductList(false);
                  if (navigate) navigate('/');
                }}
                onNavigateToCart={() => {
                  if (navigate) navigate('/cart');
                }}
              />
            ) : (
              <LandingPage onGetStarted={handleGetStarted} />
            )
          }
        />
        <Route
          path="/plants"
          element={
            <ProductList
              onNavigateHome={() => {
                setShowProductList(false);
                if (navigate) navigate('/');
              }}
              onNavigateToCart={() => {
                if (navigate) navigate('/cart');
              }}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartItem
              onContinueShopping={() => {
                setShowProductList(true);
                if (navigate) navigate('/plants');
              }}
            />
          }
        />
        <Route
          path="/about"
          element={
            <div className="about-page-wrapper">
              <Navbar
                onNavigateHome={() => (navigate ? navigate('/') : null)}
                onNavigatePlants={handleGetStarted}
                onNavigateCart={() => (navigate ? navigate('/cart') : null)}
              />
              <AboutUs onExplorePlants={handleGetStarted} />
            </div>
          }
        />
        <Route path="*" element={<LandingPage onGetStarted={handleGetStarted} />} />
      </Routes>
    </div>
  );
}
