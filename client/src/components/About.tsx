import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 40% increase in operational efficiency for our clients within 6 months.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "AI specialists, data scientists, and engineers with 10+ years of experience.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance with industry standards.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/20"
  }
];

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern business automation and data analytics" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">NexusAI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another AI company. We're your strategic partner in digital transformation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            {...slideInLeft}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            {...slideInRight}
            className="glass-morphism rounded-2xl p-8"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with collaborative team environment" 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
              <p className="text-gray-400 mb-6">Join 200+ companies already leveraging AI for competitive advantage.</p>
              <Button 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105"
                onClick={scrollToContact}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
