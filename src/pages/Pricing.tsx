import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, Crown, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your first wishes",
      features: [
        "5 wishes per month",
        "Text and voice messages",
        "Basic scheduling",
        "Email delivery",
        "1GB storage",
        "Community support"
      ],
      cta: "Start Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Family",
      price: "$9",
      period: "per month",
      description: "Ideal for families wanting to preserve memories together",
      features: [
        "Unlimited wishes",
        "Video messages (HD)",
        "Advanced scheduling",
        "SMS + Email delivery",
        "10GB storage",
        "Family sharing",
        "Legacy protection",
        "Priority support"
      ],
      cta: "Choose Family",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Legacy Vault",
      price: "$99",
      period: "one-time",
      description: "Long-term preservation with 25-year guarantee",
      features: [
        "Everything in Family",
        "25-year storage guarantee",
        "Unlimited storage",
        "4K video support",
        "Advanced encryption",
        "Multiple legacy contacts",
        "White-glove setup",
        "Dedicated support"
      ],
      cta: "Secure Legacy",
      variant: "warm" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dawn">
      {/* Header */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Choose Your <span className="bg-gradient-sunset bg-clip-text text-transparent">Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start free and upgrade as your family's memory collection grows. All plans include our core security and privacy features.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`glass-card hover:shadow-warm transition-all duration-300 transform hover:scale-[1.02] relative ${plan.popular ? 'ring-2 ring-primary/50 shadow-glow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-sunset text-primary-foreground px-4 py-1 text-sm font-semibold">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.variant} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Yes! You can change your plan at any time. When upgrading, you'll get immediate access to new features.
                  </p>
                  
                  <h4 className="font-semibold mb-2">What happens to my wishes if I cancel?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your scheduled wishes will continue to be delivered. You can download all your data before canceling.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Is the Legacy Vault really guaranteed for 25 years?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Yes! We use redundant storage systems and legal trusts to ensure your wishes are preserved and delivered.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Do you offer family discounts?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Family plan allows multiple family members to share the account and create wishes together.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl glass-card max-w-md mx-auto">
            <Heart className="w-12 h-12 text-primary animate-pulse" fill="currentColor" />
            <h3 className="text-2xl font-semibold">Still have questions?</h3>
            <p className="text-muted-foreground text-center">
              Our team is here to help you choose the perfect plan
            </p>
            <Button variant="glass" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;