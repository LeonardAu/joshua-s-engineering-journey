import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentCardProps {
  title: string;
  children: ReactNode;
  images?: string[];
  className?: string;
}

const ContentCard = ({ title, children, images, className = '' }: ContentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border card-hover ${className}`}
    >
      <h3 className="font-serif text-2xl font-semibold text-primary mb-6">{title}</h3>
      
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-muted rounded-md overflow-hidden"
            >
              <img
                src={img}
                alt={`${title} image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      )}
      
      <div className="prose prose-sm max-w-none text-foreground/80">
        {children}
      </div>
    </motion.div>
  );
};

export default ContentCard;
