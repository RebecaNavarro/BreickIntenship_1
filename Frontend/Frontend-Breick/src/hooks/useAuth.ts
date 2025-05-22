import { useState, useEffect } from 'react';
import { login as apiLogin, getProfile } from '../services/auth.service';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
      } catch (err) {
        setUser(null);
      }
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const { access_token } = await apiLogin(email, password);
    localStorage.setItem('token', access_token);
    await getProfile();
  };

  return { user, isAuthenticated: !!user, login };
};