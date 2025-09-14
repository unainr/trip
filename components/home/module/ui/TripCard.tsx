import React from "react";
import { MapPin } from "lucide-react";
import { TripData } from "@/types";

export default function TripCard({
	travelStyle,
	imageUrls,
	estimatedPrice,
	name,
	location,
	budget,
	groupType,
}: TripData) {
	return (
		<div className="w-full p-6">
			<h2 className="text-2xl font-bold mb-6">{travelStyle}</h2>
				<div className="w-full max-w-64 bg-white rounded-2xl overflow-hidden  border border-gray-100 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1">
					<div className="relative">
						<div
							className="w-full h-48 bg-cover bg-center bg-gray-200"
							style={{ backgroundImage: `url(${imageUrls[0]})` }}>
							<div className="absolute top-4 right-4">
								<span className="bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
									{estimatedPrice}
								</span>
							</div>
						</div>

						<div className="p-4 space-y-3">
							<h3 className="font-semibold text-gray-800 text-lg leading-tight">
								{name.slice(0, 21)}
							</h3>

							<div className="flex items-center gap-1.5">
								<MapPin className="w-4 h-4 text-gray-500" />
								<span className="text-gray-500 text-sm">{location.city}</span>
							</div>

							<div className="flex items-center gap-2 flex-wrap pt-1">
								<span
									className={`bg-green-100 text-green-800  font-medium text-xs px-3 py-1 rounded-full border-0 hover:opacity-80 transition-opacity duration-200`}>
									{budget}
								</span>

								<span
									className={`bg-blue-100 text-blue-800  font-medium text-xs px-3 py-1 rounded-full border-0 hover:opacity-80 transition-opacity duration-200`}>
									{groupType}
								</span>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
}
