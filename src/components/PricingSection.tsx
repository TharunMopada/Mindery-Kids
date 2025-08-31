import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

interface PricingSectionProps {
  onStartTrial: () => void;
}

const PricingSection = ({ onStartTrial }: PricingSectionProps) => {
  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for trying mindfulness with your child",
      features: [
        "Access to 1 age group program",
        "50+ guided meditations",
        "Basic progress tracking",
        "Mobile app access",
        "Email support"
      ],
      color: "border-border",
      buttonColor: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      popular: false
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      description: "Best for families committed to mindfulness",
      features: [
        "Access to ALL age programs",
        "200+ guided meditations",
        "Advanced progress tracking",
        "Family sessions & challenges",
        "Priority support",
        "Offline downloads",
        "Parent guidance resources"
      ],
      color: "border-primary border-2",
      buttonColor: "bg-primary hover:bg-primary-dark text-primary-foreground",
      popular: true
    },
    {
      name: "Family",
      price: "$29.99",
      period: "/month",
      description: "Ultimate plan for multiple children",
      features: [
        "Everything in Premium",
        "Up to 5 child profiles",
        "Personalized recommendations",
        "1-on-1 virtual sessions",
        "Custom meditation requests",
        "24/7 support",
        "Early access to new content"
      ],
      color: "border-border",
      buttonColor: "bg-success hover:bg-success/80 text-success-foreground",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-primary">Mindfulness Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a free 14-day trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card 
                className={`relative group hover:shadow-xl transition-all duration-300 hover:scale-105 ${plan.color} ${
                  plan.popular ? 'bg-primary/5' : 'bg-background'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Collapsible extra features for lighter initial view */}
                  <details className="group">
                    <summary className="cursor-pointer text-sm text-primary hover:text-primary-dark select-none">
                      See more
                    </summary>
                    <ul className="mt-3 space-y-3">
                      {plan.features.slice(3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                  
                  <Button 
                    onClick={onStartTrial}
                    className={`w-full bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg group-hover:scale-105`}
                  >
                    {plan.popular ? 'Join Now' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-success/10 rounded-full border border-success/20">
            <Check className="w-5 h-5 text-success mr-2" />
            <span className="text-success font-semibold">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Try Mindery Kids risk-free. If you're not completely satisfied within 30 days, 
            we'll refund your money, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;