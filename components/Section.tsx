
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', title, subtitle, children, dark = false }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-12 md:py-20 px-6 transition-all duration-1000 ease-out opacity-0 translate-y-8 ${dark ? 'bg-[#064e3b] text-white' : 'bg-white text-gray-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-16">
            {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">{title}</h2>}
            {subtitle && <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-emerald-100' : 'text-gray-600'}`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
