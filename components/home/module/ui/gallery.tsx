'use client'
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Mountain landscape with lake reflection",
    location: "Swiss Alps",
    category: "Mountains"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tropical beach with crystal clear water",
    location: "Maldives",
    category: "Beaches"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Historic temple architecture",
    location: "Angkor Wat, Cambodia",
    category: "Culture"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Mediterranean coastal village",
    location: "Santorini, Greece",
    category: "Villages"
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Traditional Japanese temple",
    location: "Kyoto, Japan",
    category: "Culture"
  }
];

const categories = ["All", "Mountains", "Beaches", "Culture", "Villages", "Wildlife"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Capture the <span className="bg-gradient-sunset bg-clip-text text-transparent">Moment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired by stunning destinations captured by our travelers and photography team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                selectedCategory === category 
                  ? "bg-gradient-ocean text-white border-0" 
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card key={image.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.location}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;