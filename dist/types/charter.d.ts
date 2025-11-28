export type Charter = {
    id: number;
    name: string;
    location: string;
    address: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
    images?: string[];
    imageUrl?: string;
    videos?: Array<{
        url: string;
        name?: string;
        thumbnailUrl?: string | null;
    }>;
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
    captainId?: string;
    ownerId?: string;
    bookingFlowType?: "MANUAL" | "AUTO";
};
export type CharterSchedule = {
    type: "EVERYDAY" | "WEEKDAYS" | "WEEKENDS" | "CUSTOM";
    operationalDays: number[];
};
export type UnavailabilityPeriod = {
    startDate: string | Date;
    endDate: string | Date;
    reason?: string | null;
};
export type Trip = {
    id?: string;
    name: string;
    price: number;
    promoPrice?: number;
    priceOverride?: number;
    duration: string;
    durationHours?: number;
    description?: string;
    startTimes?: string[];
    maxAnglers?: number;
    private?: boolean;
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
    fee?: number;
    areas?: string[];
    notes?: string;
};
export type Captain = {
    name: string;
    avatarUrl?: string;
    yearsExperience: number;
    crewCount: number;
    intro: string;
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
    summariseBadges: (reviews: Array<{
        badges?: string[];
    }>) => Array<{
        badge: {
            id: string;
            label: string;
            iconUrl: string;
            description: string;
        };
        count: number;
    }>;
}
//# sourceMappingURL=charter.d.ts.map