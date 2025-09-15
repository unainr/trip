import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Barcelona Tour",
      activities: "196 Activities",
      rating: "3.5",
      image: "/image.jpeg",
      size: "large",
    },
    {
      id: 2,
      title: "London, United State",
      activities: "196 Activities", 
      rating: "3.5",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=420&h=390&fit=crop",
      size: "medium",
    },
    {
      id: 3,
      title: "Australia Tour",
      activities: "196 Activities",
      rating: "3.5", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=390&fit=crop",
      size: "medium",
    },
    {
      id: 4,
      title: "Australia Tour",
      activities: "196 Activities",
      rating: "3.5",
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=270&h=226&fit=crop",
      size: "small",
    },
    {
      id: 5,
      title: "Japan Tour", 
      activities: "196 Activities",
      rating: "3.5",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=270&h=226&fit=crop",
      size: "small",
    },
    {
      id: 6,
      title: "Japan Tour",
      activities: "196 Activities",
      rating: "3.5",
      image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",
      size: "small",
    },
  ];

  return (
    <section className="flex flex-col items-center  justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative w-full bg-[#f9fbfc]">
      {/* Header Section */}
      <div className="flex flex-col  items-center justify-center gap-3 sm:gap-3.5 relative">
        <h2 className="relative w-full  [font-family:'Figtree',Helvetica] font-bold text-[#1f1f36] text-2xl sm:text-3xl lg:text-5xl tracking-[0] leading-tight sm:leading-[44px] text-center sm:text-left">
          Featured Travel <span className="text-color"> Destinations</span>
        </h2>

        <p className="relative w-full [font-family:'Figtree',Helvetica] font-normal text-[#7f7e83] text-base sm:text-lg tracking-[0] leading-relaxed sm:leading-[30px] text-center sm:text-left">
          Check out some of the best places you can visit around the world.
        </p>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:flex w-full max-w-7xl items-center justify-center gap-[30px] relative">
        <div className="flex-col w-[870px] justify-between relative self-stretch flex items-center">
          {/* Large Featured Card */}
          <div className="relative w-[870px] h-[297px] rounded-[14px] overflow-hidden mb-[30px] group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Barcelona Tour"
                src={destinations[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-white text-[#ff6250] font-bold px-3 py-1">
                    {destinations[0].rating}
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-2">{destinations[0].title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                  <span className="text-lg">{destinations[0].activities}</span>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Medium Cards Row */}
          <div className="flex w-[870px] items-center justify-between relative">
            {destinations.slice(1, 3).map((destination, index) => (
              <div
                key={destination.id}
                className="w-[420px] h-[390px] rounded-[14px] overflow-hidden relative group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0 h-full relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={destination.title}
                    src={destination.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-white text-[#ff6250] font-bold px-3 py-1">
                        {destination.rating}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                      <span className="text-base">{destination.activities}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>

        {/* Small Cards Column */}
        <div className="inline-flex flex-col h-[717px] items-start justify-between relative">
          {destinations.slice(3).map((destination, index) => (
            <div
              key={destination.id}
              className="w-[270px] h-[226px] rounded-[14px] overflow-hidden relative group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0 h-full relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={destination.title}
                  src={destination.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white text-[#ff6250] font-bold px-2 py-1 text-xs">
                      {destination.rating}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{destination.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    <span className="text-sm">{destination.activities}</span>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden w-full max-w-4xl">
        {/* Featured Card - Always First */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-[14px] overflow-hidden mb-6 sm:mb-8 group cursor-pointer hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0 h-full relative">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Barcelona Tour"
              src={destinations[0].image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-white text-[#ff6250] font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm">
                  {destinations[0].rating}
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{destinations[0].title}</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white/80 rounded-full"></div>
                <span className="text-sm sm:text-base md:text-lg">{destinations[0].activities}</span>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Grid Layout for Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {destinations.slice(1).map((destination, index) => (
            <div
              key={destination.id}
              className="w-full h-[200px] sm:h-[220px] md:h-[250px] rounded-[14px] overflow-hidden relative group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0 h-full relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={destination.title}
                  src={destination.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Badge className="bg-white text-[#ff6250] font-bold px-2 py-1 text-xs">
                      {destination.rating}
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{destination.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/80 rounded-full"></div>
                    <span className="text-xs sm:text-sm">{destination.activities}</span>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};