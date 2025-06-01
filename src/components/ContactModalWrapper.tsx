"use client";

import ContactModal from "./Modal";
import { useContactModal } from "./ModalContext";

function ContactModalWrapper() {
  const { isOpen, closeModal } = useContactModal();

  return <ContactModal isOpen={isOpen} onClose={closeModal} />;
}

export default ContactModalWrapper;
