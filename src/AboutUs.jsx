import React from 'react';
import { Leaf, Heart, Sun, Droplets, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

export default function AboutUs({ onExplorePlants }) {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-text">
          <span className="badge-pill">
            <Leaf size={16} /> Our Green Journey & Mission
          </span>
          <h1 className="about-title">Rooted in Passion for Living Greenery</h1>
          <p className="about-lead">
            At <strong>Paradise Nursery</strong>, we believe every home, office, and patio
            deserves a touch of nature’s quiet majesty. Founded by dedicated botanists and
            horticultural enthusiasts, our goal is to bring healthy, premium plants directly from
            our sustainable greenhouses into your daily living space.
          </p>
          <div className="about-hero-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={onExplorePlants}
            >
              Explore Our Collection <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="about-hero-image-wrap">
          <img
            src="/images/about-us.jpg"
            alt="Botanist caring for plants in greenhouse"
            className="about-hero-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="experience-badge">
            <span className="badge-years">15+</span>
            <span className="badge-label">Years of Botanical Care & Trust</span>
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="about-specialties-section">
        <div className="section-header text-center">
          <h2 className="section-title">What We Specialize In</h2>
          <p className="section-subtitle">
            From easy-care indoor foliage to vibrant outdoor garden blossoms, each plant is
            nurtured with organic soil and biological care.
          </p>
        </div>

        <div className="specialties-grid">
          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Sun size={28} />
            </div>
            <h3>Indoor Living Oasis</h3>
            <p>
              Curated architectural plants—from trailing pothos to iconic monsteras—tailored to
              brighten your desks, bookshelves, and modern interior corners.
            </p>
          </div>

          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Droplets size={28} />
            </div>
            <h3>Outdoor & Patio Botanicals</h3>
            <p>
              Resilient perennials, flowering bushes, and fragrant herbs engineered to withstand
              seasonal shifts and attract gentle garden pollinators.
            </p>
          </div>

          <div className="specialty-card">
            <div className="specialty-icon-circle">
              <Leaf size={28} />
            </div>
            <h3>Air-Purifying Wonders</h3>
            <p>
              NASA-recognized natural filters that actively capture volatile organic compounds
              (VOCs), elevate humidity, and supply fresh oxygen naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Green Living Benefits */}
      <section className="about-benefits-section">
        <div className="benefits-card-banner">
          <div className="benefits-content">
            <h2 className="benefits-title">The Benefits of Living Greenery</h2>
            <p className="benefits-text">
              Scientific research consistently reveals that surrounding yourself with living plants
              enhances well-being in multiple profound ways:
            </p>

            <div className="benefits-list">
              <div className="benefit-row">
                <div className="benefit-bullet">✓</div>
                <div>
                  <strong>Stress Reduction & Mental Calm</strong>
                  <p>Interacting with indoor greenery lowers cortisol levels and promotes psychological relaxation.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-bullet">✓</div>
                <div>
                  <strong>Natural Air Filtration</strong>
                  <p>Plants absorb carbon dioxide and common household toxins, releasing clean oxygen and optimizing humidity.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-bullet">✓</div>
                <div>
                  <strong>Sharper Focus & Productivity</strong>
                  <p>Workspaces adorned with live plants report up to a 15% increase in focus, cognitive memory, and creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment & Customer Care */}
      <section className="about-quality-section">
        <div className="section-header text-center">
          <h2 className="section-title">Our Plant Quality & Customer Promise</h2>
          <p className="section-subtitle">
            We don’t just ship foliage; we guarantee a thriving botanical companion.
          </p>
        </div>

        <div className="quality-grid">
          <div className="quality-card">
            <ShieldCheck size={32} className="quality-icon" />
            <h4>Rigorous Health Inspection</h4>
            <p>Every plant undergoes root and leaf health checks before leaving our greenhouse.</p>
          </div>

          <div className="quality-card">
            <Award size={32} className="quality-icon" />
            <h4>Safe & Custom Transit Packaging</h4>
            <p>Proprietary recyclable packaging keeps soil snug and stems protected throughout shipping.</p>
          </div>

          <div className="quality-card">
            <Users size={32} className="quality-icon" />
            <h4>Lifetime Plant Care Support</h4>
            <p>Our team of greenhouse horticulturists is always on hand to assist with repotting and watering tips.</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="about-cta-banner">
        <h3>Ready to Transform Your Space?</h3>
        <p>Explore our carefully nurtured selection and start your personal plant oasis today.</p>
        <button
          type="button"
          className="btn-primary btn-large"
          onClick={onExplorePlants}
        >
          View All Plants <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
