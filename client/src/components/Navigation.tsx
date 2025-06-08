import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            <img src={logoImage} alt="AutonoMind Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold gradient-text">AutonoMind</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "About", id: "about" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "About", id: "about" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                className="block w-full text-left hover:text-blue-400 transition-colors duration-300 text-white"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
