'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  setMobileMenuOpen: () => {},
  setMobileMenuClose: () => {},
  model: '',
  setModel: () => {},

  openPopup: null,
  togglePopup: () => {},
  setOpenPopup: () => {},
  form: 'login',
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [model, setModel] = useState('lelato-20ft');
  const [openPopup, setOpenPopup] = useState(null);
  const [form, setForm] = useState('login');
  /* Mobile menu */
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const setMobileMenuOpen = () => setIsMobileMenuOpen(true);
  const setMobileMenuClose = () => setIsMobileMenuOpen(false);

  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider value={{
      isMobileMenuOpen,
      toggleMobileMenu,
      setMobileMenuOpen,
      setMobileMenuClose,
      model,
      setModel,

      openPopup,
      togglePopup,
      setOpenPopup,
      form,
      setForm,
    }}>
      {children}
    </Context.Provider>
  );
}