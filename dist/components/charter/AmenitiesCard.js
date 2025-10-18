"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { AMENITIES_OPTIONS } from "../../data/amenities";
import { AmenityDefaultIcon, DrinksIcon, LifeJacketIcon, LiveBaitIcon, LureIcon, MealsIcon, RodReelIcon, SnacksIcon, TerminalTackleIcon, } from "../icons/AmenityCustomIcons";
function getAmenityIcon(label) {
    const l = label.toLowerCase();
    if (l.includes("live bait"))
        return _jsx(LiveBaitIcon, {});
    if (l.includes("lures"))
        return _jsx(LureIcon, {});
    if (l.includes("rod") || l.includes("reel"))
        return _jsx(RodReelIcon, {});
    if (l.includes("terminal tackle"))
        return _jsx(TerminalTackleIcon, {});
    if (l.includes("snack"))
        return _jsx(SnacksIcon, {});
    if (l.includes("drinks"))
        return _jsx(DrinksIcon, {});
    if (l.includes("meals"))
        return _jsx(MealsIcon, {});
    if (l.includes("life jacket"))
        return _jsx(LifeJacketIcon, {});
    return _jsx(AmenityDefaultIcon, {});
}
/**
 * AmenitiesCard
 * Displays a list of included amenities as icons and labels.
 */
export const AmenitiesCard = React.memo(function AmenitiesCard({ includes, className, }) {
    const charterIncludes = Array.isArray(includes)
        ? includes.map((a) => a.toLowerCase())
        : [];
    const included = AMENITIES_OPTIONS.filter((a) => charterIncludes.includes(a.toLowerCase()));
    if (included.length === 0)
        return null;
    return (_jsxs("section", { className: "mt-6 rounded-2xl border border-black/10 bg-white p-5 sm:p-6 " +
            (className || ""), children: [_jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg", children: "Amenities" }), _jsxs("p", { className: "text-xs text-gray-500 sm:text-sm", children: [included.length, " included"] })] }), _jsxs("div", { className: "mt-3", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-700", children: "Included" }), _jsx("ul", { className: "mt-2 grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-gray-800 sm:grid-cols-2", children: included.map((label) => (_jsxs("li", { className: "flex items-center gap-3", children: [getAmenityIcon(label), _jsx("span", { children: label })] }, `inc-${label}`))) })] })] }));
});
// For backward compatibility with default import
export default AmenitiesCard;
