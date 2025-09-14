import React from "react";
import TripCard from "@/components/home/module/ui/TripCard";
import TripForm from "@/components/home/module/ui/TripForm";
import { auth } from "@clerk/nextjs/server";
import { getAllTrip } from "@/lib/actions/create-trip";
import { TripData } from "@/types";
import Link from "next/link";
import { HeroSection } from "@/components/home/module/ui/HeroSection";
import { FeaturedDestinationsSection } from "@/components/home/module/ui/Featured";
import { CarouselPlugin } from "@/components/home/module/ui/carousel";

const Home = async () => {
	const response = await getAllTrip();
	const trips = (response?.data ?? []).map((t) => ({
    id: t.id,
    trip: t.trip as TripData,
  }));

	return (
		<>
		<CarouselPlugin/>
		{/* <HeroSection/> */}
		<FeaturedDestinationsSection/>
		<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full">
			{trips.map(({id,trip})=>(
				<Link key={id} href={`/trip-id/${id}`}>

			<TripCard {...trip}  />
			</Link>
				))
			}
		</div>
			</>
	);
};

export default Home;
