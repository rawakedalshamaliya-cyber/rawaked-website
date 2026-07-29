import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block ms-1 text-[#C5A059] font-bold"
      >
        |
      </motion.span>
    </span>
  );
};

const HeadingTypewriter: React.FC = () => {
  const fullText = "نفتح لك أبواب الأسواق العالمية";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const splitIndex = 14;
  const part1 = displayedText.slice(0, splitIndex);
  const part2 = displayedText.slice(splitIndex);

  return (
    <span className="inline">
      {part1}
      {part2 && (
        <span className="text-[#C5A059] underline decoration-[#C5A059]/70 decoration-4 underline-offset-8">
          {part2}
        </span>
      )}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block ms-1 text-[#C5A059] font-bold"
      >
        |
      </motion.span>
    </span>
  );
};

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigate }) => {
  return (
    <section className="relative bg-transparent text-[#0A1D37] pt-1 pb-6 sm:pb-10 overflow-hidden min-h-[55vh] sm:min-h-[65vh] flex flex-col justify-start">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-2">
        
        {/* Main Headline - Sleek Top Title Banner */}
        <div className="max-w-4xl mx-auto text-center pt-1">
          <div className="inline-block bg-[#0A1D37]/95 backdrop-blur-md text-white px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-2xl border border-[#C5A059]/60 shadow-2xl max-w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight whitespace-normal sm:whitespace-nowrap drop-shadow min-h-[2.5rem] sm:min-h-[3.5rem] flex items-center justify-center">
              <HeadingTypewriter />
            </h1>
          </div>
        </div>

        {/* Brief Description - Animated Typewriter Text */}
        <div className="max-w-2xl mx-auto text-center mt-4 sm:mt-6 mb-2 px-4 min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-center">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-black text-[#fbecc9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <TypewriterText text="منظومة حلول متكاملة بالدمام تشمل الشحن والخدمات اللوجستية، التخليص الجمركي، التسويق الزراعي، والمقاولات العامة بأعلى درجات الكفاءة والأمان." />
          </p>
        </div>

      </div>
    </section>
  );
};




