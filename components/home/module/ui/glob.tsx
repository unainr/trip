"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { GlobeSkeleton } from "@/components/skeleton/globe-skeleton";

const MOVEMENT_DAMPING = 1400;
const AUTO_ROTATION_SPEED = 0.005;

interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
  selectedCountry?: {
    coordinates: [number, number];
    name: string;
  } | null;
  autoRotate?: boolean;
}

const DEFAULT_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.05 },
    { location: [23.8103, 90.4125], size: 0.03 },
    { location: [30.0444, 31.2357], size: 0.04 },
    { location: [39.9042, 116.4074], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.05 },
    { location: [19.4326, -99.1332], size: 0.05 },
    { location: [40.7128, -74.006], size: 0.05 },
    { location: [34.6937, 135.5022], size: 0.03 },
    { location: [41.0082, 28.9784], size: 0.04 },
  ],
};

// Helper function to convert lat/lng to phi/theta
const coordsToAngles = (lat: number, lng: number) => {
  const phi = (lng * Math.PI) / 180;
  const theta = ((90 - lat) * Math.PI) / 180;
  return { phi, theta };
};

export function Globe({
  className,
  config = {},
  selectedCountry = null,
  autoRotate = true,
}: GlobeProps) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [globeReady, setGlobeReady] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Spring values for smooth country transitions
  const targetPhi = useMotionValue(0);
  const targetTheta = useMotionValue(0.3);
  const phiSpring = useSpring(targetPhi, {
    mass: 1,
    damping: 20,
    stiffness: 50,
  });
  const thetaSpring = useSpring(targetTheta, {
    mass: 1,
    damping: 20,
    stiffness: 50,
  });

  // Update target angles when selected country changes
  useEffect(() => {
    if (selectedCountry && selectedCountry.coordinates) {
      const [lat, lng] = selectedCountry.coordinates;
      if (lat && lng) {
        const { phi: newPhi, theta: newTheta } = coordsToAngles(lat, lng);
        targetPhi.set(newPhi);
        targetTheta.set(newTheta);
      }
    } else {
      // Reset to default position
      targetPhi.set(0);
      targetTheta.set(0.3);
    }
  }, [selectedCountry, targetPhi, targetTheta]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  // Create markers based on selected country
  const getMarkers = () => {
    if (selectedCountry && selectedCountry.coordinates) {
      const [lat, lng] = selectedCountry.coordinates;
      if (lat && lng) {
        return [
          {
            location: [lat, lng] as [number, number],
            size: 0.15,
          },
        ];
      }
    }
    return DEFAULT_GLOBE_CONFIG.markers || [];
  };

  // Merge configurations
  const globeConfig: COBEOptions = {
    ...DEFAULT_GLOBE_CONFIG,
    ...config,
    markers: getMarkers(),
    markerColor: selectedCountry 
      ? [0.1, 0.8, 1] // Bright blue for selected country
      : [251 / 255, 100 / 255, 21 / 255], // Default orange
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        // Auto-rotation when not interacting and not hovering
        if (!pointerInteracting.current && autoRotate && !isHovered) {
          phi += AUTO_ROTATION_SPEED;
        }
        
        // Apply spring values for smooth country transitions
        state.phi = phi + rs.get() + phiSpring.get();
        state.theta = thetaSpring.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Mark globe as ready immediately
    setGlobeReady(true);

    // Handle loading state with smooth transition
    const loadingTimer = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
        // Add a small delay before hiding skeleton for smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, 800);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
      clearTimeout(loadingTimer);
    };
  }, [rs, globeConfig, phiSpring, thetaSpring, autoRotate, isHovered]);

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <GlobeSkeleton />
        </div>
      )}

      {/* Globe Canvas Container */}
      <div className="absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]">
        <canvas
          className={cn(
            "size-full transition-opacity duration-700 [contain:layout_paint_size]",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          ref={canvasRef}
          onPointerDown={(e) => {
            if (!isLoading) {
              pointerInteracting.current = e.clientX;
              updatePointerInteraction(e.clientX);
            }
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => {
            if (!isLoading) {
              updateMovement(e.clientX);
            }
          }}
          onTouchMove={(e) => {
            if (!isLoading && e.touches[0]) {
              updateMovement(e.touches[0].clientX);
            }
          }}
        />
      </div>
    </div>
  );
}