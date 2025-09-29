import { Button } from "@/components/ui/button";
import { Heart, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Family silhouettes watching sunset - EverWish digital time capsule" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dawn opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Heart className="w-16 h-16 text-primary-glow animate-glow" fill="currentColor" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-warning animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow animate-fade-in">
          <span className="bg-gradient-sunset bg-clip-text text-transparent">
            EverWish
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 animate-slide-up font-light leading-relaxed">
          Preserve your love across time
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed">
          Record heartfelt messages, cherished memories, and loving wishes to be delivered 
          on future birthdays, anniversaries, and special moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <Link to="/create-wish">
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Record Your Wish
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button variant="glass" size="lg">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>Encrypted & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Scheduled Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>Legacy Protected</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-warning rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;