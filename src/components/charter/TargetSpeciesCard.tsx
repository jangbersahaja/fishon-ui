"use client";
import React, { useMemo } from "react";
import { SPECIES_BY_ID, SpeciesItem } from "../../data/species";
import { SpeciesPills } from "./SpeciesPills";

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
export const TargetSpeciesCard = React.memo(function TargetSpeciesCard({
  species,
  className,
  pillSize = "md",
}: TargetSpeciesCardProps) {
  // Memoize pill items to avoid unnecessary work on re-render
  const pillItems = useMemo(() => {
    return species.map((nameOrId) => {
      // Try to find by ID first, then by English name
      let item: SpeciesItem | undefined = SPECIES_BY_ID[nameOrId];
      if (!item) {
        item = Object.values(SPECIES_BY_ID).find(
          (sp) =>
            sp.english_name.toLowerCase() === nameOrId.toLowerCase() ||
            sp.local_name.toLowerCase() === nameOrId.toLowerCase()
        );
      }
      if (!item) {
        // fallback: just show the string
        return { label: nameOrId };
      }
      return {
        id: item.id,
        english: item.english_name,
        local: item.local_name,
        imageSrc: item.image,
      };
    });
  }, [species]);

  if (!pillItems.length) return null;

  return (
    <div
      className={
        "rounded-2xl border border-black/10 bg-white p-5 sm:p-6 " +
        (className || "")
      }
    >
      <h3 className="text-base font-semibold sm:text-lg mb-2">
        Target species
      </h3>
      <SpeciesPills items={pillItems} size={pillSize} stackedNames showImage />
    </div>
  );
});

// For backward compatibility with default import
export default TargetSpeciesCard;
