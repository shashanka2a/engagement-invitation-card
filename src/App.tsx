'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ParticleAnimation } from './components/ParticleAnimation';
import { Heart } from 'lucide-react';

type Language = 'en' | 'te';

const content = {
  en: {
    header: ['Srirasthu!', 'Shubhamasthu !!', 'Avignamasthu !!!'],
    eventType: 'Wedding Invitation',
    invitationText: 'We solicit your gracious presence with Your family & friends on the auspicious occasion of the Marriage Celebration of our Youngest Son',
    groomName: 'Chi. Sharath Kumar Reddy',
    weds: 'Weds',
    brideName: 'Chi.La.Sow. Neetha Meghana Reddy',
    brideParents: '(D/o. Sri Narra Saidi Reddy - Jyothi R/o. Mukundapuram, Mdl. Munagala, Dt. Suryapet.)',
    sumuhurtham: 'Sumuhurtham:',
    sumuhurthamTime: 'on Wednesday 26-11-2025 at 10-46 a.m. Dhanasu Lagnam.',
    groomCeremony: "Groom's Ceremony:",
    groomCeremonyTime: 'Tuesday 25-11-2025 at 1-00 p.m.',
    groomCeremonyVenue: 'V N REDDY GARDENS, 6MF5+Q9P, Nammikal, Enubamla, Telangana 508212',
    venue: 'Wedding Venue:',
    venueName: 'Degababu Function Hall, Kodad, Dt. Suryapet.',
    invitedBy: 'Invited by',
    hosts: 'Smt & Sri Gogula Vimala - Somi Reddy',
    hostsAddress: 'Vill. Kandhagatla, Mdl. Athmakur (s), Dt. Suryapet.',
    compliments: 'With Best Compliments From: Near & Dear...',
  },
  te: {
    header: ['శ్రీరస్తు!', 'శుభమస్తు!', 'అవిఘ్నమస్తు!!!'],
    eventType: 'వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక',
    invitationText: 'మా కనిష్ఠ పుత్రుడు',
    groomName: 'చి„ శరత్ కుమార్ రెడ్డి',
    weds: 'వివాహము',
    brideName: 'చి॥ల॥సౌ॥ నీత మేఘన రెడ్డి',
    brideParents: '(సూర్యాపేట జి॥, మునగాల మం॥, ముకుందాపురం వా॥లు శ్రీ నర్రాసైది రెడ్డి - జ్యోతి గార్ల ఏకైక పుత్రిక) తో',
    sumuhurtham: 'సుముహూర్తం:',
    sumuhurthamTime: 'తేది. 26-11-2025 బుధవారం ఉ॥గం॥ 10-46ని.లకు',
    groomCeremony: 'వరుని వేడుక:',
    groomCeremonyTime: 'ది. 25-11-2025 మంగళవారం మ॥ 1-00 లకు',
    groomCeremonyVenue: 'V N REDDY GARDENS, 6MF5+Q9P, నమ్మికల్, ఎనుబమ్ల, తెలంగాణ 508212',
    venue: 'వివాహ వేదిక :',
    venueName: 'దేగబాబు ఫంక్షన్ హాల్ కోదాడ, జి|| సూర్యాపేట.',
    invitedBy: 'మీ ఆగమనాభిలాషులు :',
    hosts: 'శ్రీమతి & శ్రీ గోగుల విమల - సోమిరెడ్డి',
    hostsAddress: 'గ్రా॥ కందగట్ల, మం॥ ఆత్మకూరు(ఎస్), జి॥ సూర్యాపేట.',
    compliments: 'అన్న-వదిన: భరత్ కుమార్ రెడ్డి-ప్రీతిరెడ్డి గార్ల మరియు బంధుమిత్రుల అభినందనలతో',
  },
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];

  const handleVenueClick = () => {
    window.open('https://maps.app.goo.gl/kVRARJCbSHXvBGVXA', '_blank');
  };

  const handleGroomCeremonyClick = () => {
    window.open('https://maps.app.goo.gl/kVRARJCbSHXvBGVXA', '_blank');
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
          {/* Language Toggle */}
          <motion.div 
            className="flex justify-end mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 border border-[#D4AF37]/20 shadow-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`relative z-10 px-4 py-1.5 rounded-full text-sm transition-all duration-300 min-w-[70px] ${
                  language === 'en' 
                    ? 'text-[#2C1810] font-semibold' 
                    : 'text-[#8B7355] font-normal'
                }`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`relative z-10 px-4 py-1.5 rounded-full text-sm transition-all duration-300 min-w-[70px] ${
                  language === 'te' 
                    ? 'text-[#2C1810] font-semibold' 
                    : 'text-[#8B7355] font-normal'
                }`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                తెలుగు
              </button>
              <div
                className={`absolute top-1 bottom-1 rounded-full bg-[#D4AF37]/30 transition-all duration-300 ease-in-out ${
                  language === 'en' ? 'left-1 right-[calc(50%+2px)]' : 'left-[calc(50%+2px)] right-1'
                }`}
                style={{ width: 'calc(50% - 4px)' }}
              />
            </div>
          </motion.div>

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 md:p-10 lg:p-12 border border-[#D4AF37]/20">
            {/* Header Invocations */}
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {t.header.map((text, idx) => (
                  <span key={idx} style={{ 
                    color: '#8B7355',
                    fontSize: '0.75rem',
                    fontFamily: 'Georgia, serif',
                  }}>
                    {text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Decorative top element */}
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
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
                fontSize: language === 'te' ? '1rem' : '0.875rem',
                fontFamily: 'Georgia, serif',
                letterSpacing: language === 'te' ? '0.1em' : '0.3em'
              }}>
                {t.eventType}
              </p>
            </motion.div>

            {/* Invitation Text */}
            <motion.div 
              className="text-center mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: language === 'te' ? '0.9rem' : '0.85rem',
                color: '#5C4A3D',
                lineHeight: '1.5'
              }}>
                {t.invitationText}
              </p>
            </motion.div>

            {/* Couple Names */}
            <motion.div 
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h1 style={{ 
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                fontSize: language === 'te' ? 'clamp(1.25rem, 4vw, 2rem)' : 'clamp(1.5rem, 5vw, 2.75rem)',
                lineHeight: '1.2',
                color: '#2C1810',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {t.groomName}
              </h1>
              <div className="flex items-center justify-center my-3">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="mx-3" style={{ 
                  color: '#D4AF37',
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif'
                }}>
                  {t.weds}
                </span>
                <div className="h-px w-8 bg-[#D4AF37]" />
              </div>
              <h1 style={{ 
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                fontSize: language === 'te' ? 'clamp(1.25rem, 4vw, 2rem)' : 'clamp(1.5rem, 5vw, 2.75rem)',
                lineHeight: '1.2',
                color: '#2C1810',
                fontWeight: 'bold'
              }}>
                {t.brideName}
              </h1>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: language === 'te' ? '0.8rem' : '0.8rem',
                color: '#5C4A3D',
                marginTop: '0.5rem',
                lineHeight: '1.4'
              }}>
                {t.brideParents}
              </p>
            </motion.div>

            {/* Sumuhurtham */}
            <motion.div 
              className="text-center mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                color: '#2C1810',
                marginBottom: '0.25rem',
                fontWeight: '600'
              }}>
                {t.sumuhurtham}
              </p>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: language === 'te' ? '0.9rem' : '0.95rem',
                color: '#5C4A3D',
                lineHeight: '1.4'
              }}>
                {t.sumuhurthamTime}
              </p>
            </motion.div>

            {/* Divider */}
            <div className="flex justify-center mb-6">
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
              className="space-y-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {/* Groom's Ceremony */}
              <button
                onClick={handleGroomCeremonyClick}
                className="group w-full bg-[#FFF8E7]/50 border border-[#D4AF37]/20 rounded-lg p-4 text-left cursor-pointer transition-all duration-300 hover:bg-[#FFF8E7]/70 hover:border-[#D4AF37]/40 hover:shadow-md"
              >
                <p style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.95rem',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {t.groomCeremony}
                </p>
                <p style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.9rem',
                  color: '#2C1810',
                  marginBottom: '0.5rem'
                }}>
                  {t.groomCeremonyTime}
                </p>
                <p className="underline group-hover:text-[#D4AF37] transition-colors" style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: language === 'te' ? '0.85rem' : '0.875rem',
                  color: '#2C1810',
                  lineHeight: '1.5'
                }}>
                  {t.groomCeremonyVenue}
                </p>
              </button>

              {/* Venue */}
              <button
                onClick={handleVenueClick}
                className="group w-full bg-[#FFF8E7]/50 border border-[#D4AF37]/20 rounded-lg p-4 text-left cursor-pointer transition-all duration-300 hover:bg-[#FFF8E7]/70 hover:border-[#D4AF37]/40 hover:shadow-md"
              >
                <p style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.95rem',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {t.venue}
                </p>
                <p className="underline group-hover:text-[#D4AF37] transition-colors" style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: language === 'te' ? '0.85rem' : '0.875rem',
                  color: '#2C1810',
                  lineHeight: '1.5'
                }}>
                  {t.venueName}
                </p>
              </button>
            </motion.div>

            {/* Hosted By */}
            <motion.div 
              className="text-center mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '0.9rem',
                color: '#5C4A3D',
                marginBottom: '0.4rem'
              }}>
                {t.invitedBy}
              </p>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                color: '#2C1810',
                fontWeight: '600',
                marginBottom: '0.2rem'
              }}>
                {t.hosts}
              </p>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: language === 'te' ? '0.8rem' : '0.8rem',
                color: '#5C4A3D',
                lineHeight: '1.4'
              }}>
                {t.hostsAddress}
              </p>
            </motion.div>

            {/* Compliments */}
            <motion.div 
              className="text-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: language === 'te' ? '0.8rem' : '0.8rem',
                color: '#8B7355',
                fontStyle: 'italic'
              }}>
                {t.compliments}
              </p>
            </motion.div>

            {/* Decorative bottom element */}
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
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
            transition={{ delay: 1.3 }}
          >
            <p style={{ 
              fontFamily: 'var(--font-georgia), Georgia, serif',
              fontSize: '0.875rem',
              color: '#8B7355'
            }}>
              powered by{' '}
              <a 
                href="https://knotify.sh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#D4AF37] transition-colors duration-300"
                style={{ color: '#8B7355' }}
              >
                Knotify
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
