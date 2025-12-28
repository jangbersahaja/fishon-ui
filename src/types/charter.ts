// Charter type for BoatCard
export type Charter = {
  id: number;
  name: string;
  location: string;
  address: string;
  coordinates?: { lat: number; lng: number };
  images?: string[];
  imageUrl?: string;
  videos?: Array<{
    url: string;
    name?: string;
    thumbnailUrl?: string | null;
  }>;
  description: string;
  descriptionMy?: string | null; // Malay version of description
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
    imageUrl?: string;
    images?: Array<{ id: string; url: string; sortOrder: number }>;
  };
  captain: Captain;
  fishingType: FishingType;
  tier: Tier;
  schedule?: CharterSchedule;
  unavailability?: UnavailabilityPeriod[];
  // Analytics tracking IDs
  captainId?: string; // ID of the captain profile (operator)
  ownerId?: string; // ID of the user who owns this charter
  // Booking flow settings
  bookingFlowType?: "MANUAL" | "AUTO" | "DEPOSIT"; // MANUAL (request→approve→pay), AUTO (instant booking), or DEPOSIT (pay deposit first)
  // Deposit settings (for DEPOSIT flow)
  depositEnabled?: boolean; // If true, charter supports deposit booking
  depositPercent?: number; // Percentage of total price for deposit (e.g., 30 = 30%)
  depositMinAmount?: number | null; // Minimum deposit amount in RM
  depositThreshold?: number | null; // Minimum price to trigger deposit (null = always deposit)
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
  price: number; // RM - base price
  promoPrice?: number; // RM - captain's minimum acceptable price (price floor)
  priceOverride?: number; // RM - admin's active price override (what customers see if set)
  duration: string; // e.g. "4 hours", "8 hours" - formatted for display
  durationHours?: number; // Duration in hours (numeric) - for calculations
  description?: string;
  startTimes?: string[]; // 24h strings e.g. ["07:00","13:30"]
  maxAnglers?: number; // max pax fishing
  private?: boolean; // whole boat vs shared
  species?: string[]; // Target species for this trip
  techniques?: string[]; // Fishing techniques for this trip
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
      iconUrl: string;
      description: string;
    };
    count: number;
  }>;
}
