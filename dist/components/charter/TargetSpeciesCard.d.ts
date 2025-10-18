import React from "react";
export interface TargetSpeciesCardProps {
    /**
     * List of species names (English or ID) to display as pills.
     * Accepts either the English name or the canonical species ID.
     */
    species: string[];
    /**
     * Optional: custom className for the card container.
     */
    className?: string;
    /**
     * Optional: pill size (sm, md, lg)
     */
    pillSize?: "sm" | "md" | "lg";
}
/**
 * TargetSpeciesCard
 * Displays a list of target species as rich pills with images and local names.
 *
 * Note: Images must be present in the consumer app's /public/images/species folder.
 */
export declare const TargetSpeciesCard: React.NamedExoticComponent<TargetSpeciesCardProps>;
export default TargetSpeciesCard;
//# sourceMappingURL=TargetSpeciesCard.d.ts.map