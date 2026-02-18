import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks = [
    { 
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/korabdemi/',
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold tracking-tight hover:text-primary transition-colors"
          >
            Korab Demi
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('logos')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Logos
            </button>
            <button
              onClick={() => scrollToSection('social-media')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Social Media
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            
            {/* Social Media Links */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}

            <Button
              variant="futuristic"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('logos')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Logos
            </button>
            <button
              onClick={() => scrollToSection('social-media')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Social Media
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              About
            </button>
            
            {/* Mobile Social Media Links */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {social.label}
              </a>
            ))}

            <Button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-left"
            >
              Contact
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}