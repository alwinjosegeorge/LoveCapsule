import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Lock, MessageCircle, Smartphone, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Multiple Media Types",
      description: "Record text, voice messages, or video wishes. Capture your emotions in any format that feels right.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Set exact delivery dates or create recurring wishes for birthdays, anniversaries, and special occasions.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Private Delivery",
      description: "Send wishes directly to loved ones via secure links. Only recipients can access their special messages.",
      color: "text-success"
    },
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Your wishes are encrypted and protected. Secure delivery with expiring links ensures privacy.",
      color: "text-destructive"
    },
    {
      icon: Heart,
      title: "Legacy Protection",
      description: "Designate trusted contacts to manage your wishes if you're unable to, ensuring memories live on.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Multi-Language Support",
      description: "Express yourself in English, Malayalam, or any language. Love transcends all barriers.",
      color: "text-secondary-foreground"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-dawn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Features Built with 
            <span className="bg-gradient-sunset bg-clip-text text-transparent"> Love</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature is designed to help you create meaningful connections across time, 
            preserving your most precious thoughts for the moments that matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-warm transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-3 rounded-lg bg-card shadow-soft group-hover:shadow-glow transition-all duration-300 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
            <Heart className="w-5 h-5 text-primary animate-pulse" fill="currentColor" />
            <span className="text-sm font-medium text-muted-foreground">
              Ready to preserve your memories?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;