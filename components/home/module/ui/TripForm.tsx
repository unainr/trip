"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/lib/validation";
import { budgetOptions, groupTypes, interests, travelStyles } from "@/constants";
import { CreateTrip } from "@/lib/actions/create-trip";
import { Loader2, MapPin, Calendar, Users, Plane, Heart, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { Globe } from "./glob";
import { Country } from "@/types";
import Image from "next/image";


const fetchCountries = async (): Promise<Country[]> => {
	const res = await fetch(
		"https://restcountries.com/v3.1/all?fields=flags,name,latlng,maps"
	);
	const data = await res.json();

	return data.map((country: any) => ({
		name: country.name.common,
		coordinates: country.latlng,
		value: country.name.common,
		openStreetMap: country.maps?.openStreetMap,
		flags: country.flags.svg,
	}));
};

const TripForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const [countries, setCountries] = useState<Country[]>([]);
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			country: "",
			duration: "",
			groupType: "",
			travelStyle: "",
			interests: "",
			budget: "",
		},
	});

	useEffect(() => {
		const load = async () => {
			const fetched = await fetchCountries();
			setCountries(fetched);
		};
		load();
	}, []);

	// Watch for country selection changes
	const watchedCountry = form.watch("country");
	useEffect(() => {
		if (watchedCountry && countries.length > 0) {
			const country = countries.find(c => c.value === watchedCountry);
			setSelectedCountry(country || null);
		}
	}, [watchedCountry, countries]);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setLoading(true);
			const tripData = await CreateTrip(values);
			if (tripData.success) {
				setLoading(false);
				router.push(`/trip-id/${tripData?.data?.id}`);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="w-full bg-gray-50 py-12 px-4">
			<div className="mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Plan Your Perfect Trip
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Tell us about your dream destination and preferences, and we'll create a personalized itinerary just for you.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left Column - Form */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
						<div className="mb-8">
							<h2 className="text-2xl font-semibold text-gray-900 mb-2">Trip Details</h2>
							<p className="text-gray-600">Fill in your preferences to get started</p>
						</div>

						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
								{/* Country field */}
								<FormField
									control={form.control}
									name="country"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<MapPin className="w-4 h-4 text-black" />
												Destination Country
											</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} value={field.value}>
													<SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md">
														<SelectValue placeholder="Select your destination" />
													</SelectTrigger>
													<SelectContent className="max-h-60">
														<SelectGroup>
															{countries.map((c) => (
																<SelectItem key={c.value} value={c.value}>
																	<div className="flex items-center gap-3">
																		<Image
																		width={50}
																		height={50}
																		loading="lazy"
																			src={c.flags}
																			alt={c.name}
																			className="w-5 h-4 object-cover rounded-sm"
																		/>
																		<span>{c.name}</span>
																	</div>
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Duration */}
								<FormField
									control={form.control}
									name="duration"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<Calendar className="w-4 h-4 text-black" />
												Trip Duration (Days)
											</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="e.g., 7"
													className="h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Group Type */}
								<FormField
									control={form.control}
									name="groupType"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<Users className="w-4 h-4 text-black" />
												Group Type
											</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} value={field.value}>
													<SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md">
														<SelectValue placeholder="Who are you traveling with?" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															{groupTypes.map((type) => (
																<SelectItem key={type} value={type}>
																	{type}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Travel Style */}
								<FormField
									control={form.control}
									name="travelStyle"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<Plane className="w-4 h-4 text-black" />
												Travel Style
											</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} value={field.value}>
													<SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md">
														<SelectValue placeholder="What's your travel style?" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															{travelStyles.map((type) => (
																<SelectItem key={type} value={type}>
																	{type}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Interests */}
								<FormField
									control={form.control}
									name="interests"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<Heart className="w-4 h-4 text-black" />
												Interests
											</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} value={field.value}>
													<SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md">
														<SelectValue placeholder="What interests you most?" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															{interests.map((type) => (
																<SelectItem key={type} value={type}>
																	{type}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Budget */}
								<FormField
									control={form.control}
									name="budget"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-900">
												<DollarSign className="w-4 h-4 text-black" />
												Budget Range
											</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} value={field.value}>
													<SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-500 focus:ring-gray-500/20 rounded-md">
														<SelectValue placeholder="Select your budget range" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															{budgetOptions.map((type) => (
																<SelectItem key={type} value={type}>
																	{type}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button 
									type="submit" 
									disabled={loading}
									className="w-full h-12 text-white font-medium rounded-md transition-colors duration-200 shadow-sm"
									style={{
										backgroundColor: '#d3803c',
									}}
									onMouseEnter={(e) => {
										if (!loading) {
											e.currentTarget.style.backgroundColor = '#be6b27';
										}
									}}
									onMouseLeave={(e) => {
										if (!loading) {
											e.currentTarget.style.backgroundColor = '#d3803c';
										}
									}}
								>
									{loading ? (
										<>
											<Loader2 className="animate-spin w-5 h-5 mr-2" />
											Creating Your Trip...
										</>
									) : (
										"Create My Perfect Trip"
									)}
								</Button>
							</form>
						</Form>
					</div>

					{/* Right Column - Globe */}
					<div className=" overflow-hidden">
						<div className="relative h-[600px] w-full">
							{selectedCountry && (
								<div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-200">
									<div className="flex items-center gap-2">
										<img
											src={selectedCountry.flags}
											alt={selectedCountry.name}
											className="w-6 h-4 object-cover rounded-sm"
										/>
										<div>
											<p className="font-medium text-gray-900 text-sm">{selectedCountry.name}</p>
											<p className="text-xs text-gray-600">Selected Destination</p>
										</div>
									</div>
								</div>
							)}
							<Globe 
								className="inset-0"
								selectedCountry={selectedCountry ? {
									coordinates: selectedCountry.coordinates,
									name: selectedCountry.name
								} : null}
								autoRotate={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TripForm;