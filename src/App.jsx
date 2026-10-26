import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
import {
  Leaf,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Heart,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'products' | 'cart'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalCartCount = useSelector(selectTotalQuantity);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-root">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>🌿 Free Eco-Friendly Shipping on all plant orders over $50! Use code <strong>PARADISE</strong></span>
      </div>

      {/* Main Navigation Header */}
      <header className="site-header">
        <div className="header-container">
          {/* Brand Logo */}
          <button
            type="button"
            className="brand-logo-btn"
            onClick={() => navigateTo('home')}
            aria-label="Paradise Nursery Home"
          >
            <div className="logo-icon-wrap">
              <Leaf className="logo-leaf-icon" size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">Paradise Nursery</span>
              <span className="brand-subtitle">Living Greenery & Botanical Haven</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <button
              type="button"
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => navigateTo('about')}
            >
              About Us
            </button>
            <button
              type="button"
              className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => navigateTo('products')}
            >
              Plants & Products
            </button>
          </nav>

          {/* Cart Link with Indicator Badge */}
          <div className="header-actions">
            <button
              type="button"
              id="header-cart-btn"
              className={`cart-button ${currentPage === 'cart' ? 'active' : ''}`}
              onClick={() => navigateTo('cart')}
              aria-label={`Shopping cart with ${totalCartCount} items`}
            >
              <div className="cart-icon-wrapper">
                <ShoppingBag size={22} />
                <span className="cart-badge" aria-live="polite">
                  {totalCartCount}
                </span>
              </div>
              <span className="cart-btn-label">Cart</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-drawer" aria-label="Mobile Navigation">
            <button
              type="button"
              className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => navigateTo('about')}
            >
              About Us
            </button>
            <button
              type="button"
              className={`mobile-nav-link ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => navigateTo('products')}
            >
              Plants & Products
            </button>
            <button
              type="button"
              className={`mobile-nav-link ${currentPage === 'cart' ? 'active' : ''}`}
              onClick={() => navigateTo('cart')}
            >
              Cart ({totalCartCount})
            </button>
          </nav>
        )}
      </header>

      {/* Main Body Content based on Active View */}
      <div className="main-content-area">
        {currentPage === 'home' && (
          <div className="landing-view">
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-overlay"></div>
              <div className="hero-content-wrapper">
                <div className="hero-badge">
                  <Sparkles size={16} /> Welcome to Paradise Nursery
                </div>
                <h1 className="hero-heading">Where Greenery Meets Soul</h1>
                <p className="hero-tagline">
                  Breathe life, calm, and fresh vitality into your living space with our hand-nurtured,
                  premium indoor and outdoor botanical companions.
                </p>

                <div className="hero-actions">
                  <button
                    type="button"
                    id="get-started-btn"
                    className="btn-hero-primary"
                    onClick={() => navigateTo('products')}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </button>

                  <button
                    type="button"
                    className="btn-hero-secondary"
                    onClick={() => navigateTo('about')}
                  >
                    Our Botanical Story
                  </button>
                </div>

                {/* Quick Benefit Highlights */}
                <div className="hero-perks-row">
                  <div className="perk-item">
                    <Truck size={18} className="perk-icon" />
                    <span>Safe Nursery Delivery</span>
                  </div>
                  <div className="perk-dot">•</div>
                  <div className="perk-item">
                    <ShieldCheck size={18} className="perk-icon" />
                    <span>30-Day Health Guarantee</span>
                  </div>
                  <div className="perk-dot">•</div>
                  <div className="perk-item">
                    <Leaf size={18} className="perk-icon" />
                    <span>100% Organic Soil Potted</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Teaser Banner */}
            <section className="home-features-section">
              <div className="container-inner">
                <div className="features-intro text-center">
                  <span className="badge-pill">
                    <Leaf size={14} /> Curated with Care
                  </span>
                  <h2>Why Plant Lovers Choose Paradise Nursery</h2>
                  <p>
                    We cultivate every plant in temperature-regulated greenhouses using organic nutrients,
                    ensuring robust root systems that thrive immediately in your environment.
                  </p>
                </div>

                <div className="features-cards-grid">
                  <div className="feature-block-card">
                    <div className="feature-icon-box">🪴</div>
                    <h3>Indoor Tranquility</h3>
                    <p>
                      Selected varieties like Monstera and Fiddle Leaf Fig specifically conditioned for
                      ambient household lighting and effortless upkeep.
                    </p>
                    <button
                      type="button"
                      className="feature-link-btn"
                      onClick={() => navigateTo('products')}
                    >
                      Browse Indoor Plants →
                    </button>
                  </div>

                  <div className="feature-block-card">
                    <div className="feature-icon-box">🌬️</div>
                    <h3>Natural Air Purifiers</h3>
                    <p>
                      NASA-tested botanicals that actively absorb toxins, capture airborne particulates,
                      and emit pure, refreshing oxygen day and night.
                    </p>
                    <button
                      type="button"
                      className="feature-link-btn"
                      onClick={() => navigateTo('products')}
                    >
                      Explore Air Purifiers →
                    </button>
                  </div>

                  <div className="feature-block-card">
                    <div className="feature-icon-box">🌵</div>
                    <h3>Resilient Succulents</h3>
                    <p>
                      Sculptural desert gems requiring minimal hydration—ideal for busy professionals,
                      compact desks, and sunlit window sills.
                    </p>
                    <button
                      type="button"
                      className="feature-link-btn"
                      onClick={() => navigateTo('products')}
                    >
                      Discover Succulents →
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Invitation Banner */}
            <section className="cta-invitation-strip">
              <div className="cta-strip-inner">
                <div className="cta-strip-text">
                  <h3>Start Your Urban Jungle Today</h3>
                  <p>Discover over a dozen robust nursery species ready to ship in safe eco-packaging.</p>
                </div>
                <button
                  type="button"
                  className="btn-primary btn-large"
                  onClick={() => navigateTo('products')}
                >
                  Shop Now <ArrowRight size={18} />
                </button>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <AboutUs onExplorePlants={() => navigateTo('products')} />
        )}

        {currentPage === 'products' && (
          <ProductList onNavigateToCart={() => navigateTo('cart')} />
        )}

        {currentPage === 'cart' && (
          <CartItem onContinueShopping={() => navigateTo('products')} />
        )}
      </div>

      {/* Global Site Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Leaf size={22} className="footer-leaf" />
              <span>Paradise Nursery</span>
            </div>
            <p className="footer-tagline">
              Bringing the healing serenity and pure beauty of natural botanical life directly to your home.
            </p>
            <div className="footer-contact-info">
              <div><MapPin size={16} /> 108 Botanic Way, Greenhouse Row</div>
              <div><Phone size={16} /> +1 (800) 555-PLANT</div>
              <div><Mail size={16} /> care@paradisenursery.com</div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><button type="button" onClick={() => navigateTo('home')}>Home</button></li>
              <li><button type="button" onClick={() => navigateTo('about')}>About Us</button></li>
              <li><button type="button" onClick={() => navigateTo('products')}>Products & Catalog</button></li>
              <li><button type="button" onClick={() => navigateTo('cart')}>Shopping Cart ({totalCartCount})</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Plant Categories</h4>
            <ul className="footer-links">
              <li><button type="button" onClick={() => navigateTo('products')}>Indoor Plants</button></li>
              <li><button type="button" onClick={() => navigateTo('products')}>Outdoor & Patio</button></li>
              <li><button type="button" onClick={() => navigateTo('products')}>Succulents & Cacti</button></li>
              <li><button type="button" onClick={() => navigateTo('products')}>Air-Purifying Plants</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Nursery Guarantee</h4>
            <p className="footer-guarantee-text">
              Every specimen is guaranteed healthy and pest-free for 30 days upon arrival. Reach out to our horticulturists anytime for personalized care tips.
            </p>
            <div className="footer-trust-pill">
              <ShieldCheck size={16} /> 100% Organic & Thriving Guarantee
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
            <p className="footer-subtext">Designed with nature in mind • High-Performance React + Redux Toolkit</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
