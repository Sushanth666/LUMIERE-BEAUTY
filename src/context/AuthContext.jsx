import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Registered users stored in localStorage
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('lumiere_registered_users');
    return saved ? JSON.parse(saved) : [
      {
        id: 'user-demo-1',
        name: 'Priya Sharma',
        email: 'priya@example.com',
        password: 'password123',
        phone: '+91 98765 43210',
        address: '102 Rosewood Heights, Bandra West, Mumbai, Maharashtra 400050',
        joinedDate: 'January 2026',
        vipTier: 'Lumière Gold Member',
        orders: [
          {
            id: 'ORD-98421',
            date: '2026-07-20',
            total: 3298,
            status: 'Delivered',
            trackingNumber: 'LUM-TRK-88219',
            items: [
              { name: 'Lumière Radiance Glow Serum', quantity: 1, price: 2499 },
              { name: 'Lumière Velvet Matte Lipstick', quantity: 1, price: 799 },
            ],
          },
          {
            id: 'ORD-97104',
            date: '2026-06-15',
            total: 1899,
            status: 'Delivered',
            trackingNumber: 'LUM-TRK-77104',
            items: [
              { name: 'Lumière Midnight Repair Cream', quantity: 1, price: 1899 },
            ],
          },
        ],
      },
    ];
  });

  // Active logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('lumiere_current_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  // Persist users to localStorage
  useEffect(() => {
    localStorage.setItem('lumiere_registered_users', JSON.stringify(users));
  }, [users]);

  // Persist current user session to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('lumiere_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('lumiere_current_user');
    }
  }, [currentUser]);

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  // Signup
  const signup = ({ name, email, password, phone }) => {
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      const errorMsg = `An account with email "${email}" already exists! Please Sign In instead.`;
      toast.error(errorMsg);
      return { success: false, error: errorMsg };
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email: email.toLowerCase(),
      password,
      phone: phone || '',
      address: '',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      vipTier: 'Lumière Beauty Member',
      orders: [],
    };

    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    closeAuthModal();
    return { success: true };
  };

  // Login
  const login = ({ email, password }) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      const errorMsg = `Account Not Found: No account is registered with "${email}".`;
      return { success: false, isNotFound: true, error: errorMsg };
    }

    if (user.password !== password) {
      const errorMsg = `Incorrect Password: Please check your password and try again.`;
      return { success: false, isNotFound: false, error: errorMsg };
    }

    setCurrentUser(user);
    closeAuthModal();
    toast.success(`Welcome back, ${user.name}! ✨`);
    return { success: true };
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
  };

  // Update Profile
  const updateProfile = (updatedFields) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, ...updatedFields };
    setCurrentUser(updatedUser);

    setUsers(prev => prev.map(u => u.id === currentUser.id ? updatedUser : u));
    toast.success('Profile updated successfully!');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      users,
      signup,
      login,
      logout,
      updateProfile,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      authMode,
      setAuthMode,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
