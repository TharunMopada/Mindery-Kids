import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingCTAProps {
  onStartTrial: () => void;
}

const FloatingCTA = ({ onStartTrial }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 500px
      const shouldShow = window.scrollY > 500 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 md:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-warm-pink rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">Start Your Journey</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDismiss}
                className="w-6 h-6 hover:bg-accent"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
            
            <div className="mb-3">
              <p className="text-xs text-muted-foreground mb-2">14-day free trial • No credit card</p>
              <div className="text-xs text-success space-y-1">
                <div>✓ 95% less anxiety</div>
                <div>✓ Better sleep & focus</div>
              </div>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onStartTrial}
                className="w-full bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white font-semibold py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Try Free Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;