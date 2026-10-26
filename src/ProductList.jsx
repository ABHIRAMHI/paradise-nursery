import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalQuantity } from './CartSlice.jsx';
import { ShoppingBag, Check, Search, Filter, Sparkles, Leaf, ArrowRight } from 'lucide-react';

export const plantProducts = [
  {
    id: 'plant-1',
    name: 'Monstera Deliciosa',
    price: 34.99,
    category: 'Indoor Plants',
    description: 'Iconic split leaves that bring a lush tropical vibe and natural drama to any room.',
    image: '/images/monstera.jpg',
    sunlight: 'Bright indirect',
    water: 'Weekly',
  },
  {
    id: 'plant-2',
    name: 'Snake Plant (Sansevieria)',
    price: 26.50,
    category: 'Indoor Plants',
    description: 'Hardy architectural upright sword leaves that thrive on neglect and tolerate low light.',
    image: '/images/snake-plant.jpg',
    sunlight: 'Low to bright',
    water: 'Bi-weekly',
  },
  {
    id: 'plant-3',
    name: 'Fiddle Leaf Fig',
    price: 45.00,
    category: 'Indoor Plants',
    description: 'Stately violin-shaped foliage that serves as an instant interior designer centerpiece.',
    image: '/images/fiddle-leaf.jpg',
    sunlight: 'Bright indirect',
    water: 'Weekly',
  },
  {
    id: 'plant-4',
    name: 'French Lavender',
    price: 18.00,
    category: 'Outdoor Plants',
    description: 'Aromatic purple blooms that attract friendly pollinators and offer calming natural fragrance.',
    image: '/images/lavender.jpg',
    sunlight: 'Full sun',
    water: 'Moderate',
  },
  {
    id: 'plant-5',
    name: 'Peace Lily (Spathiphyllum)',
    price: 29.99,
    category: 'Outdoor Plants',
    description: 'Elegant white spathes paired with deep green leaves; excels in shaded verandas and patios.',
    image: '/images/peace-lily.jpg',
    sunlight: 'Partial shade',
    water: 'Keep moist',
  },
  {
    id: 'plant-6',
    name: 'Boston Fern',
    price: 22.00,
    category: 'Outdoor Plants',
    description: 'Feathery cascading fronds, perfect for hanging baskets, shaded porches, and moist areas.',
    image: '/images/boston-fern.jpg',
    sunlight: 'Indirect light',
    water: 'High humidity',
  },
  {
    id: 'plant-7',
    name: 'Aloe Vera',
    price: 15.99,
    category: 'Succulents',
    description: 'Plump soothing succulent known for natural skin benefits and minimal watering needs.',
    image: '/images/aloe-vera.jpg',
    sunlight: 'Direct sunlight',
    water: 'Dry between waters',
  },
  {
    id: 'plant-8',
    name: 'Jade Plant (Crassula)',
    price: 19.50,
    category: 'Succulents',
    description: 'Symbol of good luck and prosperity featuring thick woody stems and glossy jade-green leaves.',
    image: '/images/jade-plant.jpg',
    sunlight: 'Bright light',
    water: 'Sparse',
  },
  {
    id: 'plant-9',
    name: 'Echeveria Rosette',
    price: 12.99,
    category: 'Succulents',
    description: 'Charming geometric rosette succulent displaying subtle pastel tones and extreme drought tolerance.',
    image: '/images/echeveria.jpg',
    sunlight: 'Full sun',
    water: 'Every 2 weeks',
  },
  {
    id: 'plant-10',
    name: 'Spider Plant',
    price: 16.50,
    category: 'Air-Purifying Plants',
    description: 'NASA-proven powerhouse for neutralizing airborne toxins, completely non-toxic for pets.',
    image: '/images/spider-plant.jpg',
    sunlight: 'Medium indirect',
    water: 'Weekly',
  },
  {
    id: 'plant-11',
    name: 'English Ivy',
    price: 21.00,
    category: 'Air-Purifying Plants',
    description: 'Classic trailing vine that efficiently filters indoor mold particles and benzene pollutants.',
    image: '/images/english-ivy.jpg',
    sunlight: 'Medium to low',
    water: 'Moderate',
  },
  {
    id: 'plant-12',
    name: 'Rubber Plant (Ficus Elastica)',
    price: 32.00,
    category: 'Air-Purifying Plants',
    description: 'Broad glossy burgundy-toned foliage that purifies air and elevates modern home decor.',
    image: '/images/rubber-plant.jpg',
    sunlight: 'Bright filtered',
    water: 'Weekly',
  },
];

const categories = [
  'All Plants',
  'Indoor Plants',
  'Outdoor Plants',
  'Succulents',
  'Air-Purifying Plants',
];

export default function ProductList({ onNavigateToCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalCartCount = useSelector(selectTotalQuantity);

  const [selectedCategory, setSelectedCategory] = useState('All Plants');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedAnimationId(plant.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1500);
  };

  const filteredPlants = plantProducts.filter((plant) => {
    const matchesCategory =
      selectedCategory === 'All Plants' || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getQuantityInCart = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-listing-page">
      {/* Header Banner */}
      <section className="listing-hero">
        <div className="listing-hero-content">
          <div className="badge-pill">
            <Sparkles size={16} /> Certified Organic & Healthy Nursery Stock
          </div>
          <h1>Explore Our Green Collection</h1>
          <p>
            Hand-picked nursery plants delivered directly to your doorstep. Each plant is
            carefully inspected, repotted in organic soil, and ready to thrive.
          </p>

          <div className="listing-stats-bar">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Healthy Plant Guarantee</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Plant Categories</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">Plant Care Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Control Bar: Search & Categories */}
      <section className="catalog-controls-container">
        <div className="catalog-top-row">
          <div className="category-tabs" role="tablist" aria-label="Plant Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All Plants' && <Leaf size={14} className="tab-icon" />}
                {cat}
                {cat !== 'All Plants' && (
                  <span className="cat-count">
                    {plantProducts.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="search-and-cart-summary">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search plants by name or benefit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search plants"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {onNavigateToCart && (
              <button
                type="button"
                className="cart-indicator-button"
                onClick={onNavigateToCart}
                aria-label={`View shopping cart with ${totalCartCount} items`}
              >
                <ShoppingBag size={20} />
                <span className="cart-indicator-label">Cart</span>
                <span className="cart-indicator-badge">{totalCartCount}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Plant Grid */}
      <main className="catalog-grid-container">
        {filteredPlants.length === 0 ? (
          <div className="empty-catalog-fallback">
            <div className="fallback-icon">🌿</div>
            <h3>No matching plants found</h3>
            <p>
              We couldn't find any plants matching "<strong>{searchQuery}</strong>" in{' '}
              {selectedCategory}. Try adjusting your search term or select another category.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Plants');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="plants-grid">
            {filteredPlants.map((plant) => {
              const qtyInCart = getQuantityInCart(plant.id);
              const isJustAdded = addedAnimationId === plant.id;

              return (
                <article key={plant.id} className="plant-card">
                  <div className="plant-card-image-wrap">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback image if local image fails
                        e.target.onerror = null;
                        e.target.src =
                          'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                    <span className="plant-card-category-badge">{plant.category}</span>
                    {qtyInCart > 0 && (
                      <span className="in-cart-pill">
                        <Check size={12} /> {qtyInCart} in Cart
                      </span>
                    )}
                  </div>

                  <div className="plant-card-body">
                    <h3 className="plant-card-title">{plant.name}</h3>
                    <p className="plant-card-description">{plant.description}</p>

                    <div className="plant-card-care-meta">
                      <span title="Sunlight Requirement">☀️ {plant.sunlight}</span>
                      <span title="Watering Schedule">💧 {plant.water}</span>
                    </div>

                    <div className="plant-card-footer">
                      <div className="plant-price-wrap">
                        <span className="price-symbol">$</span>
                        <span className="price-amount">{plant.price.toFixed(2)}</span>
                      </div>

                      <button
                        type="button"
                        id={`add-to-cart-${plant.id}`}
                        className={`btn-add-cart ${isJustAdded ? 'just-added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        aria-label={`Add ${plant.name} to cart for $${plant.price.toFixed(2)}`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check size={16} /> Added!
                          </>
                        ) : qtyInCart > 0 ? (
                          <>
                            <ShoppingBag size={16} /> Add More ({qtyInCart})
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={16} /> Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Cart Access Pill if cart has items */}
      {totalCartCount > 0 && onNavigateToCart && (
        <div className="floating-cart-bar">
          <div className="floating-cart-inner">
            <div className="floating-cart-info">
              <ShoppingBag size={20} />
              <span>
                <strong>{totalCartCount}</strong> {totalCartCount === 1 ? 'item' : 'items'} in
                your cart
              </span>
            </div>
            <button
              type="button"
              className="floating-cart-btn"
              onClick={onNavigateToCart}
            >
              Review Cart & Checkout <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
