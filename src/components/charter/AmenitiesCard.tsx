"use client";

import React from "react";
import { AMENITIES_OPTIONS } from "../../data/amenities";
import {
  AmenityDefaultIcon,
  DrinksIcon,
  LifeJacketIcon,
  LiveBaitIcon,
  LureIcon,
  MealsIcon,
  RodReelIcon,
  SnacksIcon,
  TerminalTackleIcon,
} from "../icons/AmenityCustomIcons";

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

function getAmenityIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("live bait")) return <LiveBaitIcon />;
  if (l.includes("lures")) return <LureIcon />;
  if (l.includes("rod") || l.includes("reel")) return <RodReelIcon />;
  if (l.includes("terminal tackle")) return <TerminalTackleIcon />;
  if (l.includes("snack")) return <SnacksIcon />;
  if (l.includes("drinks")) return <DrinksIcon />;
  if (l.includes("meals")) return <MealsIcon />;
  if (l.includes("life jacket")) return <LifeJacketIcon />;
  return <AmenityDefaultIcon />;
}

/**
 * AmenitiesCard
 * Displays a list of included amenities as icons and labels.
 */
export const AmenitiesCard = React.memo(function AmenitiesCard({
  includes,
  className,
}: AmenitiesCardProps) {
  const charterIncludes = Array.isArray(includes)
    ? includes.map((a) => a.toLowerCase())
    : [];
  const included = AMENITIES_OPTIONS.filter((a) =>
    charterIncludes.includes(a.toLowerCase())
  );
  if (included.length === 0) return null;

  return (
    <section
      className={
        "mt-6 rounded-2xl border border-black/10 bg-white p-5 sm:p-6 " +
        (className || "")
      }
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold sm:text-lg">Amenities</h3>
        <p className="text-xs text-gray-500 sm:text-sm">
          {included.length} included
        </p>
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-700">Included</h4>
        <ul className="grid grid-cols-2 mt-2 text-sm text-gray-800 gap-x-4 gap-y-4 sm:grid-cols-2">
          {included.map((label) => (
            <li key={`inc-${label}`} className="flex items-center gap-3">
              {getAmenityIcon(label)}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

// For backward compatibility with default import
export default AmenitiesCard;
