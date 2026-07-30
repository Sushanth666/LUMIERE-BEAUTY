import { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.shade === action.payload.shade
      );
      if (existingIndex >= 0) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (action.payload.quantity || 1),
        };
        return { ...state, items: updated };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => !(item.id === action.payload.id && item.shade === action.payload.shade)) };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter(item => !(item.id === action.payload.id && item.shade === action.payload.shade)) };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.shade === action.payload.shade
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null };
    case 'SET_SHIPPING':
      return { ...state, shipping: action.payload };
    case 'LOAD_CART':
      return { ...action.payload };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  coupon: null,
  shipping: { id: 'standard', name: 'Standard Delivery', price: 99, days: '5-7 business days' },
};

function getCartKey(user) {
  if (!user) return 'beauty_cart_guest';
  return `beauty_cart_${user.email || user.id || 'user'}`;
}

export function CartProvider({ children }) {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const key = getCartKey(currentUser);
    try {
      const saved = localStorage.getItem(key);
      dispatch({
        type: 'LOAD_CART',
        payload: saved ? { ...initialState, ...JSON.parse(saved) } : initialState,
      });
    } catch {
      dispatch({ type: 'LOAD_CART', payload: initialState });
    }
  }, [currentUser]);

  useEffect(() => {
    const key = getCartKey(currentUser);
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, currentUser]);

  const addToCart = (product, shade = null, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, shade, quantity } });
    toast.success(`${product.name} added to cart! 🛒`, {
      style: { borderRadius: '12px', background: 'var(--bg-card)', color: 'var(--text-primary)' },
    });
  };

  const removeFromCart = (id, shade = null) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, shade } });
    toast.error('Item removed from cart', {
      style: { borderRadius: '12px', background: 'var(--bg-card)', color: 'var(--text-primary)' },
    });
  };

  const updateQuantity = (id, quantity, shade = null) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, shade } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const applyCoupon = (coupon) => dispatch({ type: 'APPLY_COUPON', payload: coupon });
  const removeCoupon = () => dispatch({ type: 'REMOVE_COUPON' });

  const setShipping = (option) => dispatch({ type: 'SET_SHIPPING', payload: option });

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  let discount = 0;
  if (state.coupon) {
    if (state.coupon.type === 'percent') {
      discount = Math.round(subtotal * state.coupon.discount / 100);
    } else {
      discount = state.coupon.discount;
    }
  }

  const shippingCost = subtotal >= 999 ? 0 : state.shipping.price;
  const total = subtotal - discount + shippingCost;

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      applyCoupon,
      removeCoupon,
      setShipping,
      subtotal,
      totalItems,
      discount,
      shippingCost,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
