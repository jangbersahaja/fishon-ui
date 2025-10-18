"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Anchor, MapPin, Ship } from "lucide-react";
import { useState } from "react";
import CaptainDetailModal from "./CaptainDetailModal";
// Helper function to convert to title case
const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
export default function CaptainCard({ captain }) {
    const [showModal, setShowModal] = useState(false);
    const displayNameTitleCase = toTitleCase(captain.displayName);
    return (_jsxs(_Fragment, { children: [_jsxs("button", { onClick: () => setShowModal(true), className: "group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-[#EC2227]/50 hover:shadow-lg", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#EC2227]/5 to-transparent" }), _jsxs("div", { className: "relative flex flex-col items-center justify-center h-full p-6 text-center", children: [_jsxs("div", { className: "relative mb-4", children: [_jsx("div", { className: "h-24 w-24 rounded-full overflow-hidden border-4 border-[#EC2227]/20 group-hover:border-[#EC2227]/50 transition-colors shadow-md", children: captain.avatarUrl ? (_jsx("img", { src: captain.avatarUrl, alt: captain.displayName, width: 96, height: 96, className: "object-cover w-full h-full" })) : (_jsx("div", { className: "h-full w-full bg-gradient-to-br from-[#EC2227]/10 to-[#EC2227]/5 flex items-center justify-center", children: _jsx(Anchor, { className: "h-8 w-8 text-[#EC2227]/40" }) })) }), _jsxs("div", { className: "absolute -bottom-1 -right-1 rounded-full bg-[#EC2227] px-2 py-1 text-[10px] font-bold text-white shadow-md", children: [captain.experienceYrs, "y"] })] }), _jsx("h3", { className: "text-lg font-bold text-neutral-900 group-hover:text-[#EC2227] transition-colors", children: displayNameTitleCase }), _jsxs("div", { className: "flex items-center justify-center gap-1 mt-2 text-sm text-neutral-600", children: [_jsx(MapPin, { className: "h-4 w-4 text-[#EC2227]" }), _jsx("span", { children: captain.city })] }), _jsx("p", { className: "mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-2", children: captain.bio || "Passionate fishing charter captain" }), _jsx("div", { className: "flex gap-3 mt-4 text-xs text-neutral-700", children: _jsxs("div", { className: "flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 group-hover:bg-[#EC2227]/10 transition-colors", children: [_jsx(Ship, { className: "h-3 w-3 text-[#EC2227]" }), _jsx("span", { className: "font-semibold", children: captain.charterCount }), _jsx("span", { children: "Trips" })] }) }), _jsx("div", { className: "mt-4 text-[#EC2227] font-semibold opacity-0 group-hover:opacity-100 transition-opacity", children: "View Profile \u2192" })] })] }), _jsx(CaptainDetailModal, { captain: captain, open: showModal, onOpenChange: setShowModal })] }));
}
