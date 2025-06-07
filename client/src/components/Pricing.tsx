import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "AI Chatbot Implementation",
      "Basic Process Automation",
      "Monthly Strategy Sessions",
      "Email Support"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$7,999",
    period: "/month",
    description: "Ideal for growing companies",
    features: [
      "Everything in Starter",
      "Advanced AI Automation",
      "Custom AI Solutions",
      "Priority Support",
      "Dedicated Account Manager"
    ],
    buttonText: "Choose Professional",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " pricing",
    description: "For large organizations",
    features: [
      "Full AI Transformation",
      "White-glove Implementation",
      "24/7 Premium Support",
      "Custom Integrations",
      "On-site Training"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">AI Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible pricing options to fit your business needs and scale as you grow
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`glass-morphism rounded-2xl p-8 relative ${
                plan.popular ? "border border-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${
                      plan.popular ? "text-purple-400" : "text-blue-400"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.buttonVariant === "default" 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" 
                    : plan.popular 
                      ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                      : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                }`}
                onClick={scrollToContact}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
