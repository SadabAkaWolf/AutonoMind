import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Play } from "lucide-react";
import { fadeInUp, fadeIn } from "@/lib/animations";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080" 
          alt="Futuristic AI technology and neural networks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          {...fadeInUp}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Transform Your Business with
          <motion.span 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="gradient-text block mt-2"
          >
            Intelligent AI Solutions
          </motion.span>
        </motion.h1>
        
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We implement cutting-edge AI automation, chatbots, and strategic consulting to revolutionize how your business operates and scales.
        </motion.p>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg neon-glow transform transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Start Your AI Journey
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 glass-morphism rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-white/20 text-white hover:text-white"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 text-blue-400 text-4xl hidden lg:block"
      >
        <Bot />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-10 text-purple-400 text-3xl hidden lg:block"
      >
        <Brain />
      </motion.div>
    </section>
  );
}
