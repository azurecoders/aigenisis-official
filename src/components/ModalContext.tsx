"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ContactModelType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModelContext = createContext<ContactModelType>(
  {} as ContactModelType
);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModelContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModelContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModelContext);
  if (!context) {
    console.log("Context is undefined");
  }
  return context;
};
