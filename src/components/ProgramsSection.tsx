import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import youngChildImage from "@/assets/young-child-meditation.jpg";
import teenImage from "@/assets/teen-meditation.jpg";
import groupImage from "@/assets/group-meditation.jpg";

interface ProgramTheme {
  strip: string; // top colored strip
  border: string; // card border color
  ring: string; // ring color on hover
  tint: string; // subtle background tint
  icon: string; // icon color
  badgeBg: string; // badge background
}

interface ProgramItem {
  title: string;
  age: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  theme: ProgramTheme;
}

const ProgramsSection = () => {
  const programs: ProgramItem[] = [
    {
      title: "🧸 Little Explorers",
      age: "4–7",
      image: youngChildImage,
      tagline: "Playful Mindfulness",
      description:
        "Playful mindfulness through stories, breathing games, and gentle movements. Perfect for introducing meditation concepts through fun activities.",
      features: [
        "Story-based meditations",
        "Breathing games",
        "Movement exercises",
        "Simple gratitude practices",
        "Imaginative visualization (e.g., “magic garden,” “cloud journeys”)",
        "Mindful coloring & drawing",
        "Gentle music & sound exploration",
        "Play-based group activities",
      ],
      duration: "5–10 mins",
      theme: {
        strip: "bg-warm-yellow",
        border: "border-warm-yellow/40",
        ring: "ring-warm-yellow/25",
        tint: "bg-warm-yellow/10 dark:bg-warm-yellow/5",
        icon: "text-warm-yellow",
        badgeBg: "bg-warm-yellow/20",
      },
    },
    {
      title: "🎯 Mind Masters",
      age: "8–11",
      image: groupImage,
      tagline: "Build Focus & Confidence",
      description:
        "Structured mindfulness practices focused on emotional regulation, concentration, and building confidence through guided sessions.",
      features: [
        "Emotion regulation techniques",
        "Focus & attention training",
        "Confidence building practices",
        "Journaling prompts for self-reflection",
        "Mindful decision-making games",
        "Positive affirmations & self-talk",
        "Social awareness & empathy exercises",
        "Breathing techniques for calming nerves (e.g., before tests)",
      ],
      duration: "10–15 mins",
      theme: {
        strip: "bg-pastel-lavender",
        border: "border-pastel-lavender/40",
        ring: "ring-pastel-lavender/25",
        tint: "bg-pastel-lavender/10 dark:bg-pastel-lavender/5",
        icon: "text-pastel-lavender",
        badgeBg: "bg-pastel-lavender/20",
      },
    },
    {
      title: "🌱 Zen Teens",
      age: "12–14",
      image: teenImage,
      tagline: "Calm, Focus, Resilience",
      description:
        "Advanced mindfulness techniques for managing stress, anxiety, and academic pressure while building emotional resilience.",
      features: [
        "Stress management strategies",
        "Academic focus & study mindfulness",
        "Peer relationship & communication skills",
        "Guided meditations for emotional balance",
        "Techniques for reducing anxiety & overthinking",
        "Body scan & relaxation practices",
        "Building resilience & coping skills",
        "Journaling for emotional clarity",
        "Mindful use of technology & social media",
      ],
      duration: "15–20 mins",
      theme: {
        strip: "bg-pastel-mint",
        border: "border-pastel-mint/40",
        ring: "ring-pastel-mint/25",
        tint: "bg-pastel-mint/10 dark:bg-pastel-mint/5",
        icon: "text-pastel-mint",
        badgeBg: "bg-pastel-mint/20",
      },
    },
  ];

  // Simple emoji icon mapping for bullets
  const getFeatureEmoji = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("story")) return "🎭";
    if (t.includes("breath")) return "🌬️";
    if (t.includes("move")) return "🤸";
    if (t.includes("emotion")) return "🧠";
    if (t.includes("focus")) return "🎯";
    if (t.includes("confidence")) return "💪";
    if (t.includes("stress")) return "🌿";
    if (t.includes("academic")) return "📚";
    if (t.includes("peer")) return "👥";
    return "✨";
  };

  const [flippedIdx, setFlippedIdx] = useState<number | null>(null);

  return (
    <section id="ages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs for <span className="text-primary">Every Age</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Age-appropriate mindfulness programs designed to meet children where they are in their developmental journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                className={`group relative overflow-visible border-2 rounded-2xl bg-background ${program.theme.border} ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:${program.theme.ring} ${program.theme.tint}`}
              >
                {/* Make the whole card tappable on mobile to flip */}
                <div
                  className="p-0 cursor-pointer md:cursor-default"
                  onClick={() => setFlippedIdx(flippedIdx === index ? null : index)}
                >
                  {/* Flip container */}
                  <div
                    className="relative h-[500px] [perspective:1000px]"
                  >
                    <div
                      data-flipped={flippedIdx === index}
                      className="relative h-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 md:group-hover:[transform:rotateY(180deg)] data-[flipped=true]:[transform:rotateY(180deg)]">
                      {/* FRONT */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                        {/* Top colored strip with age */}
                        <div className={`h-2 w-full ${program.theme.strip}`} />

                        {/* Image */}
                        <div className="relative">
                          <img
                            src={program.image}
                            alt={`${program.title} (${program.age}) meditation program`}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                          {/* Age badge */}
                          <div className="absolute top-4 left-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-semibold text-foreground shadow-sm">
                              <Sparkles className="w-3.5 h-3.5 text-primary" /> Ages {program.age}
                            </div>
                          </div>
                        </div>

                        {/* Title + Tagline */}
                        <div className="p-5 space-y-2">
                          <h3 className="text-2xl font-bold text-foreground">
                            {program.title} <span className="opacity-80">({program.age})</span>
                          </h3>
                          <p className={`text-sm font-medium ${program.theme.icon}`}>
                            {program.tagline}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="px-5 pb-5">
                          <Button
                            className="w-full bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white font-semibold transition-all duration-300 hover:shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore Program
                          </Button>
                        </div>
                      </div>

                      {/* BACK */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-background">
                        {/* Top colored strip with age */}
                        <div className={`h-2 w-full ${program.theme.strip}`} />

                        <div className="p-5 h-[calc(100%-0.5rem)] flex flex-col min-h-0">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-foreground">
                              What's Included
                            </h4>
                            <span className={`text-xs px-3 py-1 rounded-full ${program.theme.badgeBg} text-foreground/80 border border-border`}>
                              {program.duration}
                            </span>
                          </div>

                          <ul className="space-y-3 flex-1 overflow-y-auto pr-1">
                            {program.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-sm text-muted-foreground">
                                <span className="mr-2" aria-hidden>
                                  {getFeatureEmoji(feature)}
                                </span>
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="pt-6">
                            <Button
                              className="w-full bg-gradient-to-r from-primary to-warm-pink hover:from-primary-dark hover:to-primary text-white font-semibold transition-all duration-300 hover:shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Explore Program
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not sure which program fits your child?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our quick 2-minute assessment to get personalized program recommendations based on your child's age, interests, and mindfulness goals.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            Take Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
