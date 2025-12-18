import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import heroHome from '@/assets/hero-home.jpg';
import iconSo1 from '@/assets/icon-so1.jpg';
import iconSo2 from '@/assets/icon-so2.jpg';
import iconSo3 from '@/assets/icon-so3.jpg';
import iconSo4 from '@/assets/icon-so4.jpg';
import iconSo5 from '@/assets/icon-so5.jpg';
import iconSo6 from '@/assets/icon-so6.jpg';
import iconSo7 from '@/assets/icon-so7.jpg';

const soCards = [
  {
    id: 'SO1',
    title: 'Solve',
    description: 'Identify, formulate, and solve complex engineering problems',
    image: iconSo1,
    path: '/so1',
  },
  {
    id: 'SO2',
    title: 'Design',
    description: 'Apply engineering design to produce solutions',
    image: iconSo2,
    path: '/so2',
  },
  {
    id: 'SO3',
    title: 'Communicate',
    description: 'Communicate effectively with a range of audiences',
    image: iconSo3,
    path: '/so3',
  },
  {
    id: 'SO4',
    title: 'Professionalism',
    description: 'Recognize ethical and professional responsibilities',
    image: iconSo4,
    path: '/so4',
  },
  {
    id: 'SO5',
    title: 'Teamwork',
    description: 'Function effectively on a team',
    image: iconSo5,
    path: '/so5',
  },
  {
    id: 'SO6',
    title: 'Experiment',
    description: 'Develop and conduct appropriate experimentation',
    image: iconSo6,
    path: '/so6',
  },
  {
    id: 'SO7',
    title: 'Learn',
    description: 'Acquire and apply new knowledge',
    image: iconSo7,
    path: '/so7',
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout showNavOnScroll={true}>
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroHome}
            alt="Engineering background"
            className="w-full h-[120%] object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-[0.4em] mb-6"
          >
            B.S. Chemical Engineering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4"
          >
            Leonard Joshua Bulawan's
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-primary-foreground/90 italic"
          >
            E-Portfolio
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10"
          >
            <ChevronDown className="w-8 h-8 text-primary-foreground/70 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title mb-8">Welcome to My Portfolio</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This e-portfolio showcases my journey as a Chemical Engineering student at the 
            University of Santo Tomas. Here, you will find evidence of my growth and 
            development across the seven ABET Student Outcomes, demonstrating my ability 
            to solve complex problems, design innovative solutions, communicate effectively, 
            and continuously learn and adapt to new challenges in the field of engineering.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-secondary transition-colors group"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">ABET Learning Outcomes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore each Student Outcome to see how I have developed essential 
              engineering competencies throughout my academic journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {soCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={card.path}
                  className="block bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                    {card.id}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-primary mt-1 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 gradient-maroon"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Explore?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Dive into each section to discover my academic achievements, reflections, 
            and growth as a future Chemical Engineer.
          </p>
          <Link
            to="/so1"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:bg-muted transition-colors group"
          >
            Start with SO1
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
};

export default Index;
