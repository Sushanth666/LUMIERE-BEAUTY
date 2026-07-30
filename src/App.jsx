import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Quiz from './pages/Quiz';
import SearchPage from './pages/Search';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import TrackOrder from './pages/TrackOrder';
import Returns from './pages/Returns';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import MobileNav from './components/layout/MobileNav';
import CompareModal from './components/product/CompareModal';
import AuthModal from './components/auth/AuthModal';
import LoginPage from './pages/LoginPage';
import GoodbyePage from './pages/GoodbyePage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  // Allow goodbye page to render even when logged out
  if (!currentUser && pathname !== '/goodbye') {
    return <LoginPage />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CompareModal />
      <AuthModal />
      <main style={{ minHeight: 'calc(100vh - 70px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/goodbye" element={<GoodbyePage />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '5rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌸</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>Page Not Found</h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The beauty page you're looking for doesn't exist.</p>
              <a href="/" className="btn-primary" style={{ textDecoration: 'none' }}>Back to Home</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <AppProvider>
                <AppShell />
              </AppProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
      {/* Toaster lives outside AppShell so it works on LoginPage too */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            fontFamily: 'var(--font-body)',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '600',
            padding: '12px 18px',
          },
        }}
      />
    </BrowserRouter>
  );
}
