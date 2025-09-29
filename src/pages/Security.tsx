import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Server, Key, Clock } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your wishes are encrypted using industry-standard AES-256 encryption before being stored.",
      details: "Only you and your designated recipients can access the content of your wishes."
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "All media files are stored on encrypted cloud servers with redundant backups.",
      details: "We use AWS S3 with server-side encryption and strict access controls."
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "You control who can see your wishes and when they can access them.",
      details: "Set wishes to private, family-only, or specify exact recipients with individual permissions."
    },
    {
      icon: Key,
      title: "Signed Access Links",
      description: "Recipients receive secure, time-limited links that expire after viewing.",
      details: "Links are cryptographically signed and cannot be shared or accessed by unauthorized users."
    },
    {
      icon: Server,
      title: "Data Protection",
      description: "We follow GDPR guidelines and never share your personal information.",
      details: "You have full control over your data with options to download or delete at any time."
    },
    {
      icon: Clock,
      title: "Legacy Protection",
      description: "Designate trusted contacts to manage your wishes if you become inactive.",
      details: "Your memories are preserved even if you're unable to manage them yourself."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dawn">
      {/* Header */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Your <span className="bg-gradient-sunset bg-clip-text text-transparent">Privacy</span> & Security
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We understand that your wishes contain your most precious thoughts. That's why we've built EverWish with security and privacy at its core.
          </p>
        </div>
      </div>

      {/* Security Features */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="glass-card hover:shadow-warm transition-all duration-300 transform hover:scale-[1.02] group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground mb-3">
                  {feature.description}
                </CardDescription>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.details}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="mt-16">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold mb-4">
                Compliance & Standards
              </CardTitle>
              <CardDescription className="text-base leading-relaxed max-w-3xl mx-auto">
                EverWish adheres to international security standards and privacy regulations to ensure your data is protected.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">GDPR Compliant</h4>
                  <p className="text-sm text-muted-foreground">Full compliance with European data protection standards</p>
                </div>
                <div className="p-4">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">SOC 2 Type II</h4>
                  <p className="text-sm text-muted-foreground">Audited security controls and procedures</p>
                </div>
                <div className="p-4">
                  <Key className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">ISO 27001</h4>
                  <p className="text-sm text-muted-foreground">Information security management standards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl glass-card max-w-md mx-auto">
            <Shield className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-semibold">Feel Secure?</h3>
            <p className="text-muted-foreground text-center">
              Start preserving your memories with confidence
            </p>
            <Button variant="hero" size="lg">
              Create Secure Wish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;