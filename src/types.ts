export interface Activity {
  id: string;
  title: string;
  notes: string;
  location: string;
  time?: string;
}

export interface ItineraryDay {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  activities: Activity[];
}

export interface Photo {
  id: string;
  tripId: string;
  dataUrl: string; // base64 encoded image
  caption: string;
  createdAt: string;
}

export interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  coverPhoto?: string; // base64 or placeholder color
  description: string;
  createdAt: string;
}
