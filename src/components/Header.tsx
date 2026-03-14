import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import fav from "@/assets/fav.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Meetings", href: "#meetings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-8 sm:right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-card border-b border-gray-200/50' 
        : 'bg-white/50 backdrop-blur-lg'
    }`}>
      <div className="container-wide px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 px-1 sm:px-0">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 sm:gap-3 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Founders Toastmasters Club Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300" 
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block md:hidden lg:block">
              <p className="font-bold text-foreground text-xs sm:text-sm md:text-sm lg:text-base leading-tight group-hover:text-accent transition-colors duration-300">
                Founders
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Toastmasters Club
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-accent/5 group"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Hidden on mobile, shown on tablet and up */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs lg:text-sm xl:text-base px-3 lg:px-4 py-2 lg:py-2.5">
              <a href="#contact" className="flex items-center gap-1.5 lg:gap-2">
                Join Us
                <ChevronDown size={14} className="rotate-[-90deg]" />
              </a>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-foreground hover:bg-accent/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-card"
          >
            <nav className="container-wide py-4 sm:py-6 px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="flex flex-col gap-1 sm:gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-foreground hover:bg-accent/10 rounded-lg sm:rounded-xl transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-2 sm:mt-4"
                >
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base">
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                      Visit as Guest
                    </a>
                  </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
