import { X, MessageCircle, Mail } from 'lucide-react';
import { Translation } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: Translation['modal'];
}

export default function ContactModal({ isOpen, onClose, translations }: ContactModalProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@alinafa.com';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 hover:rotate-90 duration-300"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#1D3A8A] mb-2 animate-slideInDown">
            {translations.title}
          </h3>
          <p className="text-gray-600 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            {translations.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-slideInLeft group"
          >
            <MessageCircle size={24} className="group-hover:animate-bounce-slow" />
            {translations.whatsapp}
          </button>

          <button
            onClick={handleEmail}
            className="w-full flex items-center justify-center gap-3 bg-[#1D3A8A] hover:bg-[#2A4BA0] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-slideInRight group"
          >
            <Mail size={24} className="group-hover:animate-bounce-slow" />
            {translations.email}
          </button>
        </div>
      </div>
    </div>
  );
}
