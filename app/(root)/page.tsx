import React from "react";
import TripCard from "@/components/home/module/ui/TripCard";
import { getAllTrip } from "@/lib/actions/create-trip";
import { TripData } from "@/types";
import Link from "next/link";
import { FeaturedDestinationsSection } from "@/components/home/module/ui/Featured";
import { CarouselPlugin } from "@/components/home/module/ui/carousel";
import WhyChooseUs from "@/components/home/module/ui/why-choose";
import Gallery from "@/components/home/module/ui/gallery";
import FAQ from "@/components/home/module/ui/faq-section";

const Home = async () => {
	const response = await getAllTrip();
	const trips = (response?.data ?? []).map((t) => ({
		id: t.id,
		trip: t.trip as TripData,
	}));

	return (
		<>
			<CarouselPlugin />
			{/* <HeroSection/> */}
			<FeaturedDestinationsSection />
			<div className="my-10 text-center">
				<h2 className="text-5xl font-bold mb-4">
					Popular <span className="text-color">Destinations</span>
				</h2>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Discover our handpicked selection of breathtaking destinations that
					promise unforgettable adventures
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full">
				{trips.slice(0, 8).map(({ id, trip }) => (
					<Link key={id} href={`/trip-id/${id}`}>
						<TripCard {...trip} />
					</Link>
				))}
			</div>
			<WhyChooseUs />
			<Gallery />
			<FAQ />
		</>
	);
};

export default Home;
export const revalidate = 10