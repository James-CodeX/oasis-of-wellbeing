
import React from "react";
import { Button } from "@/components/ui/button";
import { LeafIcon } from "./icons/LeafIcon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <LeafIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Mental Health & Mentorship</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Your <span className="text-primary">Oasis</span> of Mental Wellbeing
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Discover a peaceful sanctuary where healing, growth, and mental wellbeing flourish through professional counselling and mentorship programs.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="#programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-oasis-200/50 to-teal-100/80 animate-pulse-slow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                    alt="Peaceful forest scene" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
