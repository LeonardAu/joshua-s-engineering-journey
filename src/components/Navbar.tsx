import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'SO1', path: '/so1' },
  { name: 'SO2', path: '/so2' },
  { name: 'SO3', path: '/so3' },
  { name: 'SO4', path: '/so4' },
  { name: 'SO5', path: '/so5' },
  { name: 'SO6', path: '/so6' },
  { name: 'SO7', path: '/so7' },
];

interface NavbarProps {
  showOnScroll?: boolean;
}

const Navbar = ({ showOnScroll = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  const location = useLocation();

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link
                to="/"
                className="font-serif text-xl font-bold text-primary hover:text-secondary transition-colors"
              >
                LJB
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link text-sm font-medium uppercase tracking-wider ${
                      location.pathname === item.path ? 'text-primary' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background border-t border-border"
              >
                <div className="container mx-auto px-4 py-4 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-sm font-medium uppercase tracking-wider ${
                          location.pathname === item.path
                            ? 'text-primary'
                            : 'text-foreground/80 hover:text-primary'
                        } transition-colors`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
