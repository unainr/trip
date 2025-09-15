import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img 
        src="/hero.jpg" 
        alt="Wayferen Trips"
        className="w-full h-[420px] lg:h-[280px] object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[140px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white drop-shadow-lg mb-2">
            Explore Trips
          </h1>
          <p className="text-white text-sm sm:text-base drop-shadow-md">
            Home / Trips
          </p>
        </div>
      </div>
    </section>
  );
};
