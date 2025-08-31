import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Clock, Brain, Smile } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Guided Meditation",
      description: "Age-appropriate guided meditations designed specifically for young minds to develop mindfulness skills.",
      color: "text-warm-pink"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "Help children understand and manage their emotions with interactive exercises and breathing techniques.",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anxiety Relief",
      description: "Proven techniques to help children cope with stress, worry, and anxiety in a safe, supportive environment.",
      color: "text-success"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Sessions",
      description: "Practice together with family meditation sessions that strengthen bonds and create peaceful home environments.",
      color: "text-secondary-accent"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timing",
      description: "Short 5-20 minute sessions that fit perfectly into busy schedules, morning routines, or bedtime.",
      color: "text-warm-orange"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Fun & Engaging",
      description: "Interactive stories, games, and animations that make mindfulness enjoyable and accessible for kids.",
      color: "text-warm-yellow"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Mindery Kids?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our evidence-based approach combines child psychology, mindfulness practices, and engaging technology 
            to create a transformative experience for young minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
            <div className="text-muted-foreground">Happy Families</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-success">95%</div>
            <div className="text-muted-foreground">Reduced Anxiety</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-secondary-accent">200+</div>
            <div className="text-muted-foreground">Activities</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-warm-orange">24/7</div>
            <div className="text-muted-foreground">Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;