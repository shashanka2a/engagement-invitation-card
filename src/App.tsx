'use client';

import { motion } from 'framer-motion';
import { ParticleAnimation } from './components/ParticleAnimation';
import { MapPin, Heart } from 'lucide-react';

export default function App() {
  const handleVenueClick = () => {
    window.open('https://maps.app.goo.gl/G2XARim27wVUCk7W9', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFEF7 0%, #FFF8E7 50%, #FFFEF7 100%)' }}>
      <ParticleAnimation />
      
      {/* Decorative corner elements */}
      <div className="fixed top-0 left-0 w-48 h-48 opacity-10" style={{ 
        background: 'radial-gradient(circle at top left, #D4AF37 0%, transparent 70%)' 
      }} />
      <div className="fixed bottom-0 right-0 w-48 h-48 opacity-10" style={{ 
        background: 'radial-gradient(circle at bottom right, #D4AF37 0%, transparent 70%)' 
      }} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl w-full"
        >
          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 border border-[#D4AF37]/20">
            {/* Decorative top element */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </motion.div>

            {/* Event Type */}
            <motion.div 
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="tracking-[0.3em] uppercase" style={{ 
                color: '#8B7355',
                fontSize: '0.875rem',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.3em'
              }}>
                Engagement Invitation
              </p>
            </motion.div>

            {/* Couple Names */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h1 style={{ 
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                lineHeight: '1.2',
                color: '#2C1810',
                marginBottom: '0.5rem'
              }}>
                Sharath Reddy
              </h1>
              <div className="flex items-center justify-center my-4">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="mx-3" style={{ 
                  color: '#D4AF37',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif'
                }}>
                  &
                </span>
                <div className="h-px w-8 bg-[#D4AF37]" />
              </div>
              <h1 style={{ 
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                lineHeight: '1.2',
                color: '#2C1810'
              }}>
                Neetha Meghana
              </h1>
            </motion.div>

            {/* Hosted By */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                color: '#5C4A3D',
                marginBottom: '0.5rem'
              }}>
                Hosted by
              </p>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                color: '#2C1810'
              }}>
                Gogula Somi Reddy & Vimala
              </p>
            </motion.div>

            {/* Divider */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40" />
              </div>
            </div>

            {/* Event Details */}
            <motion.div 
              className="text-center space-y-6 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div>
                <p style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.25rem',
                  color: '#2C1810',
                  marginBottom: '0.5rem'
                }}>
                  Friday, 24th October 2025
                </p>
                <p style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.1rem',
                  color: '#5C4A3D'
                }}>
                  10:00 AM onwards
                </p>
              </div>

              {/* Venue */}
              <div className="pt-4">
                <button
                  onClick={handleVenueClick}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                >
                  <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.875rem',
                      color: '#8B7355',
                      marginBottom: '0.125rem'
                    }}>
                      Venue
                    </p>
                    <p className="underline" style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.05rem',
                      color: '#2C1810'
                    }}>
                      Guduguntla Appaiah Subbamma Kalyana Mandapam - Kodad
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Decorative bottom element */}
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6, type: 'spring' }}
            >
              <div className="flex items-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p style={{ 
              fontFamily: 'var(--font-georgia), Georgia, serif',
              fontSize: '0.875rem',
              color: '#8B7355'
            }}>
              made with 💛 by{' '}
              <a 
                href="https://bloomora.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#D4AF37] transition-colors duration-300"
                style={{ color: '#8B7355' }}
              >
                Bloomora
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
