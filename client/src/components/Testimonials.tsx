import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote: "NexusAI transformed our customer service. Our response time decreased by 70% and customer satisfaction increased dramatically."
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO, DataVantage Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote: "The ROI was immediate. Within 3 months, we automated 60% of our manual processes and saved $50K monthly."
  },
  {
    name: "Emily Thompson",
    title: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote: "Outstanding support and expertise. They didn't just implement AI - they transformed how we think about our business."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real businesses that transformed with AI
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-morphism rounded-2xl p-8"
            >
              <div className="mb-6">
                <div className="flex text-blue-400 text-xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
