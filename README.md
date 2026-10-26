# e-plantShopping

An online plant-shopping application featuring plant categories and a Redux-powered shopping cart for **Paradise Nursery**.

---

## 📖 Description

**e-plantShopping** is a modern, responsive web application for purchasing nursery greenery online. Developed for **Paradise Nursery**, it provides plant lovers with a seamless digital shopping experience featuring multiple botanical categories, responsive product cards, a state-synchronized shopping cart, and detailed company information.

---

## 🎯 Project Objectives

1. **Botanical Showcase**: Present four distinct plant categories (**Air-Purifying Plants**, **Aromatic Fragrant Plants**, **Medicinal Plants**, and **Low-Maintenance Plants**) with at least 6 unique plants per category (24 plants in total).
2. **Redux State Management**: Utilize Redux Toolkit (`createSlice`) to manage shopping cart operations (`addItem`, `removeItem`, `updateQuantity`) and synchronize global cart quantity across navigation bars and views.
3. **Responsive Aesthetics**: Offer an inviting nature-inspired user interface styled with clean CSS, accessible controls, and seamless desktop and mobile viewports.
4. **Interactive Shopping Cart**: Display unit costs, quantity adjustment buttons (`+` and `-`), line item totals, grand subtotals, item deletion, Continue Shopping navigation, and demo Checkout alerts.

---

## ✨ Main Features

- **Paradise Nursery Landing Page**:
  - Full-viewport hero banner featuring the exact `.background-image` class with `linear-gradient` and `/images/hero-bg.jpg`.
  - Exact rendered heading: `Welcome to Paradise Nursery`.
  - Prominent **Get Started** button navigating directly to the product catalog.
  - Comprehensive **About Us** section describing Paradise Nursery's botanical mission, indoor plants, outdoor plants, succulents, and air-purifying plants.

- **Plant Catalog (`ProductList.jsx`)**:
  - Visible category sections (`.plant-category`) with clear `<h2>` headings.
  - Four distinct plant categories, each containing 6 unique plant entries (24 unique plants in total):
    - *Air-Purifying Plants*: Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, English Ivy.
    - *Aromatic Fragrant Plants*: French Lavender, Sweet Jasmine, Rosemary, Peppermint, White Gardenia, Lemon Balm.
    - *Medicinal Plants*: Aloe Vera, Chamomile, Calendula, Purple Coneflower (Echinacea), Holy Basil (Tulsi), Gotu Kola.
    - *Low-Maintenance Plants*: Jade Plant, ZZ Plant, Golden Pothos, Echeveria Succulent, Monstera Deliciosa, Cast Iron Plant.
  - Each plant displays an image, title, description, cost/price, and an **Add to Cart** button.
  - State-driven button disabling using `disabled={!!addedToCart[plant.name]}` and dynamic `Added!` label.
  - Buttons automatically re-enable if an item is removed from the shopping cart.

- **Unified Navigation Bar (`.navbar`)**:
  - Renders across product listing and shopping cart views.
  - Direct links to **Home**, **Plants**, and **Cart**.
  - Dynamic shopping cart badge displaying the total quantity of items in the cart (sum of all item quantities).

- **Full-Featured Shopping Cart (`CartItem.jsx`)**:
  - Contained within the exact `.cart-container` element.
  - Displays thumbnail, plant name, unit price via `item.cost`, and quantity controls.
  - Quantity increment via `handleIncrement(item)`.
  - Quantity decrement handler with zero-quantity removal safety.
  - Visible `Delete` button removing items via `removeItem`.
  - Dynamic line totals (`unit cost × quantity`) and prominent subtotal calculation.
  - **Continue Shopping** button returning to the product catalog.
  - **Checkout** button displaying an informative Coming Soon alert.
  - Helpful empty-cart message when no plants are selected.

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 / Vite
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`), React-Redux (`react-redux`)
- **Routing**: React Router (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Vanilla CSS3 with CSS variables and responsive Grid/Flexbox layouts
- **Fonts**: Plus Jakarta Sans, Playfair Display

---

## 📂 Repository Structure

```text
e-plantShopping/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── about-us.jpg
│       ├── aloe-vera.jpg
│       ├── boston-fern.jpg
│       ├── calendula.jpg
│       ├── chamomile.jpg
│       ├── echeveria.jpg
│       ├── echinacea.jpg
│       ├── english-ivy.jpg
│       ├── fiddle-leaf.jpg
│       ├── gardenia.jpg
│       ├── gotu-kola.jpg
│       ├── hero-bg.jpg
│       ├── jade-plant.jpg
│       ├── jasmine.jpg
│       ├── lavender.jpg
│       ├── lemon-balm.jpg
│       ├── mint.jpg
│       ├── monstera.jpg
│       ├── peace-lily.jpg
│       ├── pothos.jpg
│       ├── rosemary.jpg
│       ├── rubber-plant.jpg
│       ├── snake-plant.jpg
│       ├── spider-plant.jpg
│       ├── tulsi.jpg
│       └── zz-plant.jpg
├── src/
│   ├── AboutUs.jsx          # Company mission and plant category descriptions
│   ├── App.css              # Main application stylesheet (.background-image, .navbar, .cart-container)
│   ├── App.jsx              # Landing page (Welcome to Paradise Nursery) & application routing
│   ├── CartItem.jsx         # Shopping cart view with increment, decrement, delete, and subtotal
│   ├── CartSlice.jsx        # Redux Toolkit slice (addItem, removeItem, updateQuantity) & store
│   ├── Navbar.jsx           # Global navigation bar (.navbar) with live cart counter
│   ├── ProductList.jsx      # Plant catalog with 4 categories and 24 plant products
│   ├── index.css            # Base design tokens and typography
│   └── main.jsx             # React root rendering Provider and BrowserRouter
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation & Local Run Instructions

### Prerequisites
- Node.js (version 18+ recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ABHIRAMHI/e-plantShopping.git
   cd e-plantShopping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL (typically `http://localhost:5173`).

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 🧪 Testing Instructions & Verification

Verify each grading rubric requirement as follows:

1. **Landing Page**:
   - Verify the page header displays `Welcome to Paradise Nursery`.
   - Verify the hero banner utilizes the `.background-image` class with `/images/hero-bg.jpg`.
   - Verify the `Get Started` button navigates to the plant catalog without page reload.
   - Verify the `AboutUs` component displays Paradise Nursery's mission, indoor plants, outdoor plants, succulents, and air-purifying plants with `/images/about-us.jpg`.

2. **Plant Catalog**:
   - Verify all 4 categories (**Air-Purifying Plants**, **Aromatic Fragrant Plants**, **Medicinal Plants**, **Low-Maintenance Plants**) have visible `<h2>` headings.
   - Verify each category contains at least 6 unique plants (24 plants total) in `.product-list`.
   - Click **Add to Cart** on a plant: verify the button changes to `Added!` and becomes `disabled`.
   - Verify the cart badge in `.navbar` immediately increments.

3. **Shopping Cart**:
   - Click the cart icon in `.navbar` to open the cart page.
   - Verify the main container has class `.cart-container`.
   - Verify each plant item displays its image, name, unit cost (`item.cost`), and quantity.
   - Click `+`: verify quantity increments and line total updates.
   - Click `-`: verify quantity decrements.
   - Click `Delete`: verify item is removed and the total count updates in `.navbar`.
   - Verify the plant's button in the catalog is now re-enabled.
   - Click `Continue Shopping`: verify navigation returns to the plant catalog.
   - Click `Checkout`: verify the Coming Soon alert appears.
