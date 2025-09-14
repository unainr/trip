import React from "react";
import TripCard from "@/components/home/module/ui/TripCard";
import { getAllTrip } from "@/lib/actions/create-trip";
import { TripData } from "@/types";
import Link from "next/link";
import { FeaturedDestinationsSection } from "@/components/home/module/ui/Featured";
import { CarouselPlugin } from "@/components/home/module/ui/carousel";
import WhyChooseUs from "@/components/home/module/ui/why-choose";
import Gallery from "@/components/home/module/ui/gallery";

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
			{trips.slice(0,8).map(({id,trip})=>(
				<Link key={id} href={`/trip-id/${id}`}>

			<TripCard {...trip}  />
			</Link>
				))
			}
		</div>
		<WhyChooseUs/>
		<Gallery/>
			</>
	);
};

export default Home;
