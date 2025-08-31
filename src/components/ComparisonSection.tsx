import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Star, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { label: "Age-specific Programs", key: "agePrograms" },
  { label: "Guided Meditations", key: "guided" },
  { label: "Family Sessions", key: "family" },
  { label: "Progress Tracking", key: "tracking" },
  { label: "Offline Downloads", key: "offline" },
  { label: "1-on-1 Coaching", key: "coaching" },
];

const plans: Record<string, Record<string, boolean | string>> = {
  Starter: {
    agePrograms: "1 program",
    guided: true,
    family: false,
    tracking: "Basic",
    offline: false,
    coaching: false,
  },
  Premium: {
    agePrograms: "All programs",
    guided: true,
    family: true,
    tracking: "Advanced",
    offline: true,
    coaching: false,
  },
  Family: {
    agePrograms: "All + 5 profiles",
    guided: true,
    family: true,
    tracking: "Advanced",
    offline: true,
    coaching: true,
  },
};

const cell = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center text-success">
        <Check className="w-5 h-5" />
      </div>
    ) : (
      <div className="flex items-center justify-center text-muted-foreground">
        <X className="w-5 h-5" />
      </div>
    );
  }
  return <span className="text-sm text-foreground font-medium">{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Compare Our <span className="text-primary">Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the right fit for your family. Upgrade anytime.
          </p>
        </motion.div>

        <Card className="overflow-hidden border-border">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-4 bg-muted/40">
              <div className="p-4 font-semibold text-foreground">Features</div>
              {Object.keys(plans).map((plan) => (
                <div key={plan} className="p-4 text-center">
                  <div className="inline-flex items-center gap-2">
                    {plan === "Premium" ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Popular
                      </span>
                    ) : null}
                  </div>
                  <div className="text-xl font-bold">{plan}</div>
                </div>
              ))}
            </div>

            {/* Rows */}
            <div>
              {features.map((f, idx) => (
                <motion.div
                  key={f.key}
                  className={`grid grid-cols-4 items-center ${idx % 2 ? "bg-background" : "bg-muted/20"}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="p-4 flex items-center gap-2 text-foreground">
                    {f.key === "tracking" && <Shield className="w-4 h-4 text-primary" />}
                    {f.key === "guided" && <Sparkles className="w-4 h-4 text-warm-yellow" />}
                    <span className="font-medium">{f.label}</span>
                  </div>

                  {Object.entries(plans).map(([plan, vals]) => (
                    <div key={plan} className="p-4 text-center">
                      {cell(vals[f.key])}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;