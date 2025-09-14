"use server";

import { db } from "@/drizzle/db";
import { TripTable } from "@/drizzle/schema";
import { FormTrip } from "@/types";
import { groq } from "@ai-sdk/groq";
import { auth } from "@clerk/nextjs/server";
import { generateText } from "ai";
import { desc, eq } from "drizzle-orm";
export const CreateTrip = async (params: FormTrip) => {
	const { userId } = await auth();
	if(!userId) return null
	const { country, travelStyle, interests, budget, duration, groupType } =
		params;
	const unSplashApiKey = process.env.UNSPLASH_ACCESS_KEY;
	try {
		const responose = await generateText({
			model: groq("openai/gpt-oss-120b"),
			prompt: `Generate a ${duration}-day travel itinerary for ${country} based on the following user information:
        Budget: '${budget}'
        Interests: '${interests}'
        TravelStyle: '${travelStyle}'
        GroupType: '${groupType}'
        Return the itinerary and lowest estimated price in a clean, non-markdown JSON format with the following structure:
        {
        "name": "A descriptive title for the trip",
        "description": "A brief description of the trip and its highlights not exceeding 100 words",
        "estimatedPrice": "Lowest average price for the trip in USD, e.g.$price",
        "duration": ${duration},
        "budget": "${budget}",
        "travelStyle": "${travelStyle}",
        "country": "${country}",
        "interests": ${interests},
        "groupType": "${groupType}",
        "bestTimeToVisit": [
          'Season (from month to month): reason to visit',
          'Season (from month to month): reason to visit',
          'Season (from month to month): reason to visit',
          'Season (from month to month): reason to visit'
        ],
        "weatherInfo": [
          'Season: temperature range in Celsius (temperature range in Fahrenheit)',
          'Season: temperature range in Celsius (temperature range in Fahrenheit)',
          'Season: temperature range in Celsius (temperature range in Fahrenheit)',
          'Season: temperature range in Celsius (temperature range in Fahrenheit)'
        ],
        "location": {
          "city": "name of the city or region",
          "coordinates": [latitude, longitude],
          "openStreetMap": "link to open street map"
        },
        "itinerary": [
        {
          "day": 1,
          "location": "City/Region Name",
          "activities": [
            {"time": "Morning", "description": "Visit the local historic castle and enjoy a scenic walk"},
            {"time": "Afternoon", "description": "Explore a famous art museum with a guided tour"},
            {"time": "Evening", "description": "Dine at a rooftop restaurant with local wine"}
          ]
        },
        ...
        ]
    }`,
		});
		const trip = JSON.parse(responose.text.trim());

		const imageResponse = await fetch(
			`https://api.unsplash.com/search/photos?query=${country} ${interests} ${travelStyle}&client_id=${unSplashApiKey}`
		);
		const imageUrls = (await imageResponse.json()).results
			.slice(0, 3)
			.map((result: any) => result.urls?.regular || null);

		const insertDb = await db
			.insert(TripTable)
			.values({
				userId,
				trip: JSON.stringify({
					...trip,
					imageUrls,
				}),
			})
			.returning();
		return { success: true, data: insertDb[0] };
	} catch (error: any) {
		console.log(error.message);
		throw new Error(error.message);
	}
};

export const getTripById = async (id: string) => {
	try {
		const getTrip = await db
			.select()
			.from(TripTable)
			.where(eq(TripTable.id, id));
		if (!getTrip || getTrip.length === 0) {
			throw new Error("Trip not found");
		}
		return { success: true, data: getTrip[0] };
	} catch (error: any) {
		return { success: false, error };
	}
};

export const getUserCreatedTrips = async (id: string) => {
	try {
		const userTrips = await db
			.select()
			.from(TripTable)
			.where(eq(TripTable.userId, id))
			.orderBy(desc(TripTable.createdAt));
		console.log(userTrips);
		return { success: true, data: userTrips[0], count: userTrips.length };
	} catch (error: any) {
		console.error("Error fetching user created trips:", error);
		return {
			success: false,
			error: error.message || "Failed to fetch user trips",
		};
	}
};


export const getAllTrip = async () => { 
  try {

    const allTrips = await db.select().from(TripTable).orderBy(desc(TripTable.createdAt));
    return { success: true, data: allTrips };
    
  } catch (error:any) {
    console.error("Error fetching All created trips:", error);
		return {
			success: false,
			error: error.message || "Failed to fetch All trips",
		};
  }
 }