import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { X, Sparkles, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

interface TrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialPopup = ({ isOpen, onClose }: TrialPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSuccess(true);
    setShowConfetti(true);
    setIsSubmitting(false);

    // Hide confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    // Auto close after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: ""
      });
    }, 5000);

    toast({
      title: "Welcome to your mindfulness journey! 🧘‍♀️",
      description: "Your free trial has started! Check your email for next steps and access instructions.",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={150}
              gravity={0.3}
            />
          )}
          
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md mx-auto bg-background border-border shadow-2xl">
              {!isSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <DialogHeader className="space-y-4 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="w-8 h-8 bg-gradient-to-br from-primary to-warm-pink rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Sparkles className="w-4 h-4 text-white" />
                        </motion.div>
                        <DialogTitle className="text-2xl font-bold text-foreground">
                          Start Your Free Trial
                        </DialogTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="rounded-full hover:bg-muted"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {/* Cute Mascot */}
                    <motion.div 
                      className="text-center mb-4 p-4 bg-gradient-to-br from-accent to-secondary rounded-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <div className="text-4xl mb-2">🧘‍♀️</div>
                      <p className="text-sm text-muted-foreground">
                        Join thousands of families discovering mindfulness together
                      </p>
                    </motion.div>

                    <div className="flex items-center space-x-4 text-sm text-success">
                      <span>✓ 14 days free</span>
                      <span>✓ No credit card</span>
                      <span>✓ Cancel anytime</span>
                    </div>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Parent/Guardian Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </motion.div>
                      
                      <motion.div
                        className="space-y-2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </motion.div>
                      
                      <motion.div
                        className="space-y-2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Label htmlFor="class" className="text-foreground font-medium">
                          Child's Age Group *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("class", value)}>
                          <SelectTrigger className="border-border focus:border-primary focus:ring-primary">
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="little-explorers">Little Explorers (4-7)</SelectItem>
                            <SelectItem value="mind-masters">Mind Masters (8-11)</SelectItem>
                            <SelectItem value="zen-teens">Zen Teens (12-14)</SelectItem>
                            <SelectItem value="multiple">Multiple children</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Tell us about your goals (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="What would you like your child to gain from mindfulness? (e.g., better sleep, managing anxiety, improved focus)"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-border focus:border-primary focus:ring-primary min-h-[100px] resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.class}
                        className={`w-full font-bold py-3 transition-all duration-300 hover:shadow-lg glow-effect ${(!formData.name || !formData.email || !formData.class)
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white'}`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Starting your trial...</span>
                          </div>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Start My Free Trial
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-muted-foreground text-center">
                      By starting your trial, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </motion.div>
              ) : (
                // Success State
                <motion.div
                  className="p-8 text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-success to-warm-yellow rounded-full mx-auto flex items-center justify-center mb-4">
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                      >
                        ✨
                      </motion.div>
                    </div>
                    <div className="text-4xl mb-2">🎉</div>
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl font-bold text-foreground mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Welcome to Mindery Kids!
                  </motion.h3>
                  
                  <motion.p
                    className="text-muted-foreground mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Check your email for login details and your personalized meditation journey!
                  </motion.p>
                  
                  <motion.div
                    className="flex items-center justify-center space-x-1 text-warm-yellow"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </AnimatePresence>
  );
};

export default TrialPopup;