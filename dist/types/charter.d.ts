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
};
export type Trip = {
    name: string;
    price: number;
    duration: string;
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
            icon: React.ReactNode;
            description: string;
        };
        count: number;
    }>;
}
//# sourceMappingURL=charter.d.ts.map