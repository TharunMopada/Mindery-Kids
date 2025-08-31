import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What ages is Mindery Kids designed for?",
      answer: "Mindery Kids is specifically designed for children ages 4-14. We have three age-appropriate programs: Little Explorers (4-7), Mind Masters (8-11), and Zen Teens (12-14). Each program uses developmentally appropriate language, activities, and session lengths."
    },
    {
      question: "How long are the meditation sessions?",
      answer: "Session lengths vary by age group to match attention spans. Little Explorers sessions are 5-10 minutes, Mind Masters are 10-15 minutes, and Zen Teens are 15-20 minutes. We also offer shorter 3-minute breathing exercises for quick calm-downs."
    },
    {
      question: "Is this based on real science?",
      answer: "Yes! Our programs are based on evidence-based mindfulness practices and child development research. We work with child psychologists, educators, and mindfulness experts to ensure our content is both effective and age-appropriate."
    },
    {
      question: "What if my child has trouble sitting still?",
      answer: "That's completely normal! Our programs include movement-based mindfulness, walking meditations, and fidget-friendly techniques. We meet children where they are and gradually build their ability to focus and be present."
    },
    {
      question: "Can parents participate too?",
      answer: "Absolutely! We include family meditation sessions and provide parent guidance resources. Many families find that practicing together strengthens their bond and creates a more peaceful home environment."
    },
    {
      question: "Do you offer offline access?",
      answer: "Yes! Premium and Family plans include offline downloads so children can practice mindfulness anywhere - perfect for car rides, flights, or areas with limited internet connectivity."
    },
    {
      question: "What devices are supported?",
      answer: "Mindery Kids works on iOS devices (iPhone/iPad), Android phones and tablets, and web browsers on computers. All content syncs across devices so your child can start on one device and continue on another."
    },
    {
      question: "How do I track my child's progress?",
      answer: "Our app includes age-appropriate progress tracking with visual rewards, streak counters, and milestone celebrations. Parents can view detailed reports on practice frequency, favorite activities, and emotional growth indicators."
    },
    {
      question: "What if we're not satisfied?",
      answer: "We offer a 14-day free trial with no credit card required, plus a 30-day money-back guarantee on all paid plans. If Mindery Kids isn't right for your family, we'll refund your money, no questions asked."
    },
    {
      question: "How is this different from adult meditation apps?",
      answer: "Unlike adult apps, Mindery Kids uses child-friendly language, shorter attention spans, interactive elements, age-appropriate themes, and gamification elements that make mindfulness engaging and accessible for young minds."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Mindery Kids and helping your child start their mindfulness journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border-border border px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6 group">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>{faq.answer}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you and your family get the most out of Mindery Kids.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="mailto:support@minderykids.com" 
              className="text-primary hover:text-primary-dark font-semibold underline transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Support
            </motion.a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <motion.a 
              href="#" 
              className="text-primary hover:text-primary-dark font-semibold underline transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Chat
            </motion.a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <motion.a 
              href="#" 
              className="text-primary hover:text-primary-dark font-semibold underline transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Help Center
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;