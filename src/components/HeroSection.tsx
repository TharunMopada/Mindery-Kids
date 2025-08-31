import { Button } from "@/components/ui/button";
import { Play, Star, Heart, Moon, Lightbulb, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-meditation-kids.jpg";

interface HeroSectionProps {
  onStartTrial: () => void;
}

const HeroSection = ({ onStartTrial }: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-background to-secondary overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-warm-pink to-lavender rounded-full opacity-20 floating-shape"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-mint to-baby-blue rounded-full opacity-30 floating-shape"
          animate={{ y: [20, -20, 20], rotate: [-45, 45, -45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-warm-yellow to-warm-orange rounded-full opacity-25 floating-shape"
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-60 left-1/2 w-8 h-8 bg-gradient-to-br from-primary to-success rounded-full opacity-20 floating-shape"
          animate={{ y: [10, -10, 10], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-warm-pink/10 text-primary text-sm font-semibold border border-primary/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 10,000+ families
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-foreground">Mindfulness &</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-warm-pink bg-clip-text text-transparent">Meditation for Kids</span>
                <br />
                <span className="text-muted-foreground text-3xl md:text-4xl font-medium">(Ages 4-14)</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Help your child develop emotional intelligence, reduce anxiety, and build lifelong mindfulness skills through fun, age-appropriate activities and guided meditations.
              </motion.p>
            </div>

            {/* Stats with Icons */}
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center group">
                <div className="flex items-center justify-center mb-1">
                  <Moon className="w-5 h-5 text-primary mr-1" />
                  <div className="text-2xl font-bold text-primary">95%</div>
                </div>
                <div className="text-sm text-muted-foreground">Less Anxiety</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-1">
                  <Heart className="w-5 h-5 text-success mr-1" />
                  <div className="text-2xl font-bold text-success">88%</div>
                </div>
                <div className="text-sm text-muted-foreground">Better Sleep</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-1">
                  <Lightbulb className="w-5 h-5 text-secondary-accent mr-1" />
                  <div className="text-2xl font-bold text-secondary-accent">92%</div>
                </div>
                <div className="text-sm text-muted-foreground">Improved Focus</div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={onStartTrial}
                  size="lg"
                  className="relative bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 calm-ring"
                >
                  Start Free Trial
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground group font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex items-center space-x-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className="flex items-center">✓ No Credit Card Required</span>
              <span className="flex items-center">✓ 14-Day Free Trial</span>
              <span className="flex items-center">✓ Cancel Anytime</span>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Children practicing mindfulness meditation in a peaceful outdoor setting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-border"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Live Sessions</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-border"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary flex items-center justify-center">
                  4.9<Star className="w-4 h-4 ml-1 fill-current text-warm-yellow" />
                </div>
                <div className="text-xs text-muted-foreground">Parent Rating</div>
              </div>
            </motion.div>

            {/* Additional floating element */}
            <motion.div 
              className="absolute top-1/2 -left-6 bg-gradient-to-r from-warm-yellow to-warm-orange rounded-full p-3 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              whileHover={{ rotate: 360, scale: 1.1 }}
            >
              <BookOpen className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;