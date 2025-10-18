import React from "react";
export interface TechniqueCardProps {
    /**
     * List of technique names to display as pills.
     */
    techniques: string[];
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
 * TechniqueCard
 * Displays a list of fishing techniques as rich pills.
 */
export declare const TechniqueCard: React.NamedExoticComponent<TechniqueCardProps>;
export default TechniqueCard;
//# sourceMappingURL=TechniqueCard.d.ts.map