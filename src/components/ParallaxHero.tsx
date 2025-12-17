import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  height?: string;
  overlay?: boolean;
}

const ParallaxHero = ({
  title,
  subtitle,
  description,
  imageUrl,
  height = 'h-[70vh]',
  overlay = true,
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="w-full h-[130%] object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ) : (
          <div className="w-full h-full gradient-maroon" />
        )}
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-background" />
      )}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4"
      >
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/90 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 max-w-4xl text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/80 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ParallaxHero;
