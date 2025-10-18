// TechniqueCard.tsx (extracted)
"use client";

import React from "react";
import { SpeciesPills } from "./SpeciesPills";
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
export const TechniqueCard = React.memo(function TechniqueCard({
  techniques,
  className,
  pillSize = "md",
}: TechniqueCardProps) {
  if (!Array.isArray(techniques) || techniques.length === 0) return null;

  return (
    <div
      className={
        "rounded-2xl border border-black/10 bg-white p-5 sm:p-6 " +
        (className || "")
      }
    >
      <h3 className="mb-2 text-base font-semibold sm:text-lg">Techniques</h3>
      <SpeciesPills
        items={techniques.map((t) => ({ label: t }))}
        size={pillSize}
        stackedNames={false}
        showImage={false}
      />
    </div>
  );
});

// For backward compatibility with default import
export default TechniqueCard;
