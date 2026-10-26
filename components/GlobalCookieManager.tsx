'use client';

import React, { useState, useEffect } from 'react';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';

export const GlobalCookieManager: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setModalOpen(true);
    window.addEventListener('open_cookie_policy_modal', handleOpenModal);
    return () => window.removeEventListener('open_cookie_policy_modal', handleOpenModal);
  }, []);

  return (
    <>
      <CookieConsentBanner onOpenPolicy={() => setModalOpen(true)} />
      <CookiePolicyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
