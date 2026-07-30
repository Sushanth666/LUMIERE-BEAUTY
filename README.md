# 🌸 LUMIÈRE BEAUTY — Premium Beauty E-Commerce Platform

> A fully-featured, production-grade beauty e-commerce web application built with React 19, Vite, and modern web technologies. Lumière Beauty delivers a premium shopping experience with a rich, elegant UI, complete cart & wishlist management, a personalized beauty quiz, and full user authentication — all powered by client-side state and localStorage persistence.

---

## 📸 Project Overview

Lumière Beauty is a **luxury beauty e-commerce platform** catering to skincare, makeup, fragrance, and bodycare categories. The application simulates a real-world e-commerce experience — from browsing products to checkout — without requiring a backend server. All data, sessions, carts, and wishlists are persisted using the browser's `localStorage`.

---

## ✨ Key Features

### 🔐 Authentication System
- **Login / Sign Up** with full form validation
- Email uniqueness check on registration
- Password verification on login
- Session persistence across browser refreshes via `localStorage`
- Pre-seeded demo user: `priya@example.com` / `password123`
- Auth-gated app — unauthenticated users see a dedicated **Login Page**
- **Auth Modal** accessible from anywhere in the app
- Goodbye/Logout page with smooth transition

### 🏠 Home Page
- **Auto-sliding Hero Carousel** with 3 themed slides (Skincare, Makeup, Fragrance)
- **Feature Highlights**: Free Shipping, 100% Authentic, Easy Returns, Expert Picks
- **Featured Products** section with animated product cards
- **Category Grid** linking to filtered product pages
- **Trending Products** horizontal scroll section
- **New Arrivals** section
- **Best Sellers** section
- **Live Countdown Timer** for flash/limited-time offers
- **Customer Reviews Carousel** with star ratings
- **Beauty Quiz CTA** banner

### 🛍️ Product Catalog (`/products`)
- Browse **all products** across 4 categories: Skincare, Makeup, Fragrance, Bodycare
- **Category filtering** via URL params (`/products/skincare`, `/products/makeup`, etc.)
- **Sort options**: Featured, Price Low→High, Price High→Low, Top Rated, New Arrivals
- **Price range filter** and **skin type filter**
- **Search integration** from navbar
- **Compare** up to 3 products side-by-side
- Responsive product grid with animated cards

### 🔍 Product Detail Page (`/product/:id`)
- Product image gallery (multiple views)
- **Shade/variant selector** for applicable products
- Quantity selector
- Add to Cart & Add to Wishlist
- Product ratings, badges (New, Bestseller, Limited), and detailed info
- **Recently Viewed** tracking
- Related / You May Also Like products

### 🛒 Shopping Cart (`/cart`)
- Full cart management: add, remove, update quantity
- **Shade-aware** items (same product in different shades = separate cart entries)
- **Coupon code system** (percent & flat discounts)
- **Shipping options**: Standard (₹99), Express, Free (on orders ≥ ₹999)
- Real-time subtotal, discount, shipping, and total calculation
- Mini Cart drawer accessible from Navbar without leaving the page

### ❤️ Wishlist (`/wishlist`)
- Toggle products in/out of wishlist from any product card
- Dedicated wishlist page with move-to-cart functionality
- Per-user wishlist (each logged-in user has an independent wishlist)

### 💳 Checkout (`/checkout`)
- Multi-step checkout flow
- Delivery address form with validation
- Payment method selection (Card, UPI, COD, Net Banking)
- Order summary with all discount/shipping calculations
- Order confirmation flow

### 👤 User Profile (`/profile`)
- View and **edit** personal information (name, email, phone, address)
- **VIP Tier** badge display (Lumière Gold Member, etc.)
- Complete **Order History** with status, items, total, and tracking numbers
- Account deletion with goodbye page redirect

### 📦 Order Tracking (`/track`)
- Enter tracking number or order ID to view live order status
- Step-by-step delivery progress visualization
- Estimated delivery date display

### 📋 Returns & Support (`/returns`)
- Complete returns policy and initiation flow
- Return request form with reason selection
- Returns status tracker

### 🔮 Beauty Quiz (`/quiz`)
- **4-question personalized quiz**: Skin Type → Skin Concern → Style Preference → Budget
- Dynamic product recommendations based on answers
- Filtered & sorted results by rating
- Fallback to bestsellers if no exact matches found

### 🔎 Search (`/search`)
- Global search accessible from Navbar via overlay
- Real-time search suggestions (min 2 characters)
- Search by product name, brand, or category
- Full results page with matched products

### 📱 Mobile Navigation
- Dedicated bottom navigation bar for mobile users
- Links to Home, Products, Search, Cart, and Profile

### 🌓 Dark / Light Theme
- System-aware theme with manual toggle
- CSS custom properties for all color tokens
- Smooth theme transitions across entire app

### 📄 Static Pages

| Route | Page |
|-------|------|
| `/about` | Brand story and values |
| `/careers` | Open positions and culture |
| `/contact` | Contact form and info |
| `/faq` | Frequently asked questions |
| `/press` | Press coverage and media kit |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

---

## 🏗️ Project Architecture

```
beauty-product-e-commerce-platform/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── skincare/       # 100+ skincare product images
│   │       ├── makeup/         # Makeup product images
│   │       ├── fragrance/      # Fragrance product images
│   │       └── bodycare/       # Bodycare product images
│   ├── favicon.svg
│   ├── favicon-32.png
│   └── logo192.png
│
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Root router + context providers
│   ├── App.css                 # Global app styles
│   ├── index.css               # CSS design tokens + utility classes
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx            # Landing page with hero, features, sections
│   │   ├── Products.jsx        # Product catalog with filters & sorting
│   │   ├── ProductDetail.jsx   # Single product view
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Wishlist.jsx        # Saved products
│   │   ├── Checkout.jsx        # Multi-step checkout
│   │   ├── Quiz.jsx            # Beauty recommendation quiz
│   │   ├── Search.jsx          # Search results page
│   │   ├── LoginPage.jsx       # Auth gate (shown when logged out)
│   │   ├── Login.jsx           # Login route redirect
│   │   ├── Signup.jsx          # Signup route redirect
│   │   ├── Profile.jsx         # User account + orders
│   │   ├── TrackOrder.jsx      # Order tracking
│   │   ├── Returns.jsx         # Returns policy & initiation
│   │   ├── GoodbyePage.jsx     # Post-logout goodbye screen
│   │   ├── About.jsx           # Brand story
│   │   ├── Careers.jsx         # Job listings
│   │   ├── Contact.jsx         # Contact page
│   │   ├── Faq.jsx             # FAQ accordion
│   │   ├── Press.jsx           # Press & media
│   │   ├── Privacy.jsx         # Privacy policy
│   │   └── Terms.jsx           # Terms of service
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthModal.jsx   # Login/Signup modal dialog
│   │   ├── common/
│   │   │   └── LumiereLogo.jsx # Brand logo component
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Top navigation bar
│   │   │   ├── Footer.jsx      # Site footer with links
│   │   │   ├── MiniCart.jsx    # Slide-in cart drawer
│   │   │   ├── MobileNav.jsx   # Bottom nav (mobile)
│   │   │   └── SearchOverlay.jsx # Full-screen search overlay
│   │   ├── product/
│   │   │   ├── ProductCard.jsx # Reusable product card
│   │   │   └── CompareModal.jsx # Side-by-side product comparison
│   │   └── ui/
│   │       ├── CountdownTimer.jsx # Live countdown for offers
│   │       └── StarRating.jsx     # Star rating display
│   │
│   ├── context/                # React Context (global state)
│   │   ├── AuthContext.jsx     # User auth, login, signup, profile
│   │   ├── CartContext.jsx     # Cart state with useReducer
│   │   ├── WishlistContext.jsx # Wishlist state with useReducer
│   │   ├── ThemeContext.jsx    # Dark/Light theme toggle
│   │   └── AppContext.jsx      # UI state (mini cart, search, compare, recently viewed)
│   │
│   ├── data/
│   │   └── products.js         # All product data, categories, quiz questions, reviews
│   │
│   └── utils/
│       └── avatar.js           # Avatar/initials helper utilities
│
├── scripts/
│   └── generate-lumiere-products.mjs  # Script to generate product data
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite + React + Tailwind config
├── package.json                # Dependencies & scripts
└── .gitignore
```

---

## ⚙️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Routing** | React Router DOM v7 |
| **Styling** | Vanilla CSS + Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Toast Notifications** | React Hot Toast |
| **UI Components** | Headless UI |
| **HTTP Client** | Axios |
| **Linting** | OxLint |
| **Image Processing** | Sharp (dev) |
| **State Management** | React Context API + useReducer |
| **Data Persistence** | Browser localStorage |

---

## 🧠 State Management

The app uses **React Context API** with a layered provider approach. All providers are nested in `App.jsx`:

```
ThemeProvider
  └── AuthProvider
        └── CartProvider
              └── WishlistProvider
                    └── AppProvider
                          └── AppShell (routes + UI)
```

### Context Responsibilities

| Context | Responsibility |
|---------|---------------|
| `AuthContext` | User sessions, login, signup, logout, profile update |
| `CartContext` | Cart items, quantity, coupon codes, shipping, totals |
| `WishlistContext` | Wishlist items per user, toggle, add, remove |
| `ThemeContext` | Light/Dark mode toggle with CSS variable switching |
| `AppContext` | Mini cart drawer, search overlay, compare list, recently viewed |

### localStorage Keys

| Key | Description |
|-----|-------------|
| `lumiere_current_user` | Active logged-in user session |
| `lumiere_registered_users` | All registered user accounts |
| `beauty_cart_{email}` | Per-user cart state |
| `beauty_wishlist_{email}` | Per-user wishlist state |
| `beauty_recently_viewed` | Recently viewed product IDs |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sushanth666/LUMIERE-BEAUTY.git

# 2. Navigate into the project directory
cd LUMIERE-BEAUTY

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **https://lumiere-beauty-website.netlify.app/**

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run OxLint static analysis |

---

## 🔑 Demo Login Credentials

You can log in immediately using the pre-seeded demo account:

| Field | Value |
|-------|-------|
| **Email** | `priya@example.com` |
| **Password** | `password123` |

Or **Sign Up** to create your own account — all data is stored locally in your browser.

---

## 🗺️ Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Hero carousel, featured/trending/new products |
| `/products` | `Products` | Full product catalog with filters |
| `/products/:category` | `Products` | Category-filtered product listing |
| `/product/:id` | `ProductDetail` | Individual product page |
| `/cart` | `Cart` | Shopping cart with coupon & shipping |
| `/wishlist` | `Wishlist` | Saved/favourited products |
| `/checkout` | `Checkout` | Multi-step order checkout |
| `/quiz` | `Quiz` | Personalized beauty quiz |
| `/search` | `Search` | Search results |
| `/profile` | `Profile` | User account, orders, settings |
| `/track` | `TrackOrder` | Order tracking |
| `/returns` | `Returns` | Returns & refunds |
| `/faq` | `Faq` | Frequently asked questions |
| `/contact` | `Contact` | Contact form |
| `/about` | `About` | Brand story |
| `/careers` | `Careers` | Job listings |
| `/press` | `Press` | Press & media |
| `/privacy` | `Privacy` | Privacy policy |
| `/terms` | `Terms` | Terms of service |
| `/goodbye` | `GoodbyePage` | Post-logout farewell screen |

> All routes are **auth-gated** — unauthenticated users are shown the `LoginPage` component instead. The only exception is `/goodbye` which is always accessible.

---

## 🎨 Design System

The app uses a custom **CSS design token system** defined in `src/index.css`:

- **Color Tokens**: `--primary`, `--primary-dark`, `--bg-primary`, `--bg-card`, `--text-primary`, `--text-secondary`, etc.
- **Typography**: Google Fonts — `Cormorant Garamond` (display) + `Inter` (body)
- **Spacing**: Consistent spacing scale using CSS custom properties
- **Breakpoints**: Mobile-first responsive design
- **Animations**: Framer Motion for page transitions, Lucide icons for UI elements
- **Dark Mode**: Full dark theme via CSS custom property overrides

---

## 📦 Product Categories

| Category | Description |
|----------|-------------|
| 🧴 **Skincare** | Serums, moisturizers, cleansers, toners, eye creams, masks, SPF |
| 💄 **Makeup** | Lipsticks, foundations, eyeshadows, blushes, highlighters |
| 🌸 **Fragrance** | Perfumes, EDTs, EDPs, body mists |
| 🛁 **Bodycare** | Body lotions, scrubs, oils, bath products |

The product database contains **100+ SKUs** with multiple images per product, shade variants, skin type classifications, badges (New, Bestseller, Limited Edition), and detailed metadata.

---

## 🧩 Key Components

### `ProductCard`
A reusable card component used across the entire site. Features:
- Product image with hover zoom
- Badge overlays (New, Bestseller, Limited)
- Star rating display
- Wishlist toggle button
- Add to Cart with shade awareness
- Compare button

### `Navbar`
- Brand logo
- Category navigation links
- Search icon (opens `SearchOverlay`)
- Theme toggle (dark/light)
- Wishlist icon with item count badge
- Cart icon with item count badge (opens `MiniCart`)
- User avatar / login button

### `MiniCart`
- Slide-in drawer showing cart items
- Quick quantity adjustment
- Subtotal calculation
- Links to full Cart and Checkout

### `CompareModal`
- Side-by-side comparison of up to 3 products
- Attribute-by-attribute comparison table
- Add any compared product to cart

### `AuthModal`
- Modal dialog with Login and Sign Up tabs
- Form validation with error messaging
- Smooth toggle between modes

---

## 🔄 Data Flow

```
User Action (e.g., Add to Cart)
        │
        ▼
  ProductCard / ProductDetail
        │
        ▼
  CartContext.addToCart()
        │
        ▼
  useReducer dispatch → ADD_ITEM
        │
        ▼
  State update → localStorage.setItem()
        │
        ▼
  All subscribed components re-render
  (Navbar badge, MiniCart, Cart page)
```

---

## 📱 Responsive Design

The application is fully responsive across:
- 📱 **Mobile** (< 640px) — Bottom navigation, stacked layouts
- 📟 **Tablet** (640px – 1024px) — 2-column grids, adapted navbar
- 🖥️ **Desktop** (> 1024px) — Full navigation, multi-column layouts

---

## 🛠️ Development Notes

- **No backend required** — the entire application runs client-side
- Product images are stored locally in `public/assets/images/`
- The `scripts/generate-lumiere-products.mjs` script was used to bulk-generate product data
- Authentication is **simulated** — passwords are stored in plain text in localStorage (suitable for demo/portfolio purposes only; do not use in production)
- Coupon codes are defined within `CartContext` for demo purposes

---

## 📄 License

This project is created for educational and portfolio purposes.

---

## 👤 Author

**Sushanth**
GitHub: [@Sushanth666](https://github.com/Sushanth666)

---

Built with love and passion for beauty and code.

**LUMIÈRE BEAUTY** — Where Radiance Meets Technology
