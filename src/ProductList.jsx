import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';
import CartItem from './CartItem.jsx';
import { useNavigate } from 'react-router-dom';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';

export const plantProducts = [
  // Category 1: Air-Purifying Plants
  {
    id: 'air-1',
    name: 'Snake Plant',
    cost: '$18',
    price: 18,
    category: 'Air-Purifying Plants',
    description: 'Produces oxygen at night and efficiently filters benzene and formaldehyde.',
    image: '/images/snake-plant.jpg',
  },
  {
    id: 'air-2',
    name: 'Spider Plant',
    cost: '$15',
    price: 15,
    category: 'Air-Purifying Plants',
    description: 'Proven by NASA research to cleanse household air of airborne toxins.',
    image: '/images/spider-plant.jpg',
  },
  {
    id: 'air-3',
    name: 'Peace Lily',
    cost: '$22',
    price: 22,
    category: 'Air-Purifying Plants',
    description: 'Graceful white blooms that absorb mold spores and purify humid air.',
    image: '/images/peace-lily.jpg',
  },
  {
    id: 'air-4',
    name: 'Boston Fern',
    cost: '$19',
    price: 19,
    category: 'Air-Purifying Plants',
    description: 'Lush feathery fronds that act as a natural indoor humidifier and air purifier.',
    image: '/images/boston-fern.jpg',
  },
  {
    id: 'air-5',
    name: 'Rubber Plant',
    cost: '$25',
    price: 25,
    category: 'Air-Purifying Plants',
    description: 'Glossy thick foliage that removes carbon monoxide and airborne impurities.',
    image: '/images/rubber-plant.jpg',
  },
  {
    id: 'air-6',
    name: 'English Ivy',
    cost: '$16',
    price: 16,
    category: 'Air-Purifying Plants',
    description: 'Hardy trailing evergreen known for reducing airborne mold particles.',
    image: '/images/english-ivy.jpg',
  },

  // Category 2: Aromatic Fragrant Plants
  {
    id: 'arom-1',
    name: 'French Lavender',
    cost: '$18',
    price: 18,
    category: 'Aromatic Fragrant Plants',
    description: 'Calming floral aroma that naturally soothes stress and promotes deep sleep.',
    image: '/images/lavender.jpg',
  },
  {
    id: 'arom-2',
    name: 'Sweet Jasmine',
    cost: '$20',
    price: 20,
    category: 'Aromatic Fragrant Plants',
    description: 'Exquisite sweet fragrance that fills rooms with pure botanical tranquility.',
    image: '/images/jasmine.jpg',
  },
  {
    id: 'arom-3',
    name: 'Rosemary',
    cost: '$15',
    price: 15,
    category: 'Aromatic Fragrant Plants',
    description: 'Woody herbaceous evergreen scent known to boost memory and focus.',
    image: '/images/rosemary.jpg',
  },
  {
    id: 'arom-4',
    name: 'Peppermint',
    cost: '$12',
    price: 12,
    category: 'Aromatic Fragrant Plants',
    description: 'Invigorating mint aroma that refreshes the senses and repels indoor insects.',
    image: '/images/mint.jpg',
  },
  {
    id: 'arom-5',
    name: 'White Gardenia',
    cost: '$24',
    price: 24,
    category: 'Aromatic Fragrant Plants',
    description: 'Velvety fragrant flowers providing luxurious garden-fresh natural perfume.',
    image: '/images/gardenia.jpg',
  },
  {
    id: 'arom-6',
    name: 'Lemon Balm',
    cost: '$14',
    price: 14,
    category: 'Aromatic Fragrant Plants',
    description: 'Crisp citrus aroma that uplifts your mood and revitalizes workspace air.',
    image: '/images/lemon-balm.jpg',
  },

  // Category 3: Medicinal Plants
  {
    id: 'med-1',
    name: 'Aloe Vera',
    cost: '$14',
    price: 14,
    category: 'Medicinal Plants',
    description: 'Gel-filled leaves renowned for healing skin burns and natural soothing.',
    image: '/images/aloe-vera.jpg',
  },
  {
    id: 'med-2',
    name: 'Chamomile',
    cost: '$16',
    price: 16,
    category: 'Medicinal Plants',
    description: 'Daisy-like blossoms celebrated for calming infusions and medicinal tea.',
    image: '/images/chamomile.jpg',
  },
  {
    id: 'med-3',
    name: 'Calendula',
    cost: '$15',
    price: 15,
    category: 'Medicinal Plants',
    description: 'Golden marigold blooms historically used in soothing skin salves.',
    image: '/images/calendula.jpg',
  },
  {
    id: 'med-4',
    name: 'Purple Coneflower (Echinacea)',
    cost: '$18',
    price: 18,
    category: 'Medicinal Plants',
    description: 'Iconic medicinal herb valued for immune support and vibrant petals.',
    image: '/images/echinacea.jpg',
  },
  {
    id: 'med-5',
    name: 'Holy Basil (Tulsi)',
    cost: '$12',
    price: 12,
    category: 'Medicinal Plants',
    description: 'Sacred adaptogenic herb recognized for reducing stress and promoting vitality.',
    image: '/images/tulsi.jpg',
  },
  {
    id: 'med-6',
    name: 'Gotu Kola',
    cost: '$17',
    price: 17,
    category: 'Medicinal Plants',
    description: 'Ancient Ayurvedic restorative herb supporting mental clarity and wellness.',
    image: '/images/gotu-kola.jpg',
  },

  // Category 4: Low-Maintenance Plants
  {
    id: 'low-1',
    name: 'Jade Plant',
    cost: '$17',
    price: 17,
    category: 'Low-Maintenance Plants',
    description: 'Resilient succulent with thick glossy leaves requiring minimal watering.',
    image: '/images/jade-plant.jpg',
  },
  {
    id: 'low-2',
    name: 'ZZ Plant',
    cost: '$24',
    price: 24,
    category: 'Low-Maintenance Plants',
    description: 'Virtually indestructible plant thriving even in low light and dry soil.',
    image: '/images/zz-plant.jpg',
  },
  {
    id: 'low-3',
    name: 'Golden Pothos',
    cost: '$16',
    price: 16,
    category: 'Low-Maintenance Plants',
    description: 'Fast-growing trailing vine that survives neglect and cleans interior air.',
    image: '/images/pothos.jpg',
  },
  {
    id: 'low-4',
    name: 'Echeveria Succulent',
    cost: '$12',
    price: 12,
    category: 'Low-Maintenance Plants',
    description: 'Drought-tolerant geometric rosette suited for compact sunlit windowsills.',
    image: '/images/echeveria.jpg',
  },
  {
    id: 'low-5',
    name: 'Monstera Deliciosa',
    cost: '$32',
    price: 32,
    category: 'Low-Maintenance Plants',
    description: 'Striking split leaves that adapt easily to regular household conditions.',
    image: '/images/monstera.jpg',
  },
  {
    id: 'low-6',
    name: 'Cast Iron Plant',
    cost: '$26',
    price: 26,
    category: 'Low-Maintenance Plants',
    description: 'Earned its name from its remarkable ability to withstand dark corners and neglect.',
    image: '/images/fiddle-leaf.jpg',
  },
];

const categoryList = [
  'Air-Purifying Plants',
  'Aromatic Fragrant Plants',
  'Medicinal Plants',
  'Low-Maintenance Plants',
];

export default function ProductList({ onNavigateToCart, onNavigateHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    // Router fallback
  }

  // Track added items by plant name to drive disabled state: disabled={!!addedToCart[plant.name]}
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  // Synchronize addedToCart state with Redux cart items (so removing an item enables the button again)
  useEffect(() => {
    const currentCartMap = {};
    cartItems.forEach((item) => {
      currentCartMap[item.name] = true;
    });
    setAddedToCart(currentCartMap);
  }, [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  const handleOpenCart = () => {
    if (onNavigateToCart) {
      onNavigateToCart();
    } else if (navigate) {
      navigate('/cart');
    } else {
      setShowCart(true);
    }
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleGoHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else if (navigate) {
      navigate('/');
    }
  };

  if (showCart) {
    return (
      <div className="product-list-page-wrapper">
        <Navbar
          onNavigateHome={handleGoHome}
          onNavigatePlants={() => setShowCart(false)}
          onNavigateCart={() => setShowCart(true)}
        />
        <CartItem onContinueShopping={handleContinueShopping} />
      </div>
    );
  }

  return (
    <div className="product-list-page-wrapper">
      {/* Required navbar element */}
      <Navbar
        onNavigateHome={handleGoHome}
        onNavigatePlants={() => setShowCart(false)}
        onNavigateCart={handleOpenCart}
      />

      <header className="product-list-header">
        <div className="header-badge">
          <Sparkles size={16} /> Certified Botanical Nursery Stock
        </div>
        <h1 className="header-title">Our Plant Collection</h1>
        <p className="header-subtitle">
          Hand-nurtured nursery plants divided into distinct botanical categories. Find your
          ideal greenery companions below.
        </p>
      </header>

      <main className="product-categories-container">
        {categoryList.map((category) => {
          const plantsInCategory = plantProducts.filter(
            (plant) => plant.category === category
          );

          return (
            <section key={category} className="plant-category">
              <h2 className="category-title">{category}</h2>
              <div className="product-list">
                {plantsInCategory.map((plant) => {
                  const isAdded = !!addedToCart[plant.name];

                  return (
                    <div key={plant.id} className="product-card">
                      <div className="product-image-container">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="product-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80';
                          }}
                        />
                        <span className="product-category-tag">{plant.category}</span>
                      </div>

                      <div className="product-details">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">{plant.description}</p>
                        <div className="product-price">{plant.cost}</div>

                        <button
                          type="button"
                          className={`product-button ${isAdded ? 'added' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={!!addedToCart[plant.name]}
                          aria-label={`Add ${plant.name} to cart`}
                        >
                          {isAdded ? (
                            <>
                              <Check size={16} /> Added!
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={16} /> Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
