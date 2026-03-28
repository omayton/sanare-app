import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const PHONE_SPECIALIST_RAW = "5531999693446";
  const WHATSAPP_URL = `https://wa.me/${PHONE_SPECIALIST_RAW}?text=Olá! Gostaria de solicitar um orçamento.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce hover:animate-none"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} fill="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
