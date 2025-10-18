import React from "react";
export interface AmenitiesCardProps {
    /**
     * List of included amenities (case-insensitive match to AMENITIES_OPTIONS).
     */
    includes: string[];
    /**
     * Optional: custom className for the card container.
     */
    className?: string;
}
/**
 * AmenitiesCard
 * Displays a list of included amenities as icons and labels.
 */
export declare const AmenitiesCard: React.NamedExoticComponent<AmenitiesCardProps>;
export default AmenitiesCard;
//# sourceMappingURL=AmenitiesCard.d.ts.map