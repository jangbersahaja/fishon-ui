export type ReviewBadge = {
    id: string;
    label: string;
    icon: string;
    description: string;
};
export declare const REVIEW_BADGES: ReviewBadge[];
export type ReviewBadgeId = (typeof REVIEW_BADGES)[number]["id"];
export declare function getRandomBadges(seed: string, minimum?: number, maximum?: number): ReviewBadgeId[];
export declare function resolveBadges(ids: ReviewBadgeId[]): ReviewBadge[];
export declare function summariseBadges(reviews: {
    badges?: ReviewBadgeId[];
}[]): Array<{
    badge: ReviewBadge;
    count: number;
}>;
//# sourceMappingURL=reviewBadges.d.ts.map