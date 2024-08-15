import { create } from 'zustand';
import React from 'react';

import { isBrowser } from '../utils';
import { getLoggedIn, logoutUser } from '../api/auth.js';
import deepMerge from '../utils/deepMerge.js';
import { useLanguage } from '../i18n';

const useAuthState = create((set, get) => ({
  user: null,
  isGettingLoggedIn: true,
  setIsGettingLoggedIn: (val) => {
    set(() => ({ isGettingLoggedIn: val }));
  },
  updateUser: (usr) => {
    set((st) => {
      if (!st.user) return st;
      const newUsr = deepMerge(st.user, usr);
      return {
        user: newUsr,
      };
    });
  },
  setUser: (usr) => {
    set(() => ({
      user: usr,
    }));
  },
  login: (usr, token) => {
    if (isBrowser()) {
      localStorage.setItem('zoxxo-token', token);
    }
    set(() => ({
      user: usr,
    }));
  },
  logout: () => {
    if (isBrowser()) {
      localStorage.removeItem('zoxxo-token');
    }
    set(() => ({
      user: null,
    }));
  },
}));

// intermediate hook for handling logout and login
const useAuth = () => {
  const { changeLanguage } = useLanguage();
  const {
    user,
    isGettingLoggedIn,
    setIsGettingLoggedIn,
    setUser,
    login,
    logout: lgOut,
  } = useAuthState();

  const refetchUser = () => {
    if (!user) setIsGettingLoggedIn(true);
    return getLoggedIn()
      .then((usr) => {
        setUser(usr);
        changeLanguage(usr?.language);
      })
      .catch((err) => err)
      .finally(() => (!user ? setIsGettingLoggedIn(false) : null));
  };

  return {
    isGettingLoggedIn,
    user,
    setUser,
    refetchUser,
    login,
    logout: () => logoutUser().then(() => lgOut()),
  };
};

export default useAuth;
