export interface LayoutProps{
    children: React.ReactNode
}


export interface Country {
  name: string;
  coordinates: [number, number];
  value: string;
  openStreetMap?: string;
	flags: string;

}

export interface TripFormData {
  country: string;
  travelStyle: string;
  interests: string;
  budget: string;
  duration: number;
  groupType: string;
}


export interface FormTrip {
    country: string;
    duration: string;
    groupType: string;
    travelStyle: string;
    interests: string;
    budget: string;
}


export interface TripData  {
  id: string;
  name: string;
  description: string;
  estimatedPrice: string;
  duration: number;
  budget: string;
  travelStyle: string;
  country: string;
  interests: string;
  groupType: string;
  bestTimeToVisit: string[];
  weatherInfo: string[];
  location: {
    city: string;
    coordinates: [number, number];
    openStreetMap: string;
  };
  itinerary: {
    day: number;
    location: string;
    activities: {
      time: string;
      description: string;
    }[];
  }[];
  imageUrls: string[];
};
