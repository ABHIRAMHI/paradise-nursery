# Paradise Nursery — Plant Shopping Web Application 🌿

A modern, responsive, and visually stunning plant-shopping web application built with **React.js**, **Redux Toolkit**, and **Vanilla CSS**. Paradise Nursery brings botanical beauty to living spaces with curated indoor foliage, outdoor blooms, resilient succulents, and NASA-tested air-purifying plants.

---

## 📖 Table of Contents
- [Project Overview & Objectives](#project-overview--objectives)
- [Key Features](#key-features)
- [Shopping Cart Functionality (Redux Toolkit)](#shopping-cart-functionality-redux-toolkit)
- [Technology Stack](#technology-stack)
- [Project Folder Structure](#project-folder-structure)
- [Installation & Local Setup](#installation--local-setup)
- [Available Scripts](#available-scripts)
- [Design Palette & Aesthetics](#design-palette--aesthetics)
- [Testing & Validation](#testing--validation)

---

## 🌟 Project Overview & Objectives

**Paradise Nursery** was developed as an end-to-end e-commerce experience designed for plant lovers and urban gardeners. 

### Key Objectives:
1. **Streamlined Plant Discovery**: Offer categorized plant collections (Indoor Plants, Outdoor Plants, Succulents, and Air-Purifying Plants) with care instructions (sunlight and watering requirements).
2. **Robust Global State Management**: Utilize **Redux Toolkit** to synchronize cart count, quantities, and line totals across all views without props drilling.
3. **Engaging Nursery Aesthetics**: Deliver a rich botanical feel with deep forest greens, soft creams, tactile cards, and clean typography.
4. **Accessible & Responsive UX**: Seamlessly adapt from desktop screens to tablets and mobile devices with zero layout shift.

---

## ✨ Key Features

- **Lush Hero Landing Page**:
  - High-resolution nursery background image with gradient overlay for optimal readability.
  - Welcoming headline and botanical tagline.
  - Prominent **Get Started** button directing visitors into the plant catalog.
  - Highlights for safe transit, 30-day health guarantee, and 100% organic potting soil.

- **Categorized Plant Catalog (`ProductList.jsx`)**:
  - 12 diverse plant specimens across 4 main categories:
    - *Indoor Plants*: Monstera Deliciosa, Snake Plant, Fiddle Leaf Fig
    - *Outdoor Plants*: French Lavender, Peace Lily, Boston Fern
    - *Succulents*: Aloe Vera, Jade Plant, Echeveria Rosette
    - *Air-Purifying Plants*: Spider Plant, English Ivy, Rubber Plant
  - Interactive category tab filters with dynamic item counters.
  - Instant real-time plant search by name, category, or health benefit.
  - Visual feedback on "Add to Cart" with in-cart quantity badges.
  - Sticky floating cart quick-access pill when items are added.

- **Comprehensive Shopping Cart (`CartItem.jsx`)**:
  - Plant thumbnails, botanical details, and unit prices.
  - Interactive quantity controls (`+`, `-`, and direct numeric input).
  - Dynamic line item totals and live subtotal calculations.
  - Item removal with trash controls.
  - Order summary sidebar with free shipping threshold progress tracker.
  - Friendly empty-state screen guiding users back to the shop.
  - Demo Checkout modal preview.

- **Informative About Us Page (`AboutUs.jsx`)**:
  - Greenhouse founding story and horticultural mission.
  - 3 core specialization pillars.
  - Scientific health and wellness benefits of indoor greenery.
  - Plant quality assurance and lifetime customer care promise.

---

## 🛒 Shopping Cart Functionality (Redux Toolkit)

The shopping cart state is managed in `src/CartSlice.jsx` using Redux Toolkit's `createSlice`:

| Reducer Action | Description | Behavior |
| :--- | :--- | :--- |
| `addItem(product)` | Adds a new plant to cart or increments existing quantity | Automatically checks if item ID exists; if found, increments `quantity` by 1; if new, appends item with `quantity: 1`. |
| `removeItem(id)` | Removes selected plant from the cart | Filters out item matching the provided `id`. |
| `updateQuantity({ id, quantity })` | Updates the selected plant's quantity | Validates that quantity is a positive integer. If set to 0 or negative, removes the item safely. |

### Selectors:
- `selectCartItems`: Returns the array of cart items.
- `selectTotalQuantity`: Calculates the cumulative sum of all plant units in the cart.
- `selectTotalAmount`: Computes the grand subtotal (`∑ price * quantity`).

---

## 🛠 Technology Stack

- **Frontend Core**: React 19, JavaScript (ES6+ JSX)
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`), React-Redux (`react-redux`)
- **Build Tool**: Vite 6+
- **Styling**: Vanilla CSS with custom properties & responsive grid/flexbox
- **Icons**: Lucide React (`lucide-react`)
- **Fonts**: Google Fonts (*Plus Jakarta Sans* & *Playfair Display*)

---

## 📁 Project Folder Structure

```text
paradise-nursery/
├── public/
│   └── images/
│       ├── about-us.jpg
│       ├── aloe-vera.jpg
│       ├── boston-fern.jpg
│       ├── echeveria.jpg
│       ├── english-ivy.jpg
│       ├── fiddle-leaf.jpg
│       ├── hero-bg.jpg
│       ├── jade-plant.jpg
│       ├── lavender.jpg
│       ├── monstera.jpg
│       ├── peace-lily.jpg
│       ├── rubber-plant.jpg
│       ├── snake-plant.jpg
│       └── spider-plant.jpg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

## 🚀 Installation & Local Setup

### Prerequisites:
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Steps:

1. Clone or open the repository folder:
   ```bash
   cd paradise-nursery
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles production-ready optimized assets into the `dist/` directory.
- `npm run preview`: Locally previews the production build output.

---

## 🎨 Design Palette & Aesthetics

- **Forest Green (`#234B35`)**: Primary brand identity, headers, main action buttons.
- **Leaf Green (`#4F7942`)**: Accents, highlights, and icons.
- **Cream (`#F7F5ED`)**: Soft, natural background contrast.
- **White (`#FFFFFF`)**: Clean product cards and content containers.
- **Dark Text (`#243027`)**: High-contrast, accessible typography.

---

## 🧪 Testing & Validation

- ✅ **Navigation**: Verified switching between Home, About Us, Products, and Cart views.
- ✅ **Cart Addition**: Tested adding single and multiple quantities of plants.
- ✅ **Quantity Controls**: Verified increment, decrement, and direct input logic.
- ✅ **Subtotal Calculation**: Tested automatic line totals and grand total re-calculations.
- ✅ **Empty Cart State**: Verified friendly fallback UI and "Continue Shopping" CTA.
- ✅ **Responsive Design**: Verified layouts on mobile (360px), tablet (768px), and desktop (1280px+).
- ✅ **Production Build**: Verified clean zero-error build with `npm run build`.

---

© Paradise Nursery. Built with nature and modern React in mind.
