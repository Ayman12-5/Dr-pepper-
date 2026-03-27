import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Flavors', href: '#flavors' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Merch', href: '#merch' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dp-red text-dp-cream shadow-xl py-3' : 'bg-transparent text-dp-cream py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display text-3xl tracking-wider italic">
              Dr Pepper
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-sm uppercase tracking-wider hover:text-dp-cream-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-dp-cream-dark transition-colors">
              <User size={20} />
            </button>
            <button className="hover:text-dp-cream-dark transition-colors">
              <ShoppingCart size={20} />
            </button>
            <a
              href="#store-locator"
              className="bg-dp-cream text-dp-red font-display px-6 py-2 rounded-full hover:bg-white transition-colors uppercase tracking-wider"
            >
              Find Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:text-dp-cream-dark transition-colors">
              <ShoppingCart size={24} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dp-cream hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dp-red border-t border-dp-red-light"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-xl font-display uppercase tracking-wider text-dp-cream hover:bg-dp-red-dark rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-4 px-3">
                <a
                  href="#rewards"
                  className="flex items-center space-x-2 text-dp-cream font-bold uppercase"
                >
                  <User size={20} />
                  <span>Sign In / Join</span>
                </a>
                <a
                  href="#store-locator"
                  className="block text-center bg-dp-cream text-dp-red font-display px-6 py-3 rounded-full hover:bg-white transition-colors uppercase tracking-wider text-lg"
                >
                  Find Dr Pepper
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
