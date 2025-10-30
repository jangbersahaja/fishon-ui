// Charter type for BoatCard
export type Charter = {
  id: number;
  name: string;
  location: string;
  address: string;
  coordinates?: { lat: number; lng: number };
  images?: string[];
  imageUrl?: string;
  description: string;
  trip: Trip[];
  species: string[];
  techniques: string[];
  includes: string[];
  excludes: string[];
  licenseProvided: boolean;
  pickup: Pickup;
  policies: Policies;
  languages?: string[];
  boat: {
    name: string;
    type: string;
    length: string;
    capacity: number;
    features: string[];
  };
  captain: Captain;
  fishingType: FishingType;
  tier: Tier;
  schedule?: CharterSchedule;
  unavailability?: UnavailabilityPeriod[];
};

export type CharterSchedule = {
  type: "EVERYDAY" | "WEEKDAYS" | "WEEKENDS" | "CUSTOM";
  operationalDays: number[]; // 0-6 (Sunday-Saturday)
};

export type UnavailabilityPeriod = {
  startDate: string | Date;
  endDate: string | Date;
  reason?: string | null;
};

// Charter types for @fishon/ui

export type Trip = {
  id?: string; // Trip ID from captain DB (required for booking creation)
  name: string;
  price: number; // RM
  duration: string; // e.g. "4 hours", "8 hours"
  description?: string;
  startTimes?: string[]; // 24h strings e.g. ["07:00","13:30"]
  maxAnglers?: number; // max pax fishing
  private?: boolean; // whole boat vs shared
};

export type Policies = {
  catchAndKeep: boolean;
  catchAndRelease: boolean;
  childFriendly: boolean;
  wheelchairAccessible?: boolean;
  liveBaitProvided?: boolean;
  alcoholAllowed?: boolean;
  smokingAllowed?: boolean;
};

export type Pickup = {
  available: boolean;
  included: boolean;
  fee?: number; // RM if not included
  areas?: string[]; // pickup coverage
  notes?: string;
};

export type Captain = {
  name: string;
  avatarUrl?: string; // logo/photo
  yearsExperience: number;
  crewCount: number;
  intro: string; // short intro paragraph
};

export type FishingType = "lake" | "stream" | "inshore" | "offshore";
export type Tier = "basic" | "silver" | "gold";

export interface ReviewMedia {
  id: string;
  type: "image" | "video";
  url: string;
  alt: string;
  poster?: string;
}

export interface ReviewProps {
  id: string;
  reviewerName: string;
  reviewerInitials?: string;
  createdAt: string;
  tripName: string;
  overallRating: number;
  review: string;
  badges?: string[];
  media?: ReviewMedia[];
}

export interface GuestFeedbackProps {
  reviews: Array<{
    createdAt: string;
    badges?: string[];
  }>;
  ratingAvg: number;
  ratingCount: number;
  summariseBadges: (reviews: Array<{ badges?: string[] }>) => Array<{
    badge: {
      id: string;
      label: string;
      icon: React.ReactNode;
      description: string;
    };
    count: number;
  }>;
}
