import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mic, Calendar, Send, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Record Your Wish",
      description: "Choose your format - text, voice recording, or video. Express your feelings in the way that feels most natural.",
      details: "Our in-browser recorder makes it easy to capture your voice or upload videos. No downloads required."
    },
    {
      icon: Calendar,
      title: "Schedule Delivery", 
      description: "Pick the perfect moment - birthdays, anniversaries, holidays, or any special date in the future.",
      details: "Set one-time deliveries or create recurring wishes that arrive year after year."
    },
    {
      icon: Send,
      title: "Add Recipients",
      description: "Choose who will receive your wish. Add email addresses and phone numbers for delivery notifications.",
      details: "Your wishes are encrypted and only accessible by the intended recipients with secure links."
    },
    {
      icon: CheckCircle,
      title: "Secure Delivery",
      description: "On the scheduled date, your recipients receive a notification with a secure link to access your wish.",
      details: "Links expire after viewing to ensure privacy. Recipients can save or download their special messages."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dawn">
      {/* Header */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            How <span className="bg-gradient-sunset bg-clip-text text-transparent">EverWish</span> Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creating and sending wishes to the future is simple. Follow these four easy steps to preserve your love across time.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="glass-card hover:shadow-warm transition-all duration-300 transform hover:scale-[1.02] group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground mb-4">
                  {step.description}
                </CardDescription>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.details}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl glass-card max-w-md mx-auto">
            <h3 className="text-2xl font-semibold">Ready to get started?</h3>
            <p className="text-muted-foreground text-center">
              Create your first wish in just a few minutes
            </p>
            <Button variant="hero" size="lg" className="group">
              Start Recording
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;