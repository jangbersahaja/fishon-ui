// TechniqueCard.tsx (extracted)
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { SpeciesPills } from "./SpeciesPills";
/**
 * TechniqueCard
 * Displays a list of fishing techniques as rich pills.
 */
export const TechniqueCard = React.memo(function TechniqueCard({ techniques, className, pillSize = "md", }) {
    if (!Array.isArray(techniques) || techniques.length === 0)
        return null;
    return (_jsxs("div", { className: "rounded-2xl border border-black/10 bg-white p-5 sm:p-6 " +
            (className || ""), children: [_jsx("h3", { className: "mb-2 text-base font-semibold sm:text-lg", children: "Techniques" }), _jsx(SpeciesPills, { items: techniques.map((t) => ({ label: t })), size: pillSize, stackedNames: false, showImage: false })] }));
});
// For backward compatibility with default import
export default TechniqueCard;
