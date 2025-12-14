import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ title, children, className = '', id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
