import { Button } from "@/components/ui/button";
import React from "react";

export const HeroSection = () => {
  return (
    <section 
      className="relative h-[100vh] min-h-[500px] max-h-[800px] lg:h-[680px] w-full bg-gradient-to-br from-[#87CEEB] via-[#B0E0E6] to-[#E0F6FF] flex items-center overflow-hidden"
    >
      {/* Background mountain landscape */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero2.jpg')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[140px] flex items-center justify-center lg:justify-between w-full">
        {/* Left side - Text content */}
        <div className="max-w-[600px] text-white text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold mb-4 sm:mb-6 leading-tight sm:leading-[1.2] lg:leading-[72px] [font-family:'Figtree',Helvetica] drop-shadow-lg">
            Plan Your<br />
            Trip with Ease
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-[500px] mx-auto lg:mx-0 drop-shadow-md">
            Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore with confidence.
          </p>
          <Button 
            className="bg-[#256ff1] hover:bg-[#1e5bc7] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        
        {/* Right side - Vehicle illustration (hidden on mobile) */}
        <div className="hidden lg:block flex-shrink-0">
          {/* Add your vehicle illustration here */}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};