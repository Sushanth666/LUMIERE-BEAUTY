import { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (state.items.find(i => i.id === action.payload.id)) return state;
      return { items: [...state.items, action.payload] };
    case 'REMOVE':
      return { items: state.items.filter(i => i.id !== action.payload) };
    case 'TOGGLE': {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) return { items: state.items.filter(i => i.id !== action.payload.id) };
      return { items: [...state.items, action.payload] };
    }
    // Replaces entire wishlist state — used when switching users
    case 'LOAD':
      return { items: action.payload };
    default:
      return state;
  }
};

// Each user gets a unique wishlist key
function getWishlistKey(user) {
  if (!user) return 'beauty_wishlist_guest';
  return `beauty_wishlist_${user.email || user.id || 'user'}`;
}

export function WishlistProvider({ children }) {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  // When user changes, load their specific wishlist
  useEffect(() => {
    const key = getWishlistKey(currentUser);
    try {
      const saved = localStorage.getItem(key);
      dispatch({
        type: 'LOAD',
        payload: saved ? JSON.parse(saved).items || [] : [],
      });
    } catch {
      dispatch({ type: 'LOAD', payload: [] });
    }
  }, [currentUser]);

  // Persist wishlist to user-specific key when it changes
  useEffect(() => {
    const key = getWishlistKey(currentUser);
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, currentUser]);

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD', payload: product });
    toast.success('Added to wishlist ❤️', {
      style: { borderRadius: '12px', background: 'var(--bg-card)', color: 'var(--text-primary)' },
    });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
    toast('Removed from wishlist', {
      style: { borderRadius: '12px', background: 'var(--bg-card)', color: 'var(--text-primary)' },
    });
  };

  const toggleWishlist = (product) => {
    const exists = state.items.find(i => i.id === product.id);
    dispatch({ type: 'TOGGLE', payload: product });
    if (!exists) {
      toast.success('Added to wishlist ❤️', {
        style: { borderRadius: '12px', background: 'var(--bg-card)', color: 'var(--text-primary)' },
      });
    }
  };

  const isWishlisted = (id) => state.items.some(i => i.id === id);

  return (
    <WishlistContext.Provider value={{
      items: state.items,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isWishlisted,
      count: state.items.length,
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};
