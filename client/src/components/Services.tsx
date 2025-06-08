import { motion } from "framer-motion";
import { Settings, MessageCircle, Lightbulb, Rocket } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const services = [
  {
    icon: Settings,
    title: "AI Automation",
    description: "Streamline your workflows with intelligent automation solutions that reduce manual tasks and increase efficiency.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20"
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description: "Custom chatbot development and integration to enhance customer service and engagement 24/7.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/20"
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description: "Strategic AI consulting to identify opportunities and develop implementation roadmaps for your business.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/20"
  },
  {
    icon: Rocket,
    title: "Full Implementation",
    description: "Complete AI transformation with ongoing support, monitoring, and optimization for maximum ROI.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to automate, optimize, and transform your business operations
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-morphism rounded-2xl p-8 group cursor-pointer"
            >
              <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
