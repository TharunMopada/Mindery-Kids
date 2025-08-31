import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of 2",
      rating: 5,
      text: "My 8-year-old son struggled with bedtime anxiety. After just two weeks with Mindery Kids, he's sleeping through the night and using the breathing techniques on his own. It's been life-changing for our whole family.",
      avatar: "👩",
    },
    {
      name: "David L.",
      role: "Father of 3",
      rating: 5,
      text: "As a single dad, I was looking for tools to help my kids manage their emotions better. The family sessions have brought us closer together, and I've seen remarkable improvements in their emotional regulation.",
      avatar: "👨",
    },
    {
      name: "Maria R.",
      role: "Elementary Teacher",
      rating: 5,
      text: "I recommended Mindery Kids to several families in my class. The children who use it consistently show better focus, less anxiety, and improved social skills. It's become an essential tool for childhood development.",
      avatar: "👩‍🏫",
    },
    {
      name: "Jennifer K.",
      role: "Mother of 1",
      rating: 5,
      text: "My shy 6-year-old daughter has gained so much confidence through the mindfulness exercises. She now uses the techniques before presentations at school and has made several new friends.",
      avatar: "👩‍💼",
    },
    {
      name: "Robert T.",
      role: "Counselor & Dad",
      rating: 5,
      text: "As both a family counselor and a parent, I appreciate the evidence-based approach. The content is developmentally appropriate and the results speak for themselves. Highly recommend to all families.",
      avatar: "👨‍⚕️",
    },
    {
      name: "Lisa P.",
      role: "Mother of twins",
      rating: 5,
      text: "Managing twin 10-year-olds was overwhelming until we found Mindery Kids. The sibling meditation sessions have reduced conflicts by 90% and taught them valuable coping skills they use daily.",
      avatar: "👩‍👧‍👧",
    },
  ];

  const [api, setApi] = useState<CarouselApi | undefined>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-primary">Families Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real families who have transformed their children's emotional well-being with Mindery Kids.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-background border-border h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-warm-yellow fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                      <div className="flex items-center space-x-3 pt-4 border-t border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                          {t.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{t.name}</div>
                          <div className="text-sm text-muted-foreground">{t.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4.9/5</div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-success">2,500+</div>
            <div className="text-muted-foreground text-sm">Five-Star Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-secondary-accent">98%</div>
            <div className="text-muted-foreground text-sm">Would Recommend</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-warm-orange">50+</div>
            <div className="text-muted-foreground text-sm">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;