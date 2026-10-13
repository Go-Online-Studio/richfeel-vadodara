'use client';

import React from 'react';
import { useConsultation } from '@/context/ConsultationContext';
import { ConsultationModal } from '@/components/booking/ConsultationModal';

export const GlobalConsultationModal: React.FC = () => {
  const { isBookingOpen, defaultConcern, closeBooking } = useConsultation();

  return (
    <ConsultationModal
      isOpen={isBookingOpen}
      onClose={closeBooking}
      defaultConcern={defaultConcern}
    />
  );
};
