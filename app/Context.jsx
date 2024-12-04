'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  setMobileMenuOpen: () => {},
  setMobileMenuClose: () => {},
});

export default function ContextProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Mobile menu */
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const setMobileMenuOpen = () => setIsMobileMenuOpen(true);
  const setMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <Context.Provider value={{
      isMobileMenuOpen,
      toggleMobileMenu,
      setMobileMenuOpen,
      setMobileMenuClose,
    }}>
      {children}
    </Context.Provider>
  );
}
