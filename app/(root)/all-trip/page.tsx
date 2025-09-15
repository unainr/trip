import { HeroSection } from '@/components/home/module/ui/HeroSection';
import TripCard from '@/components/home/module/ui/TripCard';
import { getAllTrip } from '@/lib/actions/create-trip';
import { TripData } from '@/types';
import Link from 'next/link';
import React from 'react'

const AllTrip = async() => {
    const response = await getAllTrip();
	const trips = (response?.data ?? []).map((t) => ({
		id: t.id,
		trip: t.trip as TripData,
	}));
  return (
    <>
	<HeroSection/>
      	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full">
				{trips.map(({ id, trip }) => (
					<Link key={id} href={`/trip-id/${id}`}>
						<TripCard {...trip} />
					</Link>
				))}
			</div>
    </>
  )
}

export default AllTrip
