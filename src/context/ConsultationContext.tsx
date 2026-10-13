'use client';

import React, { createContext, useContext, useState } from 'react';

interface ConsultationContextType {
  isBookingOpen: boolean;
  defaultConcern: string;
  openBooking: (concern?: string) => void;
  closeBooking: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isBookingOpen: false,
  defaultConcern: 'Hair Fall & Scalp Health',
  openBooking: () => {},
  closeBooking: () => {},
});

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [defaultConcern, setDefaultConcern] = useState('Hair Fall & Scalp Health');

  const openBooking = (concern?: string) => {
    if (concern) setDefaultConcern(concern);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isBookingOpen,
        defaultConcern,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => useContext(ConsultationContext);
