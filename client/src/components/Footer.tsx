import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const services = [
  "AI Automation",
  "Chatbot Development", 
  "AI Consulting",
  "Full Implementation"
];

const company = [
  "About Us",
  "Case Studies",
  "Blog",
  "Careers"
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="text-3xl font-bold gradient-text mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
              NexusAI
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through intelligent AI solutions. Your partner in the future of automation and innovation.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-400/20 rounded-xl flex items-center justify-center hover:bg-blue-400/40 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-purple-400/20 rounded-xl flex items-center justify-center hover:bg-purple-400/40 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-cyan-400/20 rounded-xl flex items-center justify-center hover:bg-cyan-400/40 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-cyan-400" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <motion.a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 NexusAI. All rights reserved. Built with passion for the future of AI.</p>
        </motion.div>
      </div>
    </footer>
  );
}
