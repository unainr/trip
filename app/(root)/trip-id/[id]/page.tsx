import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTripById } from "@/lib/actions/create-trip";
import { TripData } from "@/types";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TripView = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const trip = await getTripById(id);
	const data = trip?.data?.trip as TripData;

	if (!trip.success) {
		return <div>Trip not found</div>;
	}
	return (
		<section className="flex flex-col w-full  py-30 px-4 sm:px-6 lg:px-8 items-center justify-center gap-6 md:gap-9 relative">
			<div className="flex flex-col items-center gap-6 md:gap-10 relative w-full max-w-4xl">
				{/* Header Section */}
				<div className="flex w-full items-start gap-4 md:gap-10 relative">
					<div className="w-full flex flex-col items-start gap-4 md:gap-6 relative">
						<div className="w-full flex flex-col items-start gap-4 md:gap-6 relative">
							<h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-[44px] relative [font-family:'Figtree',Helvetica] font-semibold text-[#1f1f36] tracking-[0]">
								{data.name}
							</h1>

							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[25px] relative w-full">
								<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[25px] relative">
									<div className="inline-flex items-center gap-1.5 relative">
										<CalendarIcon className="relative w-4 h-4 sm:w-5 sm:h-5 text-[#7f7e83]" />
										<div className="relative w-fit [font-family:'Figtree',Helvetica] font-normal text-[#7f7e83] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
											{data.duration}day plan
										</div>
									</div>

									<div className="inline-flex items-center gap-1.5 relative">
										<MapPinIcon className="relative w-4 h-4 sm:w-5 sm:h-5 text-[#7f7e83]" />
										<div className="relative w-fit [font-family:'Figtree',Helvetica] font-normal text-[#7f7e83] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
											{data.location.city}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Image Gallery */}
				<div className="flex flex-col lg:flex-row w-full items-center gap-3 md:gap-5 relative">
					<Image
						width={700}
						height={700}
						className="relative w-full lg:w-[462px] h-[200px] sm:h-[250px] md:h-[308px] rounded-2xl object-cover"
						alt="Japan trip main image"
						src={data.imageUrls[0]}
					/>

					<div className="flex flex-row lg:flex-col w-full lg:w-auto items-center lg:items-start justify-center gap-3 lg:gap-3.5 relative">
						<Image
							width={700}
							height={700}
							className="relative w-1/2 lg:w-[220px] h-[120px] sm:h-[140px] md:h-[147px] rounded-[14px] object-cover"
							alt="Japan trip image 1"
							src={data.imageUrls[1]}
						/>

						<Image
							width={700}
							height={700}
							className="relative w-1/2 lg:w-[220px] h-[120px] sm:h-[140px] md:h-[147px] rounded-[14px] object-cover"
							alt="Japan trip image 2"
							src={data.imageUrls[2]}
						/>
					</div>
				</div>
			</div>

			{/* Category Tags and Rating */}
			<div className="w-full max-w-4xl relative flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5">
				<Badge className="inline-flex bg-[#f7edf6] text-[#c01573] items-center justify-center gap-2.5 px-3 sm:px-5 py-2 relative rounded-[40px] border-0 hover:bg-[#f7edf6]">
					<span className="text-sm sm:text-base leading-[17px] relative w-fit [font-family:'Figtree',Helvetica] font-medium tracking-[0] whitespace-nowrap">
						{data.travelStyle}
					</span>
				</Badge>

				<Badge className="inline-flex bg-[#e9f3fb] text-[#175cd3] items-center justify-center gap-2.5 px-3 sm:px-5 py-2 relative rounded-[40px] border-0 hover:bg-[#e9f3fb]">
					<span className="text-sm sm:text-base leading-[17px] relative w-fit [font-family:'Figtree',Helvetica] font-medium tracking-[0] whitespace-nowrap">
						{data.groupType}
					</span>
				</Badge>

				<Badge className="inline-flex items-center bg-[#ecfdf3] text-[#027a48] justify-center gap-2.5 px-3 sm:px-5 py-2 relative rounded-[40px] border-0 hover:bg-[#ecfdf3]">
					<span className="text-sm sm:text-base leading-[17px] relative w-fit [font-family:'Figtree',Helvetica] font-medium tracking-[0] whitespace-nowrap">
						{data.budget}
					</span>
				</Badge>

				<Badge className="inline-flex items-center bg-sky-50 text-[#016aa2] justify-center gap-2.5 px-3 sm:px-5 py-2 relative rounded-[40px] border-0 hover:bg-sky-50">
					<span className="text-sm sm:text-base leading-[17px] relative w-fit [font-family:'Figtree',Helvetica] font-medium tracking-[0] whitespace-nowrap">
						{data.interests}
					</span>
				</Badge>

				<div className="inline-flex items-center gap-2 sm:gap-2.5 relative">
					<img
						className="relative w-16 sm:w-auto"
						alt="5 stars rating"
						src="https://c.animaapp.com/mfhx36h42Ddnuh/img/stars.svg"
					/>

					<Badge className="bg-[#fff3ed] inline-flex items-center justify-center gap-2.5 px-3 sm:px-5 py-2 relative rounded-[40px] border-0 hover:bg-[#fff3ed]">
						<span className="font-medium text-[#b93814] text-xs leading-3 relative w-fit [font-family:'Figtree',Helvetica] tracking-[0] whitespace-nowrap">
							4.9 / 5.0
						</span>
					</Badge>
				</div>
			</div>

			{/* Trip Summary */}
			<div className="flex flex-col sm:flex-row w-full max-w-4xl items-start justify-between gap-4 relative">
				<div className="inline-flex flex-col items-start gap-4 relative flex-1">
					<h2 className="text-xl sm:text-2xl lg:text-3xl leading-tight lg:leading-9 relative [font-family:'Figtree',Helvetica] font-semibold text-[#1f1f36] tracking-[0]">
						{data.duration}-Day {data.country} Adventure
					</h2>
				</div>

				<Badge className="flex min-w-[85px] items-center justify-center gap-2.5 px-2.5 py-1 relative bg-white rounded-[20px] border-0 hover:bg-white">
					<span className="relative w-fit [font-family:'Figtree',Helvetica] font-semibold text-[#1f1f36] text-lg sm:text-xl tracking-[0] leading-6 whitespace-nowrap">
						{data.estimatedPrice}
					</span>
				</Badge>
			</div>

			{/* Description */}
			<div className="flex flex-col w-full max-w-4xl items-start gap-4 md:gap-[18px] relative">
				<p className="relative w-full [font-family:'Figtree',Helvetica] font-normal text-[#2e2c48] text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[30px]">
					{data.description}
				</p>

				<p className="relative w-full [font-family:'Figtree',Helvetica] font-normal text-[#2e2c48] text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[30px]">
					Relax in a Hakone onsen, explore ancient shrines, and indulge in
					authentic Japanese cuisine—all while enjoying seamless travel on the
					Shinkansen. 🚄✨
				</p>
			</div>

			{/* Itinerary */}
			<div className="flex flex-col w-full max-w-4xl items-start justify-center gap-6 md:gap-8 relative">
				{data.itinerary.map((day, index) => (
					<React.Fragment key={index}>
						<div className="flex flex-col items-start gap-4 md:gap-[30px] relative w-full">
							<div className="flex flex-col items-start gap-3 md:gap-4 relative w-full">
								<h3 className="font-semibold text-[#2e2c48] text-lg sm:text-xl leading-[normal] relative w-fit [font-family:'Figtree',Helvetica] tracking-[0]">
									Day {day.day} – {day.location}
								</h3>

								<div className="relative w-full [font-family:'Figtree',Helvetica] font-normal text-[#2e2c48] text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[30px] whitespace-pre-line">
									{day.activities.map((activity, i) => (
										<p key={i} className="mb-2">
											<strong>{activity.time}:</strong> {activity.description}
										</p>
									))}
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>

			{/* Weather Information */}
			<div className="flex flex-col w-full max-w-4xl items-start justify-center gap-6 md:gap-8 relative">
				{Array.isArray(data.weatherInfo) &&
					data.weatherInfo.map((info: any, index: number) => (
						<React.Fragment key={index}>
							<div className="flex flex-col items-start gap-4 md:gap-[30px] relative w-full">
								<div className="flex flex-col items-start gap-3 md:gap-4 relative w-full">
									<h3 className="font-semibold text-[#2e2c48] text-lg sm:text-xl leading-[normal] relative w-fit [font-family:'Figtree',Helvetica] tracking-[0]">
										{info.title || `Weather Info ${index + 1}`}
									</h3>

									<div className="relative w-full [font-family:'Figtree',Helvetica] font-normal text-[#2e2c48] text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[30px] whitespace-pre-line">
										{info.content || info}
									</div>
								</div>
							</div>
						</React.Fragment>
					))}
			</div>

			{/* Map */}
			<Card className="relative w-full max-w-4xl h-[250px] sm:h-[300px] md:h-[303px] bg-basewhite rounded-[10px] overflow-hidden">
				<CardContent className="p-0 h-full">
					<iframe
						src={`https://www.openstreetmap.org/export/embed.html?marker=${data.location.coordinates[0]},${data.location.coordinates[1]}&layer=mapnik`}
						className="w-full h-full rounded-xl"
						loading="lazy"
					/>
				</CardContent>
			</Card>

			{/* Call to Action */}
			<div className="flex flex-col w-full max-w-4xl items-start justify-center gap-5 relative">
				<div className="justify-end gap-4 relative w-full flex items-center">
					<div className="flex items-center justify-end gap-3 relative flex-1">
						<Button className="h-auto flex items-center justify-center gap-2.5 px-4 py-3.5 relative w-full sm:flex-1 bg-[#d3803c] rounded-lg border-2 border-solid border-[#d3803c] shadow-shadow-xs hover:bg-[#be6b27] transition-colors">
							<span className="font-semibold text-white text-sm sm:text-base leading-5 relative w-fit [font-family:'Figtree',Helvetica] tracking-[0] whitespace-nowrap">
								Pay and join trip
							</span>

							<Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[3px] relative rounded-[20px] border-0">
								<span className="relative w-fit [font-family:'Figtree',Helvetica] font-semibold text-white text-xs sm:text-sm tracking-[0] leading-4 whitespace-nowrap">
									${data.estimatedPrice}
								</span>
							</Badge>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TripView;
