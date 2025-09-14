import { TripFormData } from "@/types";

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
  "Sports & Fitness",
  
];


export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];


export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];


export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];




// import React from "react";
// import { MapPin } from "lucide-react";
// import { auth } from "@clerk/nextjs/server";
// import { getUserCreatedTrips } from "@/lib/actions/create-trip";
// import { TripData } from "@/types";

// export default async function TripCard() {
//   const { userId } = await auth();
//   if (!userId) return null;
//   const getUserTrip = await getUserCreatedTrips(userId);
//   const userData = getUserTrip?.data?.trip as TripData;

//   return (
//     <div className="w-full p-6">
//       <h2 className="text-2xl font-bold mb-6">{userData.travelStyle}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//         <div className="w-full max-w-64 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//           <div className="relative">
//             <div
//               className="w-full h-48 bg-cover bg-center bg-gray-200"
//               style={{ backgroundImage: `url(${userData.imageUrls[0]})` }}>
//               <div className="absolute top-4 right-4">
//                 <span className="bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
//                   {userData.estimatedPrice}
//                 </span>
//               </div>
//             </div>

//             <div className="p-4 space-y-3">
//               <h3 className="font-semibold text-gray-800 text-lg leading-tight">
//                 {userData.name.slice(0, 21)}
//               </h3>

//               <div className="flex items-center gap-1.5">
//                 <MapPin className="w-4 h-4 text-gray-500" />
//                 <span className="text-gray-500 text-sm">
//                   {userData.location.city}
//                 </span>
//               </div>

//               <div className="flex items-center gap-2 flex-wrap pt-1">
//                 <span
//                   className={`bg-green-100 text-green-800  font-medium text-xs px-3 py-1 rounded-full border-0 hover:opacity-80 transition-opacity duration-200`}>
//                   {userData.budget}
//                 </span>

//                 <span
//                   className={`bg-blue-100 text-blue-800  font-medium text-xs px-3 py-1 rounded-full border-0 hover:opacity-80 transition-opacity duration-200`}>
//                   {userData.groupType}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
