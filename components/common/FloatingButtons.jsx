"use client";
import { Phone } from "@phosphor-icons/react";
import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const FloatingButtons = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "+5514998415122"; // Número de telefone
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_self");
  };

  return (
    <>
      {/* Botão do WhatsApp */}
      <WhatsAppButton />
      {/* Botão do Telefone */}
      <button
        onClick={handlePhoneClick}
        className="floating-button floating-phone"
        aria-label="Telefone"
      >
        <Phone size={28} weight="fill" color="white" />
      </button>
    </>
  );
};

export default FloatingButtons;
