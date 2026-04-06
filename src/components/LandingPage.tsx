import { useState } from 'react';
import { ChevronRight, CheckCircle, Zap, Users, Globe as Globe2, TrendingUp } from 'lucide-react';
import { Translation, Language } from '../types';
import { translations } from '../data/translations';
import ContactModal from './ContactModal';
import logoImage from '../assets/images/alinafa-secondary-full-2.png';

// Currency enum
enum Currency {
  FCFA = 'FCFA',
  EUR = 'EUR',
  USD = 'USD',
}
const currencyData = {
  [Currency.FCFA]: {sign: "Cfa", pricePerHOur: "10.000"},
  [Currency.EUR]: {sign: "€", pricePerHOur: "20"},
  [Currency.USD]: {sign : "$", pricePerHOur: "20"}
}

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>(Currency.FCFA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const toggleCurrency = () => {
    setCurrency(prev => (prev === Currency.FCFA ? Currency.EUR : Currency.FCFA));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1D3A8A] to-[#2A4BA0] rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="Logo" style={{height: "35px"}} />
            </div>
            <span className="text-2xl font-bold text-[#1D3A8A]">Alinafa</span>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-[#1D3A8A] transition-colors"
          >
            <Globe2 size={18} className="text-[#1D3A8A]" />
            <span className="font-medium text-gray-700">{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1D3A8A] via-[#2A4BA0] to-[#1D3A8A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FBBF24] rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FBBF24] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
              {language == 'fr' ? (
                <>
                  Nous connectons les
                  <br/>
                  <span className='text-[#FBBF24]'>VibeCodeurs</span>
                  <br/> avec des <span className='text-[#FBBF24]'>experts</span> de la tech
                </>
              ) : (
                <>
                  We connect.
                  <br/>
                  <span className='text-[#FBBF24]'>VibeCoders</span>
                  <br/> with technical <span className='text-[#FBBF24]'>experts</span>.
                </>
              )}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-slideInRight" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#1D3A8A] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce-slow"
            >
              {t.hero.cta}
              <ChevronRight size={24} className="animate-slideInRight" style={{ animationDelay: '0.6s' }} />
            </button>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[t.hero.stats.sessions, t.hero.stats.satisfaction, t.hero.stats.experts].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slideUp hover:scale-105 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <p className="text-3xl font-bold text-[#FBBF24] mb-1 animate-shimmer">{stat.split(' ')[0]}</p>
                  <p className="text-blue-100">{stat.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D3A8A] mb-4">
              {t.forWho.title}
            </h2>
            <p className="text-xl text-gray-600">{t.forWho.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.forWho.profiles.map((profile, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#FBBF24] group animate-slideUp"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D3A8A] to-[#2A4BA0] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:animate-rotate-slow transition-transform">
                    <Users className="text-[#FBBF24]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D3A8A] mb-3 group-hover:animate-shimmer">{profile.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{profile.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D3A8A] mb-4">{t.howItWorks.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative animate-slideUp hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${idx * 0.13}s` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 h-full border-2 border-gray-100 hover:border-[#FBBF24] hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center mb-4 group-hover:animate-scale-pulse">
                    <span className="text-2xl font-bold text-[#1D3A8A]">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1D3A8A] mb-3 group-hover:animate-shimmer">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {idx < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 animate-bounce-slow">
                    <ChevronRight className="text-[#FBBF24]" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1D3A8A] mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-gray-600">{t.pricing.subtitle}</p>
          </div>

          {/* Currency Switcher */}
          <div className="flex justify-center gap-2 mb-6">
            {Object.values(Currency).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors
                  ${currency === cur ? 'bg-[#FBBF24] text-[#1D3A8A]' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
                `}
              >
                {cur}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#FBBF24] relative overflow-hidden hover:shadow-3xl transition-shadow duration-500 animate-slideUp">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FBBF24] opacity-10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1D3A8A] opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            <div className="text-center mb-8 relative">
              <div className="inline-flex items-baseline gap-2 animate-scale-pulse">
                <span className="text-xl text-gray-600">{t.pricing.priceStartFrom}</span>
                <span className="text-6xl font-bold text-[#1D3A8A]">
                  {currencyData[currency].pricePerHOur}
                </span>
                <span className="text-2xl text-gray-600">{currencyData[currency].sign}</span>
                <span className="text-xl text-gray-500">{t.pricing.perHour}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {t.pricing.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 animate-slideInLeft hover:translate-x-2 transition-transform" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <CheckCircle className="text-[#FBBF24] flex-shrink-0 mt-1 animate-shimmer" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-[#1D3A8A] to-[#2A4BA0] hover:from-[#2A4BA0] hover:to-[#1D3A8A] text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group animate-bounce-slow"
            >
              {t.pricing.cta}
              <TrendingUp size={24} className="group-hover:animate-rotate-slow" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1D3A8A] via-[#2A4BA0] to-[#1D3A8A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[#FBBF24] rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#FBBF24] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-[#FBBF24] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            {t.finalCta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-slideInRight" style={{ animationDelay: '0.4s' }}>
            {t.finalCta.subtitle}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#1D3A8A] font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce-slow group"
          >
            {t.finalCta.cta}
            <ChevronRight size={24} className="group-hover:animate-slideInRight" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D3A8A] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1D3A8A] to-[#2A4BA0] rounded-lg flex items-center justify-center">
              <img src={logoImage} alt="Logo" style={{height: "35px"}} />
            </div>
            <span className="text-xl font-bold">Alinafa</span>
          </div>
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Alinafa. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} translations={t.modal} />
    </div>
  );
}