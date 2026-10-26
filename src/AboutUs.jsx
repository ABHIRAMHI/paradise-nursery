import React from 'react';
import { Leaf, Sun, Droplets, Wind, Sparkles, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function AboutUs({ onExplorePlants }) {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-text">
          <span className="badge-pill">
            <Leaf size={16} /> Our Botanical Mission
          </span>
          <h1 className="about-title">Welcome to Paradise Nursery</h1>
          <p className="about-lead">
            At <strong>Paradise Nursery</strong>, we are passionate about transforming everyday
            spaces into vibrant botanical sanctuaries. As a premier online plant-shopping
            nursery, our mission is to deliver healthy, sustainably grown greenery directly
            from our temperature-regulated greenhouses to your doorstep.
          </p>
          <p className="about-sublead">
            Whether you are taking your first steps as a plant parent or expanding an indoor
            jungle, Paradise Nursery provides expertly cultivated plants, sustainable organic potting,
            and complete horticultural care guidance.
          </p>
          <div className="about-hero-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={onExplorePlants}
            >
              Explore Our Plants <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="about-hero-image-wrap">
          <img
            src="/images/about-us.jpg"
            alt="Paradise Nursery greenhouse and botanical care"
            className="about-hero-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="experience-badge">
            <span className="badge-years">15+</span>
            <span className="badge-label">Years of Botanical Excellence</span>
          </div>
        </div>
      </section>

      {/* Plant Categories & Offerings */}
      <section className="about-specialties-section">
        <div className="section-header text-center">
          <h2 className="section-title">Our Plant Offerings</h2>
          <p className="section-subtitle">
            At Paradise Nursery, we specialize in a diverse range of botanical categories to
            suit every space, lifestyle, and aesthetic preference.
          </p>
        </div>

        <div className="specialties-grid four-col">
          {/* 1. Indoor Plants */}
          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Sun size={28} />
            </div>
            <h3>Indoor Plants</h3>
            <p>
              Lush architectural foliage like Monstera Deliciosa and Fiddle Leaf Fig specifically
              acclimated to thrive in home ambient lighting, bringing tranquility to living rooms,
              offices, and bedrooms.
            </p>
          </div>

          {/* 2. Outdoor Plants */}
          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Droplets size={28} />
            </div>
            <h3>Outdoor Plants</h3>
            <p>
              Hardy flowering varieties, ornamental shrubs, and patio evergreens bred to withstand
              seasonal weather shifts while attracting beneficial garden pollinators and honeybees.
            </p>
          </div>

          {/* 3. Succulents */}
          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Sparkles size={28} />
            </div>
            <h3>Succulents</h3>
            <p>
              Drought-tolerant, sculptural geometric wonders—such as Jade Plant and Echeveria
              rosettes—that require minimal hydration and thrive effortlessly on bright windowsills
              and modern desks.
            </p>
          </div>

          {/* 4. Air-Purifying Plants */}
          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Wind size={28} />
            </div>
            <h3>Air-Purifying Plants</h3>
            <p>
              NASA-researched botanicals, including Snake Plants and Peace Lilies, that actively filter
              indoor airborne pollutants, absorb toxins, and enrich your living atmosphere with clean,
              refreshing oxygen.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment & Customer Care */}
      <section className="about-quality-section">
        <div className="section-header text-center">
          <h2 className="section-title">The Paradise Nursery Promise</h2>
          <p className="section-subtitle">
            Every plant from Paradise Nursery is backed by our dedicated horticulturists and green guarantee.
          </p>
        </div>

        <div className="quality-grid">
          <div className="quality-card">
            <ShieldCheck size={32} className="quality-icon" />
            <h4>Rigorous Health Inspection</h4>
            <p>Every plant undergoes meticulous root and leaf inspection before leaving our greenhouse.</p>
          </div>

          <div className="quality-card">
            <Award size={32} className="quality-icon" />
            <h4>Cushioned Eco-Packaging</h4>
            <p>Custom transit packaging keeps roots insulated, soil secure, and stems undamaged in transit.</p>
          </div>

          <div className="quality-card">
            <Leaf size={32} className="quality-icon" />
            <h4>30-Day Healthy Guarantee</h4>
            <p>We stand behind the vitality of every plant with a full 30-day health guarantee upon arrival.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
